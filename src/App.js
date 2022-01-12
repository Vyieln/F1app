import SearchInfo from './components/SearchInfo';
import './index.css';
import { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import CarouselApp from './components/CarouselApp';
import Panel from './components/Panel';
import { Container, Row, Col } from 'react-bootstrap'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoDriver, setInfoDriver]  = useState([]);
  const [infoTrack, setInfoTrack] = useState([]);
  const [infoQual, setInfoQual] = useState([])
  const [showData, setShowData] = useState(false)
  const [infoFastest, setinfoFastest] = useState([])
  const [move, setMove] = useState(false)
  
  
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
        setInfoDriver(response[0].data.MRData.RaceTable.Races[0].Results[0])
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
 
 
  //scrapper


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
    
    <div className="containers">
      
      <h1> F1nfo</h1>
 
      <Container>
    {}
  <Row>
    <Col>{!isLoading && <SearchInfo onAdd={getData} onAnswer={() => setShowData(!showData)}/>} </Col>
    <Col>{isLoading && <SearchInfo onAdd={getData} onAnswer={() => setShowData(!showData)}/>} </Col>
    <Col>  <DisplayPan /></Col>
  </Row>
</Container>
     
     
   
    </div>
  );
}

export default App;
