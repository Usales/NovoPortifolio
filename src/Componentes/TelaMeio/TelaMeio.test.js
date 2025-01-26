import React from 'react';
import { render, screen } from '@testing-library/react';
import TelaMeio, { calcularPeriodo } from './TelaMeio';

describe('calcularPeriodo', () => {
  it('formata período com data em string (YYYY-MM-DD)', () => {
    const resultado = calcularPeriodo('2024-01-15', new Date(2024, 2, 15)); // 2 meses
    expect(resultado).toMatch(/jan de 2024 - Atual/);
    expect(resultado).toContain('2 meses');
  });

  it('retorna "menos de 1 mês" quando a diferença é menor que 1 mês', () => {
    const inicio = new Date(2024, 5, 1);
    const fim = new Date(2024, 5, 15);
    const resultado = calcularPeriodo(inicio, fim);
    expect(resultado).toContain('menos de 1 mês');
  });

  it('retorna "1 mês" quando a diferença é exatamente 1 mês', () => {
    const inicio = new Date(2024, 0, 15);
    const fim = new Date(2024, 1, 15);
    const resultado = calcularPeriodo(inicio, fim);
    expect(resultado).toContain('1 mês');
  });

  it('retorna "1 ano" quando a diferença é exatamente 12 meses', () => {
    const inicio = new Date(2023, 5, 1);
    const fim = new Date(2024, 5, 1);
    const resultado = calcularPeriodo(inicio, fim);
    expect(resultado).toMatch(/jun de 2023 - Atual/);
    expect(resultado).toContain('1 ano');
  });

  it('retorna anos e meses quando total > 12 meses com resto', () => {
    const inicio = new Date(2022, 0, 1);
    const fim = new Date(2024, 2, 1); // 2 anos 2 meses
    const resultado = calcularPeriodo(inicio, fim);
    expect(resultado).toContain('2 anos');
    expect(resultado).toContain('2 meses');
  });
});

describe('TelaMeio', () => {
  it('renderiza a seção principal com classe tela-meio', () => {
    render(<TelaMeio />);
    const tela = document.querySelector('.tela-meio');
    expect(tela).toBeInTheDocument();
  });

  it('renderiza o título Projetos', () => {
    render(<TelaMeio />);
    expect(screen.getByRole('heading', { name: /projetos/i })).toBeInTheDocument();
  });

  it('renderiza o título Sobre Mim', () => {
    render(<TelaMeio />);
    expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeInTheDocument();
  });

  it('renderiza o título Experiências', () => {
    render(<TelaMeio />);
    const headings = screen.getAllByRole('heading', { name: /experiências/i });
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });

  it('renderiza o título Formação Acadêmica', () => {
    render(<TelaMeio />);
    expect(screen.getByRole('heading', { name: /formação acadêmica/i })).toBeInTheDocument();
  });

  it('renderiza a categoria Front-end com Jest nas habilidades', () => {
    render(<TelaMeio />);
    const categorias = document.querySelectorAll('.categoria');
    const frontEnd = Array.from(categorias).find(
      (el) => el.querySelector('.titulo-categoria')?.textContent === 'Front-end'
    );
    expect(frontEnd).toBeInTheDocument();
    const nomes = frontEnd?.querySelectorAll('.nome-habilidade') ?? [];
    const textos = Array.from(nomes).map((n) => n.textContent);
    expect(textos).toContain('Jest');
  });
});
