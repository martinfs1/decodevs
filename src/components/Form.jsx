import React from 'react';
import axios from 'axios';
import Swall from 'sweetalert2';

function Form() {

    const [dataForm, setDataForm] = React.useState({})

    const nodeCont = React.useRef(null);
    const nodeForm = React.useRef(null);

    const handleChange = e => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    }

    const handlerBottom = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/v1/form', dataForm)
            Swall.fire({
                icon: 'success',
                title: 'Envio Exitoso. Pronto responderemos tu consulta',
            });
            nodeForm.current.reset()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container-fluid pt-3 pb-3 text-white imgBgForm'>
            <h2 className="title text-center text-black display-4" ref={nodeCont}>Contacto</h2>
            <p className="title text-center">¿Tenés una idea y querés plasmarla? ¡Nosotros te ayudamos!</p>
            <p className="title text-center">Dejanos tu mensaje en el siguiente formulario de contacto y pronto nos comunicaremos.</p>
            <div className="container">
                <div className='row mx-0 justify-content-center flex-wrap'>

                    <div className="col-md-5 px-0 order-1 order-md-2">
                        <form ref={nodeForm}>
                            <div className="form-group">
                                <input type="text" id="nombre" className="form-control rounded-lg" name='name'
                                    aria-describedby="emailHelp"
                                    onChange={handleChange} maxLength='10' placeholder='Nombre Completo' />
                            </div>
                            {/* <div className="form-group">
                                <input type="text" className="form-control rounded-lg" name='celphone'
                                    id="celphone"
                                    onChange={handleChange} maxLength='11' placeholder='Tel. Celular'/>
                            </div> */}
                            <div className="form-group">
                                <input type="text" className="form-control rounded-lg" name='email'
                                    id="email"
                                    onChange={handleChange} maxLength='50'
                                    placeholder='mail@ejemplo.com' />
                            </div>
                            <div className="form-group">
                                <textarea type="text" rows="4" className="form-control rounded-lg" name='textarea'
                                    id="message"
                                    onChange={handleChange} maxLength='200' placeholder='Escribe un Mensaje' />
                            </div>

                            <button type="submit" className="btn btn-dark font-weight-bold" onClick={handlerBottom}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;