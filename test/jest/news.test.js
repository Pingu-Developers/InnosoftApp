import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../../views/News';

;
const nock = require('nock');

const API_HOST = process.env.API_HOST;
const API_PORT = process.env.API_PORT;
const url = `${API_HOST}:${API_PORT}/api/v1`;

describe('Tests del componente MainScreen de News', () => {
    if (!process.env.E2E) {
        jest.useFakeTimers();
    }

    test('Test cuando hay noticias', async () => {
        const component = (
            <NavigationContainer>
                <MainScreen />
            </NavigationContainer>
        )

        nock(url)
            .get('/posts')
            .reply(200, require('../mocks/index').news);

        const { getByTestId, queryByTestId } = render(component)

        await waitFor(() => getByTestId('loadedWithData'), { timeout: 10000 });

        expect(queryByTestId('loadedWithData')).toBeTruthy();

    })

    if (!process.env.E2E) {
        it('Test cuando no hay noticias', async () => {
            
            nock(url)
                .get('/posts')
                .reply(200, []);

            const component = (
                <NavigationContainer>
                    <MainScreen />
                </NavigationContainer>
            )

            const { getByTestId, queryByTestId } = render(component)

            await waitFor(() => getByTestId('loadedWithoutData'), { timeout: 10000 });

            expect(queryByTestId('loadedWithoutData')).toBeTruthy();

        })
    }
})

