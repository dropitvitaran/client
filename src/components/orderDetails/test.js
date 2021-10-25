
import React, { useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import TablePagination from "./TablePagination";
import "./TableStyles.scss";

const IndeterminateCheckbox = React.forwardRef(
	({ indeterminate, ...rest }, ref) => {
		const defaultRef = React.useRef();
		const resolvedRef = ref || defaultRef;

		React.useEffect(() => {
			resolvedRef.current.indeterminate = indeterminate;
		}, [resolvedRef, indeterminate]);

		return (
			<>
				<input type='checkbox' ref={resolvedRef} {...rest} />
			</>
		);
	}
);

const ActionTable = ({ columns, data, editModalTitle, deleteModalTitle }) => {
	// Use the state and functions returned from useTable to build your UI
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page, // Instead of using 'rows', we'll use page,
		// which has only the rows for the active page

		// The rest of these things are super handy, too ;)
		canPreviousPage,
		canNextPage,
		pageOptions,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
		},
		useSortBy,
		usePagination,
		useRowSelect,
		(hooks) => {
			hooks.visibleColumns.push((columns) => [
				// Let's make a column for selection
				{
					id: "selection",
					// The header can use the table's getToggleAllRowsSelectedProps method
					// to render a checkbox
					Header: ({ getToggleAllRowsSelectedProps }) => (
						<div>
							<IndeterminateCheckbox
								{...getToggleAllRowsSelectedProps()}
							/>
						</div>
					),
					// The cell can use the individual row's getToggleRowSelectedProps method
					// to the render a checkbox
					Cell: ({ row }) => (
						<div>
							<IndeterminateCheckbox
								{...row.getToggleRowSelectedProps()}
							/>
						</div>
					),
				},
				...columns,
			]);
		}
	);

	// Render the UI for your table
	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(
										column.getSortByToggleProps()
									)}>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>
											{
												cell.render("Cell")
											}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default ActionTable;


// import React, { useMemo } from 'react'
// import { useTable, usePagination } from 'react-table'
// import OrderData from './orderData.json'
// import { COLUMNS } from './columns'

// export const Order = () => {

//     const columns = useMemo(()=>COLUMNS,[])
//     const data = useMemo(()=>OrderData,[])

    

//     const{
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         page,
//         prepareRow,
//         nextPage,
//         previousPage,
//         state,
//         setPageSize
//     } = useTable({
//         columns,
//         data,
//     },
//     usePagination
//     )

//     const { pageSize } = state

//     return (
//         <>
//         <div>
//         Show 
//             <select value={pageSize} onChange = {e => setPageSize(Number(e.target.value))}>
//                 {[10,15,20,50].map(pageSize=>(
//                     <option key={pageSize} value={pageSize}>{pageSize}</option>
//                 ))}
//             </select>
//         </div>
//         <table {...getTableProps()}>
//             <thead >
//                 {headerGroups.map((headerGroup) =>(
//                     <tr {...headerGroup.getHeaderGroupProps()}>
//                         {headerGroup.headers.map((column)=>(
//                             <th {...column.getHeaderProps()}>
//                                 {column.render('Header')}
//                             </th>
//                         ))}
                        
//                     </tr>
//                 ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//                 {page.map((row)=>{ prepareRow(row)
//                 return(
//                     <tr {...row.getRowProps()}>
//                         {row.cells.map((cell)=>{
//                             return <td {...cell.getCellProps()}>
//                                 {cell.render('Cell')}
//                             </td>
//                         })}
                        
//                     </tr>
//                 )
                    
//                 })}
                
//             </tbody>
//         </table>
//         {/* <div>
//             <button onClick = {() => previousPage()}>Previous</button>
//             <button onClick = {() => nextPage()}>Next</button>
//         </div> */}
//         </>
//     )
// }


// import React, { useState } from 'react'
// import { useTable } from 'react-table'


// export const Order = ({ column, data }) => {
//     console.log(column);
//     const{
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//     }= useTable({
//         column,
//         data,
//     })

//     return (
//         <table {...getTableProps()}>
//             <thead>
//                 { headerGroups.map((headerGroup) => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             { headerGroup.headers.map((column) => (
//                                     <th {...column.getHeaderProps()}>
//                                         { column.render('Header') }
//                                     </th>
//                                 ))}   
//                         </tr>
//                     ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>{
//                 rows.map(row => {
//                     prepareRow(row)
//                     return (
//                         <tr {...row.getRowProps()}>
//                             { row.cells.map((cell)=> {
//                                     return(
//                                         <td {...cell.getCellProps()}>
//                                             {cell.render('Cell')}
//                                         </td>
//                                     )})
//                             }
//                 </tr>
//                     )
//                 })
//             }
//             </tbody>
//         </table>
//     )
// }
