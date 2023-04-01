import GoogleMapReact from 'google-map-react';

const Map = () => {
  const mapStyles = {
    height: '100vh',
    width: '100%'
  };
  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194
  };

  return (
    <div style={mapStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'TU_API_KEY' }}
        defaultCenter={defaultCenter}
        defaultZoom={10}
      />
    </div>
  );
};

export default Map;
