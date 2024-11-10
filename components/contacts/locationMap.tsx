'use client';
// components/MapComponent.tsx
import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker, InfoWindow } from '@react-google-maps/api';
import ContactBox from '@/components/contacts/contactBox';
const containerStyle = {
  width: '100%',
  height: '418px'
};

const center = {
  lat: 50.0755, // Například souřadnice pro Prahu
  lng: 14.4378
};

const businessLocation = {
  lat: 50.07419991452807,
  lng: 14.445746183331979
};

const MapComponent: React.FC = () => {
  const API = process.env.NEXT_GOOGLE_MAPS_API as string;
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <ContactBox>
      <LoadScript googleMapsApiKey={API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {/* <Marker
            position={businessLocation}
            onClick={() => setSelected(true)} // Otevře InfoWindow po kliknutí
          /> */}
          {selected && (
            <InfoWindow position={businessLocation} onCloseClick={() => setSelected(false)}>
              <div>
                <h4>Název Podniku</h4>
                <p>Adresa podniku, otevírací doba, atd.</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </ContactBox>
  );
};

export default MapComponent;
