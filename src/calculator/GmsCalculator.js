import React, { useState } from 'react';
import './calculator.css';
import { Header } from './components/Header'
import { BoatTypeMenu } from './components/BoatType'
import { DistanceInput } from './components/DistanceInput'
import { GoldMedalSpeed } from './components/GoldMedalSpeed';
import { Speed } from './components/Speed';
import { TimeInput } from './components/timeInput'

import NavBar from '../components/NavBar';
import Filler from '../components/Filler';

function GmsCalculator() {
  const [boatType, setBoatType] = useState('M1x')
  const [distance, setDistance] = useState(2000)
  const [time, setTime] = useState([0,0,0])
  const [boatSpeed, setBoatSpeed] = useState()

  return (
    <div className="home-container">
      {NavBar()}
      <div className="gms-calculator-container">
        {Header()}
        <main>
          {BoatTypeMenu(boatType, setBoatType)}
          {DistanceInput(distance, setDistance)}
          {TimeInput(time, setTime)}
          {Speed(distance, time, setBoatSpeed)}
          {GoldMedalSpeed(boatType, boatSpeed)}
        </main>
      </div>
      {Filler()}
    </div>
  );
}

export default GmsCalculator;
