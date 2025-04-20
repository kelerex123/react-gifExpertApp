import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch'

    test('debe de mostrar el loading inicialmente ', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();

    })

    test('debe de mostrar items cuando se cargan las imagenes de useFetchGifs ', () => {

        const gifs = [
            {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://www.google.com/saitama.jpg',
            },
            {
                id: 'ABC2',
                title: 'Goku',
                url: 'https://www.google.com/goku.jpg',
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>)

        expect(screen.getAllByRole('img').length).toBe(2);

    })
    
    

})
