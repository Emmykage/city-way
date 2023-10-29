import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const [coordinates, setCoordinates] = useState({ lat: 9.059676306288111, lng: 7.47815996115190 });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);
  console.log(coordinates);

  return (
    <div className="w-full z-0 left-0 h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBHLWgphtdgzhywmRajHsGiRc1VO8c7ifs' }}
        defaultCenter={coordinates}
        defaultZoom={14}
        center={coordinates}
        margin={[50, 50, 50, 50]}
        options=""
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
      >
        <div />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
