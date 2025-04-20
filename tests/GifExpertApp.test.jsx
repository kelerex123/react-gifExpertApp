
import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
    
    test('debe de no mostrar una nueva categoria repetida ', () => {

        const inputValue = 'One Punch'

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        

        fireEvent.change(input, {
            target: {
                value: inputValue,
            }
        })

        fireEvent.submit(form);

        expect(screen.getAllByText('One Punch').length).toBe(1);

    })

    test('debe de mostrar una nueva categoria', () => {

        const inputValue = 'Honkai'

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        

        fireEvent.change(input, {
            target: {
                value: inputValue,
            }
        })

        fireEvent.submit(form);

        expect(screen.getByText('One Punch')).toBeTruthy();
        expect(screen.getByText('Honkai')).toBeTruthy();
    })
    

})
