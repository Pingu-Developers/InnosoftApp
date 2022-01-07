jest.useFakeTimers()

import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../../views/News';

const API_HOST = process.env.API_HOST;
const API_PORT = process.env.API_PORT;
const url = `${API_HOST}:${API_PORT}/api/v1`;

describe('Tests del componente MainScreen de News', () => {
    test('Test cuando hay noticias', async () => {
        const component = (
            <NavigationContainer>
                <MainScreen />
            </NavigationContainer>
        )

        const {findByText} = render(component)

        const screen = findByText('Event')
        
        expect(screen).toBeTruthy()

    })

    it('Test cuando no hay noticias', async () => {
        const nock = require('nock');

        nock(url)
            .get('/posts')
            .reply(200);

        const component = (
            <NavigationContainer>
                <MainScreen />
            </NavigationContainer>
        )

        const {findByText} = render(component)

        const screen = findByText('No hay noticias')

        expect(screen).toBeTruthy()

    })
})

