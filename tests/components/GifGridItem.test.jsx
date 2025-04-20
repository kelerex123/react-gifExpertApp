import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe('Pruebas en GifGridItem.jsx', () => {
    
    const title = "One punch man";
    const url = "https://www.google.com/"

    test('Deberia hacer match con el snapshot ', () => {

        const {container} = render(<GifGridItem title={title} url={url}/>);
        
        expect(container).toMatchSnapshot();

    });

    test('Deberia mostrar la imagen con el URL y ALT por defecto', () => {

        render(<GifGridItem />);
        
        const {alt, src} = screen.getByRole('img');

        // expect(screen.getByRole('img').alt).toBe('tituloDefecto');
        // expect(screen.getByRole('img').src).toBe('https://www.urldefecto.com/');

        expect(alt).toBe('tituloDefecto');
        expect(src).toBe('https://www.urldefecto.com/');

    })

    test('Deberia mostrar la imagen con el URL y ALT indicado', () => {

        render(<GifGridItem title={title} url={url}/>);

        const {alt, src} = screen.getByRole('img');

        expect(alt).toBe(title);
        expect(src).toBe(url);

    })

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifGridItem title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy();
    })
    
    

})
