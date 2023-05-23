import { Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { DEFAULT_COORDINATE, MAP_ZOOM, defaultCustomIcon } from '../../const';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

export default function ContactMap(): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, [DEFAULT_COORDINATE.latitude, DEFAULT_COORDINATE.longitude], MAP_ZOOM);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: DEFAULT_COORDINATE.latitude,
        lng: DEFAULT_COORDINATE.longitude
      });

      marker.setIcon(defaultCustomIcon).addTo(map);
    }
  }, [map]);

  return (
    <div className="map">
      <div className="map__container" ref={mapRef}></div>
    </div>
  );
}
