import bruxelles from "./../Ressources/bruxelles.jpg";


export function Cartes({ f, t }) {
  const day = f.day;
  var depart = f.departureDate;
  var arrivee = f.arrivalDate;
  const prix = f.price.value;
  const prixString = prix + f.price.currencySymbol;

  var dateDeparture = new Date(depart);
  var dateArrival = new Date(arrivee);
  var differenceInMillisec = dateArrival - dateDeparture;
  var differenceInHours = Math.floor(differenceInMillisec / (1000 * 60 * 60));
  var differenceInMinutes = Math.floor((differenceInMillisec % (1000 * 60 * 60)) / (1000 * 60));

  let dureeTrajet; // Déplacez la déclaration à l'extérieur de la condition

  if (differenceInHours >= 1) {
    dureeTrajet = "Durée du trajet : " + differenceInHours + "h" + differenceInMinutes + "min";
  } else {
    dureeTrajet = "Durée du trajet : " + differenceInMinutes + "min";
  }

  var dateDepartLocale = dateDeparture.toLocaleTimeString();

  return (
    <>
      <div className='col-md-4'>
        <div className='card mb-4'>
        <img src={bruxelles} className="card-img-top"></img>
          <div className='card-body'>
            <h5 className='card-title'>{t}</h5>
            <p className='card-text'>Depart le : {day} à {dateDepartLocale}</p>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'> Prix : {prixString}</li>
            <li className='list-group-item'>{dureeTrajet}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Voir le trajet</a>
          </div>
        </div>
      </div>
    </>
  );
}
