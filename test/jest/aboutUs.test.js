import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackAboutUs from '../../views/StackAboutUS';

describe('Tests del componente AboutUs', () => {
    
    let renderComponent;
    beforeEach(() => {
        const component = (
            <NavigationContainer>
                <StackAboutUs/>
            </NavigationContainer>
        )
        renderComponent = render(component)
    });

    test('Test para el botón InnosoftDays', () => {
        const {queryByText} = renderComponent
        const oldScreen = queryByText('POWERED BY')

        const button = queryByText('InnosoftDays')
        fireEvent(button, 'press')

        const newScreen = queryByText(/Talleres, debates, conferencias/)
        expect(oldScreen).toBeTruthy() //comprobamos que al principio estabamos en la pantalla de AboutUs
        expect(newScreen).toBeTruthy() // comprobamos que al final estemos en la pantalla de InnosoftDays
    });

    test('Test para el botón Síguenos en RSS', () => {
        const {queryByText} = renderComponent
        const oldScreen = queryByText('POWERED BY')

        const button = queryByText('Síguenos en RSS')
        fireEvent(button, 'press')

        const newScreen = queryByText(/Twitch/)
        expect(oldScreen).toBeTruthy()
        expect(newScreen).toBeTruthy()
    });

    test('Test para el botón Cómo llegar', () => {
        const {queryByText} = renderComponent
        const oldScreen = queryByText('POWERED BY')

        const button = queryByText('Cómo llegar')
        fireEvent(button, 'press')

        const newScreen = queryByText(/situada en el Campus de Reina Mercedes/)
        expect(oldScreen).toBeTruthy()
        expect(newScreen).toBeTruthy()
    });

    test('Test para el botón Organización', () => {
        const {queryByText} = renderComponent
        const oldScreen = queryByText('POWERED BY')

        const button = queryByText('Organización')
        fireEvent(button, 'press')

        const newScreen = queryByText(/Organización de las jornadas/)
        expect(oldScreen).toBeTruthy()
        expect(newScreen).toBeTruthy()
    });
});

describe('Tests del componente InnosoftDays', () => {

    let renderComponent;
    beforeEach(() => {
        const component = (
            <NavigationContainer>
                <StackAboutUs/>
            </NavigationContainer>
        )
        renderComponent = render(component)
    });

    test('Test para el botón de consultar redes sociales', () => {
        const {queryByText} = renderComponent
        fireEvent(queryByText('InnosoftDays'), 'press') //nos situamos en el componente InnosoftDays pulsando el boton InnosoftDays desde el componente AboutUs
        const oldScreen = queryByText(/Universidad de Sevilla, los alumnos de cuarto/)

        const button = queryByText(/consultar todas nuestras redes sociales/)
        fireEvent(button, 'press')

        const newScreen = queryByText(/Twitch/)
        expect(oldScreen).toBeTruthy()
        expect(newScreen).toBeTruthy()
    });

    test('Test para el botón de conocer la organización', () => {
        const {queryByText} = renderComponent
        fireEvent(queryByText('InnosoftDays'), 'press')
        const oldScreen = queryByText(/Universidad de Sevilla, los alumnos de cuarto/)

        const button = queryByText(/conocer la organización llevada a cabo/)
        fireEvent(button, 'press')

        const newScreen = queryByText(/Organización de las jornadas/)
        expect(oldScreen).toBeTruthy()
        expect(newScreen).toBeTruthy()
    });
});

describe('Tests del componente HowToGetTo', () => {

    let renderComponent;
    beforeEach(() => {
        const component = (
            <NavigationContainer>
                <StackAboutUs/>
            </NavigationContainer>
        )
        renderComponent = render(component)
    });

    test('Test para el botón de TUSSASM', () => {
        const {queryByText} = renderComponent
        fireEvent(queryByText('Cómo llegar'), 'press') 
        const oldScreen = queryByText(/situada en el Campus de Reina Mercedes/)

        const button = queryByText(/TUSSAM/)
        fireEvent(button, 'press')

        const newScreen = queryByText(/Descarga la APP de Tussam/)
        expect(oldScreen).toBeTruthy()
        expect(newScreen).toBeTruthy()
    });

    test('Test para el botón de CONSORCIO', () => {
        const {queryByText} = renderComponent
        fireEvent(queryByText('Cómo llegar'), 'press') 
        const oldScreen = queryByText(/situada en el Campus de Reina Mercedes/)

        const button = queryByText(/CONSORCIO/)
        fireEvent(button, 'press')

        const newScreen = queryByText(/Consorcio de transporte metropolitano/)
        expect(oldScreen).toBeTruthy()
        expect(newScreen).toBeTruthy()
    });

    test('Test para el botón de RENFE', () => {
        const {queryByText} = renderComponent
        fireEvent(queryByText('Cómo llegar'), 'press') 
        const oldScreen = queryByText(/situada en el Campus de Reina Mercedes/)

        const button = queryByText(/RENFE/)
        fireEvent(button, 'press')

        const newScreen = queryByText(/Descarga la APP de RENFE/)
        expect(oldScreen).toBeTruthy()
        expect(newScreen).toBeTruthy()
    });

    test('Test para el botón de BICICLETA', () => {
        const {queryByText} = renderComponent
        fireEvent(queryByText('Cómo llegar'), 'press') 
        const oldScreen = queryByText(/situada en el Campus de Reina Mercedes/)

        const button = queryByText(/BICICLETA/)
        fireEvent(button, 'press')

        const newScreen = queryByText(/Descarga la APP de SEVICI/)
        expect(oldScreen).toBeTruthy()
        expect(newScreen).toBeTruthy()
    });
});