import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const MyAlert = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Imposta showAlert su false dopo 3 secondi (puoi modificare il tempo a tuo piacimento)
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    // Pulisci il timeout quando il componente si smonta
    return () => clearTimeout(timeout);
  }, []); // L'array vuoto [] indica che useEffect viene eseguito solo una volta al caricamento

  return (
    <div>
      {showAlert && (
        <Alert className='mt-4' variant="dark" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Libreria Nyarlathotep </Alert.Heading>
          <p>
           Benvenuti nel Caos Strisciante
          </p>
        </Alert>
      )}
    </div>
  );
};

export default MyAlert;
