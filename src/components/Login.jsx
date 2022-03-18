import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({});

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.email) {
                errors.email = 'Email es requerido.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Email inválido. Ej: example@email.com';
            }

            if (!data.password) {
                errors.password = 'Password es requerido.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            
            axios.post('https://hackteam1.herokuapp.com/login', data)
            .then(response => {
                localStorage.setItem("profile", JSON.stringify(response?.data))
                navigate('home');
            })
            .catch(error => {
                console.log(error)
                alert("Usuario o password incorrectos.")
            });
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <div className='grid'>
            <div className='col-10 col-offset-2'>
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <img src="coder.png" alt="logo" height={50} className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Onboarding de equipo</div>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div>
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                    <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                                </span>
                                {getFormErrorMessage('email')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask feedback={false}
                                        className={classNames({ 'p-invalid': isFormFieldValid('password') })} />
                                    <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
                                </span>
                                {getFormErrorMessage('password')}
                            </div>

                            <Button type="submit" label="Ingresar" icon="pi pi-user" className="w-full" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;