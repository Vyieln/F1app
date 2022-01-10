import Carousel, { CarouselItem } from "./CarouselMov";
import react from "react";
import { useState, useEffect } from "react";


const CarouselApp = ( {DriverName} ) => {
  
  return (
    <div className="App">
      {console.log(DriverName[2])}
      {console.log(DriverName[1])}
      {console.log(DriverName[0])}
      <Carousel>
        <CarouselItem>
        <div>           <p>Name: {DriverName[1].givenName} {DriverName[1].familyName} </p> <br />
          <br /></div>
          <p>Name: {DriverName[1].givenName} <br></br>{DriverName[1].familyName} </p> 
          
          <p>Nationality: {DriverName[1].nationality} </p>
          <h1>Hello</h1>

        </CarouselItem>
        <CarouselItem> Qualifying {DriverName[1].givenName} <br /> hello <br /> testing</CarouselItem>
        <CarouselItem> Item3 </CarouselItem>
      </Carousel>
    </div>
  );
};

export default CarouselApp;
