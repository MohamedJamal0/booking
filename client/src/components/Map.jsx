import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import MarkerIcon from '../assets/marker.png';

export default function Map({ latitude, longitude }) {
  const customMarkerIcon = L.icon({
    iconUrl: MarkerIcon,
    iconSize: [50, 50],
    iconAnchor: [16, 32],
  });
  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        style={{ height: '100%', width: '100%', position: 'relative' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={customMarkerIcon} />
      </MapContainer>
    </div>
  );
}
