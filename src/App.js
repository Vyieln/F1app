import SearchInfo from './components/SearchInfo';
import './index.css';
import { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import CarouselApp from './components/CarouselApp';
import Panel from './components/Panel';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoDriver, setInfoDriver]  = useState([]);
  const [infoTrack, setInfoTrack] = useState([]);
  const [infoQual, setInfoQual] = useState([])
  const [showData, setShowData] = useState(false)
  const [infoFastest, setinfoFastest] = useState([])
  
  
  useEffect(() => {
    console.log('Loaded')
  }, [])

  const getData = (Info) => {

    const ENDPOINT = `https://ergast.com/api/f1/${Info.year}/${Info.race}/results.json`
    const QENDPOINT = `https://ergast.com/api/f1/${Info.year}/${Info.race}/qualifying.json`
    const Profile = axios.get(ENDPOINT)
    const Qualifying = axios.get(QENDPOINT)

    axios.all([Profile, Qualifying]).then(axios.spread((...response) => {
      
     
      console.log('RES',response[0].data.MRData.RaceTable.Races[0].Results[0].Driver)
      console.log('RES - Qualify',response[1].data.MRData.RaceTable.Races[0].QualifyingResults)
      
      
      if (response[0].data) {
        setInfoTrack(response[0].data.MRData.RaceTable.Races[0].Circuit)
        setInfoDriver(response[0].data.MRData.RaceTable.Races[0].Results[0].Driver)
        setinfoFastest(response[0].data.MRData.RaceTable.Races[0].Results[0].FastestLap)
      } else {
        console.log("An error happened")
      }

      if (response[1].data) {
        setInfoQual(response[1].data.MRData.RaceTable.Races[0].QualifyingResults[0])
      } else {
        console.log("An error happened")
      }
      setIsLoading(false);
    })).catch(error => {
      setIsLoading(false);
      console.log('An error happened', error)
    })
  }

  // Created an Array called ArrayEx to pass through the Carousel component with data from the GET API
  const Name = infoDriver.givenName
  const DriverArr = [infoTrack, infoDriver, infoQual, infoFastest]

 
  const DisplayCaro = () => {
    if (isLoading === false){
        return <CarouselApp DriverName={DriverArr} />

  } else {
    return <p> </p>
  }
}

  
  const DisplayPan = () => {
    if (isLoading === false){
        return <Panel DriverName={DriverArr} />

  } else {
    return <p> </p>
  }
  }

  const content = isLoading ? infoDriver : infoDriver
 
  return (
    
    <div className="container">
      
      <h1> F1 Info App</h1>
  <div className="container">

      {/* {showData && <p> Name: {infoDriver.givenName} {infoDriver.familyName} </p>}
      <p> Name: {infoDriver.givenName} {infoDriver.familyName} </p> */}
     
      {/* <DisplayCaro /> */}
      <DisplayPan />
      {/* <p> Location: {infoTrack.circuitName} </p>
      <p> Qualifying {infoQual.Q1} </p> */}

      <SearchInfo onAdd={getData} onAnswer={() => setShowData(!showData)}/> 
     
  
      </div>
    </div>
  );
}

export default App;
