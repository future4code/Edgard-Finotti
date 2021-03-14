import React, {useState} from 'react'
import {DivLogin, DivContentLogin, ButtonLoging, InputEmail, InputPassword, FormLogin, TextLogin} from './stylesLogin'

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value });
    };
  
    return { form, onChange };
  };

export default function Login () {
    const { form, onChange } = useForm({ email: "", password: "" });

    const handleInputChange = (event) => {
        const { value, name } = event.target;

        onChange(value, name);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <DivLogin>
            <DivContentLogin>
                <TextLogin>Login</TextLogin>
                <FormLogin onSubmit={onSubmitForm}>
                    <InputEmail
                        value={form.email}
                        placeholder={"Email"}
                        onChange={handleInputChange}
                        name={"email"}
                        type={"email"}
                        required
                    />
                    <InputPassword
                        value={form.password}
                        placeholder={"Password"}
                        onChange={handleInputChange}
                        name={"password"}
                        type={"password"}
                        required

                    />
                    <ButtonLoging>Logar</ButtonLoging>
                </FormLogin>
            </DivContentLogin>
        </DivLogin>
    )
}