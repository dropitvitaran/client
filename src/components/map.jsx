import React,{useState,useEffect,useRef} from 'react';
import ReactMapGL, {GeolocateControl,NavigationControl} from "react-map-gl";
import mapboxgl from 'mapbox-gl'

const geolocateControlStyle= {
  right: 10,
  top: 10
};

const navControlStyle= {
    left: 10,
    top: 10
  };




export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  const nav = new mapboxgl.NavigationControl({
    visualizePitch: true
    });



    // var directions = new MapboxDirections({
    //   accessToken: process.env.REACT_APP_MAPBOX
    // })

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/darksider51/ckpijb0qi1unb17rtosxrlaz7',
    center: [lng, lat],
    zoom: zoom,
    accessToken:process.env.REACT_APP_MAPBOX
    });

  


    },[]);

useEffect(()=>{
  if(!map.current) return;

  map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });


    


},[])


useEffect(()=>{
map.current.on("load",()=>{
  map.current.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
    }));
})

map.current.addControl(nav, 'bottom-right');
// map.current.addControl(directions,"top-left")
},[])


  return (
    // <ReactMapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}
    //  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
    //  mapStyle="mapbox://styles/darksider51/ckpijb0qi1unb17rtosxrlaz7"
    // >
    //   <GeolocateControl
    //     style={geolocateControlStyle}
    //     positionOptions={{enableHighAccuracy: true}}
    //     trackUserLocation={true}
    //     auto
    //   />
    //    <NavigationControl style={navControlStyle} />
    // </ReactMapGL>
    
<div  ref={mapContainer} className="map-container" />

  );
}