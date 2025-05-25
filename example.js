import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const AnimatedRouteMap = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const animationRef = useRef(null);

  // Example route (GeoJSON LineString)
  const routeGeoJSON = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-122.483696, 37.833818],
        [-122.483482, 37.833174],
        [-122.483396, 37.8327],
        [-122.483568, 37.832056],
        [-122.48404, 37.831141],
        [-122.48404, 37.830497],
        [-122.483482, 37.82992],
        [-122.483568, 37.829548],
        [-122.48507, 37.829446],
      ],
    },
  };

  // Animate color using hue shift
  const animateLineColor = (timestamp) => {
    const hue = (timestamp / 50) % 360; 
    const color = `hsl(${hue}, 100%, 50%)`;

    if (mapRef.current && mapRef.current.getLayer('route-line')) {
      mapRef.current.setPaintProperty('route-line', 'line-color', color);
    }

    animationRef.current = requestAnimationFrame(animateLineColor);
  };

  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = new mapboxgl.Map({.
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-122.483696, 37.833818],
      zoom: 15,
    });

    mapRef.current.on('load', () => {
      // Add route source
      mapRef.current.addSource('route', {
        type: 'geojson',
        data: routeGeoJSON,
      });

      // Add route layer
      mapRef.current.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': 'hsl(0, 100%, 50%)',
          'line-width': 5,
        },
      });

      // Start animation
      animationRef.current = requestAnimationFrame(animateLineColor);
    });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (mapRef.current) mapRef.current.remove();
    };
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '500px' }} />;
};

export default AnimatedRouteMap;


/*
// Import Turf.js
import turf from '@turf/turf';

// Define start and end points
const start = turf.point([-122, 48]);
const end = turf.point([-77, 39]);

// Create a great circle arc
const greatCircle = turf.greatCircle(start, end, { npoints: 100 });

// Get the coordinates of the arc
const arc = greatCircle.geometry.coordinates;

// Create a GeoJSON feature with the arc coordinates
const route = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'LineString',
    coordinates: arc,
  },
};

// Add the route to your Mapbox GL JS map
map.addSource('route', {
  type: 'geojson',
  data: route,
});

map.addLayer({
  id: 'route',
  source: 'route',
  type: 'line',
  paint: {
    'line-width': 2,
    'line-color': '#007cbf',
  },
});
*/