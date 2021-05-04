import React , {useEffect,useRef} from 'react';
import mapboxgl     from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = "pk.eyJ1IjoibWhqc2dkNzgiLCJhIjoiY2ttdTl1ZmhoMHpqaDJxcDlwcWU3NWJ0bCJ9.O4KqRllGXwmfkqqnfL-SbQ";

const Map = () => {
    const map_container = useRef();

    useEffect(() => {
        const map = new mapboxgl.Map({
            container : map_container.current,
            style     : 'mapbox://styles/mapbox/streets-v11',
        });
        return () => map.remove()
    },[])

    return <div className="map-container" ref={map_container} />
}

export default Map
