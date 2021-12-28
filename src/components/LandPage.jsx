import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getName } from '../actions/actions';
import '../css-modules/landPage.css'

const cake = require('../assets/cake2.png')

const LandPage = () => {
    const [name, setName] = useState('');
    const [nameSend, setNameSend] = useState('');
    const [path, setPath] = useState('')
    const dispatch = useDispatch()

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      } 

    const handleName = (e) => {
        setName(removeAccents(e.target.value).toLowerCase());
        if (name.includes('geraldine roman')) {
            setPath('/QueLosCumplasFeliz')
            setNameSend(name);
            dispatch(getName(nameSend))
        } else {
            setPath('/PersonaErronea')
        }
    }

    const handleSubmit = () => {
    }

    return (
        <>

            <div className='birthday'>

                <div className='birthday_inner'>

                    <div className='birthday_inner__stage stage1'>
                        <div className='intro_cake'>
                            <img className='intro' src={cake} alt='imagenIntro' />
                        </div>
                        <h2 className='start'>Feliz Cumpleaños!!!</h2>
                        <p className='start'>Esta web es única y exclusivamente para una persona en específico, si lo eres, indica tu nombre y apellidos en el campo</p>
                        <form>
                            <input className='start' type="text" placeholder="nombre y apellidos ..." onChange={(e) => handleName(e)} />
                            <Link to={path}>
                                <button type='submit' className='start' onClick={(e) => handleSubmit(e)}>Continuar</button>
                            </Link>
                        </form>

                    </div>

                </div>
            </div>

        </>
    );
}

export default LandPage;