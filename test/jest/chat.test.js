import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackChat from '../../views/StackChat';

describe('Tests del componente Chat', () => {
    let renderComponent;
    const component = (
        <NavigationContainer>
            <StackChat />
        </NavigationContainer>
    );

    beforeEach(() => {
        renderComponent = render(component);
    });

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    test('Test LoginScreen pasa nombre a LobbyScreen', async () => {

        const { getByTestId, getByPlaceholderText, queryByText } = renderComponent;

        const nameInput = getByPlaceholderText('Inserta un nombre de usuario');
        const button = getByTestId('continue');

        const headerTextOld = queryByText('Usuario');
        expect(headerTextOld).toBeTruthy();

        fireEvent(nameInput, 'onChangeText', 'Innosoft');
        const nameInputnew = getByTestId('nameInput');
        expect(nameInputnew.props.value).toBe('Innosoft');

        fireEvent.press(button);

        const headerTextNew = getByTestId('lobbyHeader');
        expect(headerTextNew.children.join('')).toBe('¡Hola Innosoft!');
    });

    test('Test LobbyScreen pasa pin a ChatScreen', async () => {

        const { getByTestId, getByPlaceholderText } = renderComponent;

        const nameInput = getByPlaceholderText('Inserta un nombre de usuario');
        const button = getByTestId('continue');

        fireEvent(nameInput, 'onChangeText', 'Innosoft');

        fireEvent.press(button);

        const headerTextOld = getByTestId('lobbyHeader');
        expect(headerTextOld.children.join('')).toBe('¡Hola Innosoft!');

        const pinInput = getByPlaceholderText('PIN');
        const buttonPin = getByTestId('continuePin');

        fireEvent(pinInput, 'onChangeText', '123');
        const pinInputNew = getByPlaceholderText('PIN');
        expect(pinInputNew.props.value).toBe('123');

        fireEvent.press(buttonPin);
    });

});