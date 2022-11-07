import React from 'react';
import {cars} from "./data/data";
import CarItem from "./components/Car-item";



function App() {
  return (

      <div className="container mx-auto max-w-2xl pt-5">
          {
              cars.map((car) => {
                  return <CarItem car={car}/>
              })
          }
      </div>
  );
}

export default App;
