import React, {useEffect, useState} from 'react'
import { ButtonSend, 
    DivContentRegister, 
    DivRegister, 
    FormRegister, 
    InputAge, 
    InputCountry, 
    InputName, 
    InputProfession, 
    InputText, 
    TextRegister,
    OptionTravel,
    SelectTravel } 
from './stylesRegisterToTravel'
import axios from 'axios';
import { BASE_URL } from '../../constants/requisitions';
import { goToHomePage } from '../../components/routes/Coordinator';
import { useHistory } from 'react-router';

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);

    const onChange = (value, name) => {
      setForm({ ...form, [name]: value });
    };
  
    return { form, onChange };
};

export default function RegisterToTravel () {
    const history = useHistory();
    const { form, onChange } = useForm({ name: "", age: "", applicationText: "", profession: "", country: ""  });
    const [ trips, setTrips ] = useState([])
    const [ idTripSelected, setIdTripSelected ] =  useState("")

    useEffect(() => {
        getTrips()
    },[])

    const onChangeSelectTravel = (idTripSelected) => {
        setIdTripSelected(idTripSelected)
    }

    const getTrips = async () => {
        try{
            const response = await axios.get(`${BASE_URL}/trips`)
            console.log("response ===", response.data.trips)
            setTrips(response.data.trips)
        }catch(error) {
            alert(error.message)
        }
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target;

        onChange(value, name);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(form);
        
        idTripSelected ?  postApplyToTrip(idTripSelected) : alert("selecione a viagem")
        
    };

    const postApplyToTrip = async (idTrip) => {
        
        try{
            const response = await axios.post(`${BASE_URL}/trips/${idTrip}/apply`, form )
            alert(response.data.message)
            goToHomePage(history)
        }catch(error) {
            alert(error.message)
        }
      
    }
    
    console.log("trips", trips)
    return (
        <DivRegister>
            <DivContentRegister>
                <TextRegister>Registrar-se para uma Viagem</TextRegister>
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
                <FormRegister onSubmit={onSubmitForm}>
                    <InputName
                        value={form.name}
                        placeholder={"Nome"}
                        onChange={handleInputChange}
                        name={"name"}
                        type={"text"}
                        required
                    />
                    <InputAge
                        value={form.age}
                        placeholder={"Idade"}
                        onChange={handleInputChange}
                        name={"age"}
                        type={"number"}
                        required

                    />
                    <InputText
                        value={form.applicationText}
                        placeholder={"Motivo"}
                        onChange={handleInputChange}
                        name={"applicationText"}
                        type={"text"}
                        required

                    />
                    <InputProfession
                        value={form.profession}
                        placeholder={"Profissão"}
                        onChange={handleInputChange}
                        name={"profession"}
                        type={"text"}
                        required

                    />
                    <InputCountry
                        value={form.country}
                        placeholder={"País"}
                        onChange={handleInputChange}
                        name={"country"}
                        type={"text"}
                        required

                    />
                    <ButtonSend>Enviar</ButtonSend>
                </FormRegister>
            </DivContentRegister>
        </DivRegister>
    )
  }