import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/requisitions'
import { DivTravel, DivTravels } from './stylesTravels'


export default function Travels () {
    const [ trips, setTrips ] = useState([])
    
    useEffect(() => {
        getTrips()
    },[])


    const getTrips = async () => {
        try{
            const response = await axios.get(`${BASE_URL}/trips`)
            console.log("response ===", response.data.trips)
            setTrips(response.data.trips)
        }catch(error) {
            alert(error.message)
        }
    }

    const componentTravels = trips.map((travel) => {
        return (
            <DivTravel>
                <h2>{travel.name}</h2>
                <h4>{travel.planet}</h4>
                <h4>{travel.description}</h4>
                <h4>{`Duração: ${travel.durationInDays} dias`}</h4>
                <h4>{`Data: ${travel.date}`}</h4>
            </DivTravel>
        )
    })


    return (
        <DivTravels>
            {componentTravels}
        </DivTravels>
    )
}