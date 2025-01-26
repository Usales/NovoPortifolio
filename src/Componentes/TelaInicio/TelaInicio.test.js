import React from 'react';
import { render, screen } from '@testing-library/react';
import TelaInicio from './TelaInicio';

describe('TelaInicio', () => {
  it('renderiza a seção com classe tela-inicio', () => {
    render(<TelaInicio />);
    const tela = document.querySelector('.tela-inicio');
    expect(tela).toBeInTheDocument();
  });

  it('renderiza botão CV Português', () => {
    render(<TelaInicio />);
    expect(screen.getByRole('button', { name: /cv português/i })).toBeInTheDocument();
  });

  it('renderiza botão CV inglês', () => {
    render(<TelaInicio />);
    expect(screen.getByRole('button', { name: /cv inglês/i })).toBeInTheDocument();
  });

  it('renderiza links para redes sociais (GitHub e LinkedIn)', () => {
    render(<TelaInicio />);
    const links = screen.getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('https://github.com/Usales');
    expect(hrefs).toContain('https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/');
  });
});
