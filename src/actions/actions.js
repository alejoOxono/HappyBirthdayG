import { GET_NAME } from "./constants";

export const getName = (name) =>{
    return{
        type:GET_NAME,
        payload: name
    }
}