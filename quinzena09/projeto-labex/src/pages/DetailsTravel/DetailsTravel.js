import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/requisitions'
import { OptionTravel, SelectTravel, DivCandidate} from './styledDetailsTravel'
import { DivApp } from '../../styledApp'

export default function DetailsTravel () {
    const [ trips, setTrips ] = useState([])
    const [ idTripSelected, setIdTripSelected ] =  useState("")
    const [ tokenLabex, setTokenLabex ] = useState("")
    const [ detailTrip, setDetailTrip ]= useState({})

    useEffect(() => {
        getTrips()
        getToken()
    },[])

    useEffect(() => {
        if(idTripSelected !== "") {
            getDetailsTrip()
        }
       
    },[idTripSelected])

    const getTrips = async () => {
        try{
            const response = await axios.get(`${BASE_URL}/trips`)
            console.log("response ===", response.data.trips)
            setTrips(response.data.trips)
        }catch(error) {
            alert(error.message)
        }
    }

    const getDetailsTrip = async () => {
        try{
            console.log("idTripSelected", idTripSelected)
            const response = await axios.get(`${BASE_URL}/trip/${idTripSelected}`, {
                headers: {
                    auth: tokenLabex
                }
            })
            
            setDetailTrip(response.data.trip)
        }catch(error) {
            alert(error.message)
        }
    }

    const getToken = () => {
        setTokenLabex(window.localStorage.getItem("tokenLabex"))
    }

    const onChangeSelectTravel = (idTripSelected) => {
        setIdTripSelected(idTripSelected)
    }

    let componentTravel
    if(detailTrip.candidates !== undefined ) {
        componentTravel = <div key={detailTrip.id}>
            <div>{`Viagem: ${detailTrip.name}`}</div>
            {detailTrip.candidates.map((candidate) => {
                return <DivCandidate>
                 <div>
                    {candidate.name}
                </div>
                <div>
                    {candidate.profession}
                </div>
                <div>
                    {candidate.applicationText}
                </div>
                <div>
                    {candidate.country}
                </div>
                <div>
                    {candidate.age}
                </div>
                </DivCandidate>
            })}
        </div>
    }

    return (
        <div>
           <SelectTravel onChange={(e) => onChangeSelectTravel(e.target.value)} >
                <OptionTravel>Selecione a Viagem</OptionTravel> 
                {trips.map((trip) => {
                    return <OptionTravel 
                        value={trip.id} 
                        key={trip.id}
                    >
                        {trip.name}
                    </OptionTravel>
                })}

                
            </SelectTravel>
            {componentTravel}

        </div>
    )
}
