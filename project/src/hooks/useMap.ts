import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  questCoords: [number, number], zoom?: number
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: questCoords[0],
          lng: questCoords[1],
        },
        zoom: zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, questCoords, zoom]);

  return map;
}
