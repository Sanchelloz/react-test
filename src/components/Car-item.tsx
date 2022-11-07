import React from 'react';
import {Car} from "../models";

interface CarProps {
    car: Car
}

function CarItem({car}: CarProps) {
    return (
        <h1 className="border px-3 py-3 flex flex-col items-center mb-2">
            {car.car_model}
        </h1>
    );
}

export default CarItem;