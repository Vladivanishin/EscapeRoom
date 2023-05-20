import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// const position = [59.968322, 30.317359];
export default function Map(): JSX.Element {

  return (
    <MapContainer
      center={[59.968322, 30.317359]}
      zoom={13}
      zoomControl={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.968322, 30.317359]}>
        <Popup>
          EscapeRoom <br /> We here!
        </Popup>
      </Marker>
    </MapContainer>
  );
}

