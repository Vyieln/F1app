import { useState, useEffect } from "react";
import { Card , Button, Tab, Tabs} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Panel = ( {DriverName} ) => {
    const [Photo, setPhoto] = useState('https://e7.pngegg.com/pngimages/981/645/png-clipart-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-thumbnail.png')

    const EnterData = () => {
        if (DriverName[3].Time.time){
            return <p></p>
        }
    }

    const nameF = `${DriverName[1].Driver.givenName}`.slice(0,3)
    const nameL = `${DriverName[1].Driver.code}`
    const nameFsingle = nameF.slice(0,1)
    const nameFUPPER = nameF.toUpperCase()
    const nameFlower = nameF.toLowerCase()
    const nameLlower = nameL.toLowerCase()



    const link = `https://www.formula1.com/content/dam/fom-website/drivers/${nameFsingle}/${nameFUPPER}${nameL}01_${DriverName[1].Driver.givenName}_${DriverName[1].Driver.familyName}/${nameFlower}${nameLlower}01.png.transform/2col/image.png`
    return (
     
        <div className="">
          
              {console.log(DriverName)}
            {/* <p>Name: {DriverName[1].givenName} <br></br>{DriverName[1].familyName} </p>  */}
            <Card style={{ width: '25rem', height: '22rem' }}>
  <Card.Img variant="top" src="" />
  <Tabs
  defaultActiveKey="home"
  transition={true}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="home" title="Driver Profile">
    
      <img src={link} width='150' height='150' />
      <p> Driver Name: {DriverName[1].Driver.givenName} {DriverName[1].Driver.familyName}</p>
      <p> Nationality: {DriverName[1].Driver.nationality}</p>
      <p> Team: {DriverName[1].Constructor.name}</p>
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

</Card>
        </div>
    )
}

export default Panel
