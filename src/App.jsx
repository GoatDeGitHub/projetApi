import React, { useState, useEffect } from 'react';
import {Cartes} from './Compoments/Cartes.jsx';
import { Title } from './Compoments/Title.jsx';
import { Accueil } from './View/Accueil.jsx';


const App = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enActivite, setEnActivite] = useState(false);
  const villeDepart = ["TLS","Toulouse"];
  const villeDestination = ["CRL","Bruxelles-Charles-Roi"];
  const moisDeRecherche = ["2024-02-01","février 2024"];
  const title = `${villeDepart[1]} -> ${villeDestination[1]}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://services-api.ryanair.com/farfnd/3/oneWayFares/${villeDepart[0]}/${villeDestination[0]}/cheapestPerDay?outboundMonthOfDate=${moisDeRecherche[0]}`);
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          const filteredFlights = data.outbound.fares.filter(flight => flight.price !== null);
          setFlights(filteredFlights);
          setLoading(false);
        } else {
          console.error('La réponse n\'est pas au format JSON.');
          const htmlContent = await response.text();
          console.log('Contenu HTML reçu:', htmlContent);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
    console.log(flights);
  }, [])




  const Affichage = () => {
    return <>
    <div className='row p-5'>
      {flights.map((flight, index) => (
          <Cartes f={flight} t={title}></Cartes>
      ))}
    </div>
    </>
  }

  return (
    <div>
      {enActivite ? (
        <>
        <div className='container'>
          <Title titl={title} />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Affichage />
          )}
          </div>
        </>
      ) : (
        <Accueil/>
      )}
    </div>
  );
}

export default App;
