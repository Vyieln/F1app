import SearchInfo from './components/SearchInfo';
import './index.css';
import { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoDriver, setInfoDriver]  = useState([]);
  const [infoTrack, setInfoTrack] = useState([]);

  useEffect(() => {
    console.log('Loaded')
  }, [])

  const getData = (Info) => {
    const ENDPOINT = `https://ergast.com/api/f1/${Info.year}/${Info.race}/results.json`
    axios(ENDPOINT).then(response => {
      setIsLoading(false);
      console.log('te')
      console.log('RES',response.data.MRData.RaceTable.Races[0].Results[0].Driver)
      
      if (response.data) {
        setInfoTrack(response.data.MRData.RaceTable.Races[0].Circuit)
        setInfoDriver(response.data.MRData.RaceTable.Races[0].Results[0].Driver)
      } else {
        console.log("An error happened")
      }
    }).catch(error => {
      setIsLoading(false);
      console.log('An error happened', error)
    })
  }
  // const content = isLoading ? <div> Loading ... </div> : <div><pre>{JSON.stringify(dataBlock,null,2)}</pre></div>

  return (
    
    <div className="container">
      
      <h1> F1 Info App </h1>
  <div className="container">
      <p> Name: {infoDriver.givenName + ' ' + infoDriver.familyName } </p>

      <p> Location: {infoTrack.circuitName} </p>
      <SearchInfo onAdd={getData}/> 
      <h1> </h1>
      </div>
    </div>
  );
}

export default App;
