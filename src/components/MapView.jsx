import { useMap } from "react-leaflet";

function MapView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
}

export default MapView

//setting the location to center