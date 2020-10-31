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
        <div className='container my-3 text-white'>
            <h2 className="text-center text-white display-4" ref={nodeCont}>&#60;Contacto/&#62;</h2>
            <p className="text-center">¿Tenés una idea y querés plasmarla? ¡Nosotros te ayudamos!</p>
            <p className="text-center">Dejanos tu mensaje desde el siguiente formulario de contacto y pronto nos comunicaremos.</p>
            <div className="container">
                <div className='row mx-0 justify-content-center flex-wrap'>
                    <div className="col col-md-4 align-self-center order-2 order-md-1">
                        <h2 className="text-center">Nuestras Redes</h2>
                        <div className="text-right pr-md-5 my-3 my-md-0">
                            <a href="!#" className="text-white text-decoration-none">+ 54 9 381 6261384 <i className="fab redesIcon my-2 fa-whatsapp ml-3"></i></a>
                            <br/>
                            <a href="!#" className="text-white text-decoration-none">Decodevs <i className="fab redesIcon my-2 fa-facebook ml-3"></i></a>
                            <br/>
                            <a href="!#" className="text-white text-decoration-none">contaco@decodevs.com <i className="far redesIcon my-2 fa-envelope ml-3"></i></a>
                        </div>
                    </div>
                    <div className="col-md-5 px-0 order-1 order-md-2">
                        <form ref={nodeForm}>
                            <div className="form-group">
                                <input type="text" id="nombre" className="form-control rounded-lg" name='name'
                                    aria-describedby="emailHelp"
                                    onChange={handleChange} maxLength='10' placeholder='Nombre Completo'/>
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
                                    onChange={handleChange} maxLength='200' placeholder='Escribe un Mensaje'/>
                            </div>

                            <button type="submit" className="btn btn-light font-weight-bold" onClick={handlerBottom}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form;