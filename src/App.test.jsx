import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./Componentes/Efeitos/Particles.js', () => () => <div data-testid="particles-mock" />);

describe('App', () => {
  it('renderiza o portfólio com classe App', () => {
    render(<App />);
    const app = document.querySelector('.App');
    expect(app).toBeInTheDocument();
  });

  it('renderiza o mock de Particles', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('particles-mock')).toBeInTheDocument();
  });
});
