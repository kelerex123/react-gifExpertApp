import { useState } from "react"

const defaultFunction = () => {
    console.error("Se debe mandar obligatoriamente una funcion");
}

// export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory = defaultFunction}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        // setCategories(cat => [inputValue, ...cat]);
        onNewCategory(inputValue.trim());
        
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}