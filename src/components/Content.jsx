import Decoration from "./Decoration";
import Message from "./Message";
import Error from './Error';
import '../css-modules/content.css'
import { useSelector } from "react-redux";


const Content = () => {
    const nameSend = useSelector((state) => state.nameState)
    return (
        <>
            {nameSend ?
                <div className='gridContainer'>
                    <div className='decoration'>
                        <Decoration />
                    </div>

                    <div className='message'>
                        <Message />
                    </div>
                </div>
                :
                <Error/>

            }
        </>
    );
}

export default Content;