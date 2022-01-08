import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Speakers from '../../views/Speakers';

const nock = require('nock');
require('../mocks/index').speaker;

describe('Speakers', () => {

    if(!process.env.E2E){
        jest.useFakeTimers(); 
    }
    
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    it('Carga correctamente la pagina Speakers con datos', async() => {
        jest.useFakeTimers();
        const { getByTestId,queryByTestId } = render(<NavigationContainer><Speakers /></NavigationContainer>);

        if (!process.env.E2E) {
            nock('http://localhost:5000')
                .get('/api/v1/speakers')
                .reply(200, require('../mocks/index').speaker);
        }

        await waitFor(() => getByTestId('loadedWithData'), { timeout: 10000 });

        expect(queryByTestId('loadedWithData')).toBeTruthy();
    });

    if(!process.env.E2E) {
        it('Carga correctamente la pagina Speakers sin datos', async() => {
                                    
                const { getByTestId, queryByTestId } = render(<NavigationContainer><Speakers /></NavigationContainer>);
                nock('http://localhost:5000')
                    .get('/api/v1/speakers')
                    .reply(200, []);
    
                await waitFor(() => getByTestId('loadedWithoutData'), { timeout: 10000 });
    
                expect(queryByTestId('loadedWithoutData')).toBeTruthy();
        });

        it('Error cargando Speakers', async() => {
                                    
            const { getByTestId, queryByTestId } = render(<NavigationContainer><Speakers /></NavigationContainer>);
            nock('http://localhost:5000')
                .get('/api/v1/speakers')
                .reply(500, 'Error');

            await waitFor(() => getByTestId('loadedWithoutData'), { timeout: 10000 });

            expect(queryByTestId('loadedWithoutData')).toBeTruthy();
    });
    }
});