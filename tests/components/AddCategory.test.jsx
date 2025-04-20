import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
    
    test('debe de cambiar el valor de la caja de texto ', () => {
        
        render(<AddCategory onNewCategory={() => {}}/>);
        
        const input = screen.getByRole('textbox');

        fireEvent.change(input, {
            target: {
                value: 'Saitama'
            }
        })

        expect(input.value).toBe('Saitama');

    })

    test('deber de llamar al onNewCategory al hacer submit si tiene un valor el input ', () => {
        
        const inputValue = 'Saitama';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, {
            target: {
                value: inputValue,
            }
        })

        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledWith(inputValue.trim());

    })

    test('no deber de llamar al onNewCategory si el input esta vacio ', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
    

})
