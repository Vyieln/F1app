import SearchInfo from './components/SearchInfo';
import './index.css';
import { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import CarouselApp from './components/CarouselApp';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoDriver, setInfoDriver]  = useState([]);
  const [infoTrack, setInfoTrack] = useState([]);
  const [infoQual, setInfoQual] = useState([])
  const [showData, setShowData] = useState(false)
  
  
  useEffect(() => {
    console.log('Loaded')
  }, [])

  const getData = (Info) => {

    const ENDPOINT = `https://ergast.com/api/f1/${Info.year}/${Info.race}/results.json`
    const QENDPOINT = `http://ergast.com/api/f1/${Info.year}/${Info.race}/qualifying.json`
    const Profile = axios.get(ENDPOINT)
    const Qualifying = axios.get(QENDPOINT)

    axios.all([Profile, Qualifying]).then(axios.spread((...response) => {
      
     
      console.log('RES',response[0].data.MRData.RaceTable.Races[0].Results[0].Driver)
      console.log('RES - Qualify',response[1].data.MRData.RaceTable.Races[0].QualifyingResults)
      
      
      if (response[0].data) {
        setInfoTrack(response[0].data.MRData.RaceTable.Races[0].Circuit)
        setInfoDriver(response[0].data.MRData.RaceTable.Races[0].Results[0].Driver)
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
  const Name = infoDriver.givenName
  const ArrayEx = [infoDriver.givenName, infoDriver.driverId]

  console.log(ArrayEx)
  const Datas = JSON.stringify(infoDriver)
  const Data = JSON.parse(Datas)
  console.log(Data)
 
  const DisplayCaro = () => {
    if (isLoading === false){
        return <CarouselApp DriverName={ArrayEx} />
  } else {
    return <p> nothing </p>
  }
  }
  const DisplayDatas = () => {
    return {Name}
  }

  const content = isLoading ? infoDriver : infoDriver
  const Text = "hello"
  return (
    
    <div className="container">
      
      <h1> F1 Info App {Text} </h1>
  <div className="container">
      {showData && <p> Name: {infoDriver.givenName} {infoDriver.familyName} </p>}
      <p> Name: {infoDriver.givenName} {infoDriver.familyName} </p>
     <DisplayCaro />
      <p> Location: {infoTrack.circuitName} </p>
      <p> Qualifying {infoQual.Q1} </p>
      <SearchInfo onAdd={getData} onAnswer={() => setShowData(!showData)}/> 
      {/* <h1> <DisplayDatas /> </h1> */}
      {/* <CarouselApp DriverData={content} RaceData={infoQual} Dataget={getData}/> */}
      </div>
    </div>
  );
}

export default App;
