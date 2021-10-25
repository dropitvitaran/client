import React from "react";
import { PreviousIcon, NextIcon } from "assets";
import IconButton from "common/buttons/IconButton";

const TablePagination = ({
	pageSize,
	setPageSize,
	pageIndex,
	pageOptions,
	previousPage,
	canPreviousPage,
	nextPage,
	canNextPage,
}) => {
	return (
		<div className='table-pagination'>
			<select
				value={pageSize}
				onChange={(e) => {
					setPageSize(Number(e.target.value));
				}}>
				{[10, 20, 30, 40, 50].map((pageSize) => (
					<option key={pageSize} value={pageSize}>
						Item {pageSize}
					</option>
				))}
			</select>
			<span className='right-section'>
				<span>
					Page{" "}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>{" "}
				</span>

				<IconButton
					icon={<PreviousIcon />}
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
				/>

				<IconButton
					icon={<NextIcon />}
					onClick={() => nextPage()}
					disabled={!canNextPage}
				/>
			</span>
		</div>
	);
};

export default TablePagination;