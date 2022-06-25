import React from 'react';
//import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

/*
class Componente extends React.Component{
    contructor(){
        this.state = {
            ejemplo: 'TEST'
        }
    }
    render() {
        return(
            <div>{this.state.ejemplo}</div>
        )
    }
}
*/

const TodoSearch = ({searchValue, setSearchValue}) => {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return [
        <input
            className='TodoSearch'
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
};

export {TodoSearch};