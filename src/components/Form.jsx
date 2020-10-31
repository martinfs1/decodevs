import axios from 'axios'
import React, { useState } from 'react'
import Swall from 'sweetalert2'

function Form() {

    const [dataForm, setDataForm] = useState({})
    const [lastname, setLastName] = useState('')
    const [celphone, setCelphone] = useState('')
    const [email, setEmail] = useState('')
    const [textarea, setTextarea] = useState('')

    console.log(dataForm);

    const handleChange = e => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    }

    const clearState = () => {
        // setName('')
        setLastName('')
        setCelphone('')
        setEmail('')
        setTextarea('')       
    }

    const handlerBottom = async (e) => {
        e.preventDefault()

        // if (name.trim() === '') {
        //     Swall.fire('Campo Nombre Vacio', 'Por favor Completar el Campo Correctamente', 'error')
        //     return
        // }
        if (lastname.trim() === '') {
            Swall.fire('Campo Apellido Vacio', 'Por favor Completar el Campo Correctamente', 'error')
            return
        }
        if (celphone.trim() === '') {
            Swall.fire('Campo Telefono Vacio', 'Por favor Completar el Campo Correctamente', 'error')
            return
        } else if (isNaN(celphone)) {
            Swall.fire('Campo Telefono Tiene una Letra', 'Solo se Permiten Numeros', 'error')
            return
        }
        if (email.trim() === '') {
            Swall.fire('Campo Email Vacio', 'Por favor Completar el Campo Correctamente', 'error')
            return
        } if (textarea.trim() === '') {
            Swall.fire('Campo Mensaje Vacio', 'Por favor Completar el Campo Correctamente', 'error')
            return
        }

        try {
            await axios.post('/api/v1/form', {
                // name: name.trim(),
                lastname: lastname.trim(),
                celphone: celphone.trim(),
                email: email.trim(),
                textarea: textarea.trim()
            })
            Swall.fire({
                icon: 'success',
                title: 'Envio Exitoso. Revisa Tu Mail',
              });
            clearState()
            
        } catch (error) {
            console.log(error)
        }
    }

    

    return (
        <div className='container'>
            <div className='row'>
                <div className="col col-md-6 col-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre Completo</label>
                            <input type="text" id="nombre" className="form-control" name='name'
                                aria-describedby="emailHelp"
                                onChange={handleChange} maxLength='10' placeholder='Nombre/s'/>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Apellido</label>
                            <input type="text" className="form-control" name='lastname'
                                id="exampleInputPassword1"
                                onChange={handleChange} maxLength='20' placeholder='Apellido/s'/>
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="celphone">Teléfono Celular</label>
                            <input type="text" className="form-control" name='celphone'
                                id="celphone"
                                onChange={handleChange} maxLength='11' placeholder='Fijo o Celular'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email de Contacto</label>
                            <input type="text" className="form-control" name='email'
                                id="email"
                                onChange={handleChange} maxLength='50'
                                placeholder='mail@ejemplo.com' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea type="text" className="form-control" name='textarea'
                                id="message"
                                onChange={handleChange} maxLength='200' placeholder='Escribir Mensaje'/>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <button type="submit" className="btn btn-primary" onClick={handlerBottom}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Form;