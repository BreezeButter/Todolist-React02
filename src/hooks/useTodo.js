import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';


export const useTodo = () => {
    //role play like 
    const sharedObj= useContext(TodoContext)
    return sharedObj;
}