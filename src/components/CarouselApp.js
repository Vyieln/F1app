import Carousel, { CarouselItem } from "./CarouselMov";
import react from "react";
import { useState, useEffect } from "react";

const CarouselApp = ( {DriverName} ) => {
  // const [newDriver, setNewDriver] = useState('');

  // // setNewDriver(DriverData)
  // useEffect(() => {
  //   setNewDriver(DriverName);
  // }, []);
  return (
    <div className="App">
      {console.log(DriverName[0])}
      {/* <h1>Hello Testing {DriverName} Test S</h1> */}
      {/* {console.log(newDriver.DriverName)} */}
    
      {/* <p>
        Name: {newDriver.DriverName} {newDriver.DriverName}
      </p> */}
      <Carousel>
        <CarouselItem>
       
          Name: {DriverName[0]}
        </CarouselItem>
        <CarouselItem> Qualifying </CarouselItem>
        <CarouselItem> Item3 </CarouselItem>
      </Carousel>
    </div>
  );
};

export default CarouselApp;
