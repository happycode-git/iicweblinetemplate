import React, { useRef, useEffect } from 'react';

export default function Map({ address, width, height, minHeight, classes }) {
  const mapRef = useRef();

  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 }, // Set the initial map center coordinates
      zoom: 16, // Set the initial zoom level
    });

    // Use the Geocoding API to convert the address to coordinates
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        // Set the map center to the coordinates of the provided address
        map.setCenter(results[0].geometry.location);

        // Create a marker for the address
        new window.google.maps.Marker({
          map,
          position: results[0].geometry.location,
          title: address,
        });
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  }, [address]); // Re-run the effect when the address changes

  return <div className={classes} ref={mapRef} style={{ width, height, minHeight: minHeight !== undefined ? minHeight : "300px" }}></div>;
}

