import React from 'react'
import { render, screen } from '@testing-library/react'
import Welcome from './Welcome'
import { MemoryRouter } from 'react-router-dom'

describe('Render Welcome page', () => {
    it('render span Home', () => {
        render(
            <MemoryRouter>
                <Welcome />
            </MemoryRouter>
        )
        const title = screen.getByTestId('span')
        expect(title).toBeInTheDocument()
        expect(title).toHaveTextContent('o')
    })
})