import '../css-modules/error.css'
const imagenError = require('../assets/error.png')

const Error = () => {
    return (
        <div className="contenedor">
            <br />
            <h2 className='text'>Error!</h2>
            <figure>
                <img src={imagenError} alt="error" />
            </figure>
            <p>
                Estás tratando de entrar usando un nombre incorrecto o debes de ingresarlo de nuevo.
                <br />
                recuerda no usar la función autocompletar😁
            </p>
        </div>
    );
}

export default Error;