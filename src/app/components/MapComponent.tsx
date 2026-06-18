"use client";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from "react-leaflet";
import {useState} from "react";

L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ClickMarkers() {
    const [markers, setMarkers] = useState<[number, number][]>([]);

    useMapEvents({
        click(e) {
            setMarkers((prev) => [
                ...prev,
                [e.latlng.lat, e.latlng.lng],
            ]);
        },
    });

    return (
        <>
            {markers.map((position, index) => (
                <Marker key={index} position={position}>
                    <Popup>Marker {index + 1}</Popup>
                </Marker>
            ))}
        </>
    );
}
export default function MapComponent() {
    return (
        <MapContainer
            center={[51.067, 4.5]}
            zoom={13}
            style={{ height: "500px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.067, 4.5]}>
                <Popup>
                    Thomas More Sint-Katelijne-Waver
                </Popup>
            </Marker>

            <ClickMarkers></ClickMarkers>
        </MapContainer>
    );
}