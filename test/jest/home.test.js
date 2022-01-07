import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react-native';
import Home from '../../views/Home';
import Program from '../../views/Program';
import News from '../../views/News';
import Speakers from '../../views/Speakers';
import { NavigationContainer } from '@react-navigation/native';
const nock = require('nock');

describe('Tests del componente Home', () => {

    if (!process.env.E2E) {
        jest.useFakeTimers();
    }

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('El boton ponentes nos lleva corectamente a su vista con datos', async () => {

        const component = (
            <NavigationContainer>
                <Home />
                <Speakers />
            </NavigationContainer>
        )

        let renderComponent = render(<NavigationContainer><Speakers /></NavigationContainer>)
        const { queryByText } = render(component);
        const { queryByTestId, getByTestId } = renderComponent;

        const oldScreen = queryByText(/Revisa los ponentes/)
        const button = queryByText('Ponentes')
        fireEvent(button, 'press')

        await waitFor(() => getByTestId('loadedWithData'), { timeout: 10000 })

        expect(oldScreen).toBeTruthy()
        expect(getByTestId('loadedWithData')).toBeTruthy()
    });

    it('El boton noticias nos lleva corectamente a su vista sin datos', async () => {

        const component = (
            <NavigationContainer>
                <Home />
                <News />
            </NavigationContainer>
        )

        let renderComponent = render(<NavigationContainer><News /></NavigationContainer>)
        const { queryByText } = render(component);
        const { queryByTestId, getByTestId } = renderComponent;

        const oldScreen = queryByText(/novedades en Innosoft/)
        const button = queryByText('Noticias')
        fireEvent(button, 'press')

        await waitFor(() => getByTestId('loadedWithData'), { timeout: 10000 })

        expect(oldScreen).toBeTruthy()
        expect(getByTestId('loadedWithData')).toBeTruthy()
    });


    if (!process.env.E2E) {
        it('El boton programa nos lleva corectamente a su vista sin datos', () => {

            const component = (
                <NavigationContainer>
                    <Home />
                    <Program />
                </NavigationContainer>
            )

            let renderComponent = render(<Program />)
            const { queryByText } = render(component);
            const { queryByTestId } = renderComponent;

            const oldScreen = queryByText(/novedades en Innosoft/)
            const button = queryByText('Noticias')
            fireEvent(button, 'press')

            nock('http://localhost:5000')
                .get('/api/v1/events')
                .reply(200, []);

            const newScreen = queryByTestId('loadedWithoutData')

            expect(oldScreen).toBeTruthy()
            expect(newScreen).toBeTruthy()
        });

        it('El boton ponentes nos lleva corectamente a su vista sin datos', async () => {

            const component = (
                <NavigationContainer>
                    <Home />
                    <Speakers />
                </NavigationContainer>
            )

            let renderComponent = render(<NavigationContainer><Speakers /></NavigationContainer>)
            const { queryByText } = render(component);
            const { queryByTestId, getByTestId } = renderComponent;

            const oldScreen = queryByText(/Revisa los ponentes/)
            const button = queryByText('Ponentes')
            fireEvent(button, 'press')

            nock('http://localhost:5000')
                .get('/api/v1/speakers')
                .reply(200, []);

            await waitFor(() => getByTestId('loadedWithoutData'), { timeout: 10000 })

            expect(oldScreen).toBeTruthy()
            expect(getByTestId('loadedWithoutData')).toBeTruthy()
        });

        it('El boton noticias nos lleva corectamente a su vista sin datos', async () => {

            const component = (
                <NavigationContainer>
                    <Home />
                    <News />
                </NavigationContainer>
            )

            let renderComponent = render(<NavigationContainer><News /></NavigationContainer>)
            const { queryByText } = render(component);
            const { queryByTestId, getByTestId } = renderComponent;

            const oldScreen = queryByText(/novedades en Innosoft/)
            const button = queryByText('Noticias')
            fireEvent(button, 'press')

            nock('http://localhost:5000')
                .get('/api/v1/posts')
                .reply(200, []);

            await waitFor(() => getByTestId('loadedWithoutData'), { timeout: 10000 })

            expect(oldScreen).toBeTruthy()
            expect(getByTestId('loadedWithoutData')).toBeTruthy()
        });

    }


});

