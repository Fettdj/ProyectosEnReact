import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  //loading = true
  const [tours, setTours]= useState([])
  //tours = []
  
  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  };

  const fetchTours = async () => {
    setLoading(true); //Llamo a una funcion asincrona que hara cosas simultaneamente
    
    try { //intento extraer los datos de mi API usando el termino await para que espere por los datos

      const response = await fetch(url); //Extrar datos con la funcion fetch para indicar que es un recurso de manera asincrona 
      const tours = await response.json();
      //Transformo los datos extraido para trabajar con ellos en total tengo cinco datos
      setLoading(false);
      //Asigno el cambiuo de Tours por los datso agarrados de la API
      setTours(tours);
    } catch (error){
      //Por si ocurre un error
      setLoading(true);
      console.log(error);
    };
  };

  
  useEffect(() => {
    fetchTours();
  }, [])

  if(loading){
    return ( 
      <main>
        <Loading/>
      </main>
    );
  };

  if (tours.length === 0){
    return (<main>
      <div className = 'title'>
        <h2>No hay más tours</h2>
        <button className = 'btn' onClick = {fetchTours}>Refresh</button>
      </div>
    </main>)
  }
  return (
  <main>
    <Tours tours = {tours} removeTour = {removeTour}/>
  </main>
  );
}

export default App