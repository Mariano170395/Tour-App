import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {

  // 1/-Defino states
  //Loading
  const [loading, setLoading] = useState(false)
  //Defino mis tours como un array vacio 
  const [tours, setTours] = useState([]) 
 
  //3-Fetch API Data (asi se hizo primero)
  // const fetchTours = async () =>{
  //   setLoading(true)
  //   const response = await fetch(url);
  //   const tours = await response.json()
  //   console.log(tours)
  // } 

  //Con try catch para que hayan errores
  const fetchTours = async () =>{
  setLoading(true)

  try {
      const response = await fetch(url);
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
  } catch (error) {
      setLoading(false)
      console.log(error)
  }
  }
  //fetchTours() --> Loop infinito
  //4-Para evitar el loop useEffect
  useEffect(() => {
    fetchTours()
  }, [])

  //2-Condicion para usar el loading
  if(loading==true){
    return <main>
      <Loading /> 
    </main>
  }

  return <main>
    <Tours tours={tours}/>
  </main>
}

export default App
