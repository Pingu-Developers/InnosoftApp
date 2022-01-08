import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react-native';
import Program from '../../views/Program';
const nock = require('nock');
require('../mocks/index').program;

describe('Tests del componente Program', () => {

    if (!process.env.E2E) {
        jest.useFakeTimers();
    }

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });
    
    const component = (
        <Program />
    )

    it('Carga correctamente la pagina Program con datos', async () => {
        jest.useFakeTimers();
        const { getByTestId, queryByTestId } = render(component);

        if (!process.env.E2E) {
            nock('http://localhost:5000')
                .get('/api/v1/events')
                .reply(200, require('../mocks/index').program);
        }

        await waitFor(() => getByTestId('loadedWithData'), { timeout: 10000 });

        expect(queryByTestId('loadedWithData')).toBeTruthy();
    });

    if (!process.env.E2E) {
      
        it('Carga correctamente la pagina Program sin datos', async () => {

            const { getByTestId, queryByTestId } = render(component);
            nock('http://localhost:5000')
                .get('/api/v1/events')
                .reply(200, []);

            await waitFor(() => getByTestId('loadedWithoutData'), { timeout: 10000 });

            expect(queryByTestId('loadedWithoutData')).toBeTruthy();
        });

        it('Error cargando Program', async () => {

            const { getByTestId, queryByTestId } = render(component);
            nock('http://localhost:5000')
                .get('/api/v1/events')
                .reply(500, 'Error');

            await waitFor(() => getByTestId('loadedWithoutData'), { timeout: 10000 });

            expect(queryByTestId('loadedWithoutData')).toBeTruthy();
        });
    }

});




