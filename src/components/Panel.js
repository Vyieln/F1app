import { useState, useEffect } from "react";
import { Card , Button, Tab, Tabs} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Panel = ( {DriverName} ) => {
    const EnterData = () => {
        if (DriverName[3].Time.time){
            return <p></p>
        }
    }
    return (
      
        <div className="center">
              {console.log(DriverName)}
            {/* <p>Name: {DriverName[1].givenName} <br></br>{DriverName[1].familyName} </p>  */}
            <Card style={{ width: '25rem', height: '15rem' }}>
  <Card.Img variant="top" src="" />
  <Tabs
  defaultActiveKey="home"
  transition={true}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="home" title="Driver Profile">
      <p> Driver Name: {DriverName[1].givenName} {DriverName[1].familyName}</p>
      <p> Nationality: {DriverName[1].nationality}</p>
      <p> Team: {DriverName[2].Constructor.name}</p>
      <p> </p>
  
  </Tab>
  <Tab eventKey="profile" title="Driver Stats">
      <p>Q1 : {DriverName[2].Q1}</p>
      <p>Q2 : {DriverName[2].Q2}</p>
      <p>Q3 : {DriverName[2].Q2}</p>
      <p>Race : {DriverName[3].Time.time}</p>
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="contact" title="Stat Graph">
    {/* <Sonnet /> */}
  </Tab>
</Tabs>
  {/* <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body> */}
</Card>
        </div>
    )
}

export default Panel
