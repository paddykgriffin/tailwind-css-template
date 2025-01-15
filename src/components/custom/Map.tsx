"use client";

import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 53.349217, // Latitude of the center of the map (San Francisco)
  lng: -6.244341, // Longitude of the center of the map
};

const MapComponent = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  useEffect(() => {
    if (
      map &&
      window.google &&
      window.google.maps &&
      window.google.maps.marker
    ) {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: center,
        map: map,
        title: "This is a custom marker!",
      });

      return () => {
        marker.map = null; // Clean up the marker on unmount
      };
    }
  }, [map]);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      // Make sure the 'marker' library is loaded
      version="beta" // Ensure you're using the version that supports AdvancedMarkerElement
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
      >
        {/* The AdvancedMarkerElement is now being added in useEffect */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
