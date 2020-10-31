import axios from 'axios'
import React, { useState } from 'react'
import Swall from 'sweetalert2'

function Form() {

    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [celphone, setCelphone] = useState('')
    const [email, setEmail] = useState('')
    const [textarea, setTextarea] = useState('')


    const clearState = () => {
        setName('')
        setLastName('')
        setCelphone('')
        setEmail('')
        setTextarea('')
    }

    const handlerBottom = async (e) => {
        e.preventDefault()

        if (name.trim() === '') {
            Swall.fire('Campo Nombre Vacio', 'Por favor Completar el Campo Correctamente', 'error')
            return
        }
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
                name: name.trim(),
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
                            <label htmlFor="exampleInputEmail1">Nombre</label>
                            <input type="text" className="form-control" value={name} name='name'
                                id="exampleInputEmail1" aria-describedby="emailHelp"
                                onChange={e => setName(e.target.value)} maxLength='10' placeholder='Nombre/s' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Apellido</label>
                            <input type="text" className="form-control" value={lastname} name='lastname'
                                id="exampleInputPassword1"
                                onChange={e => setLastName(e.target.value)} maxLength='20' placeholder='Apellido/s' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Telefono</label>
                            <input type="text" className="form-control" value={celphone} name='celphone'
                                id="exampleInputPassword1"
                                onChange={e => setCelphone(e.target.value)} maxLength='11' placeholder='Fijo o Celular' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email de Contacto</label>
                            <input type="text" className="form-control" value={email} name='email'
                                id="exampleInputPassword1"
                                onChange={e => setEmail(e.target.value)} maxLength='50'
                                placeholder='Por Ej: mail@dominio' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Mensaje</label>
                            <textarea type="text" className="form-control" value={textarea} name='textarea'
                                id="exampleInputPassword1"
                                onChange={e => setTextarea(e.target.value)} maxLength='200' placeholder='Escribir Mensaje' />
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