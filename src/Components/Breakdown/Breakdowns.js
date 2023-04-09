import './Breakdown.css';
import Breakdown from '../Breakdown/Breakdown'
import React, { useState , useEffect } from 'react';
import axios from "axios";

export default function Breakdowns() {

    const [breakdowns, setBreakDowns] = useState([])

    useEffect(() => {
        const getBreakdowns = async () => {
            let breakdowns = await axios.get('http://localhost:4000/breakdowns')
            setBreakDowns(breakdowns.data)
        }
        getBreakdowns()
    }, [])

  return (
    <div>
      <div className="break-downs">
      <h1>Breakdowns :</h1>
          {breakdowns.map((breakdown) => (<Breakdown  breakdown={breakdown} /> ))}
      </div>
    </div>
  )
}
