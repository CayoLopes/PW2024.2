// app/apitest/page.js
"use client";  // Adicione isso no topo do arquivo

import '../styles.css';
import { useState } from "react";

export default function Home() {
    const [resultMovies, setResultMovies] = useState([]); 
    const [searchKey, setSearchKey] = useState(""); // Estado para armazenar a chave de pesquisa
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

    // Função para fazer a requisição à API e exibir os filmes
    async function handleAction(event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário
        setIsLoading(true); // Ativa o estado de carregamento

        // Requisição à API criada no backend
        const httpRes = await fetch(`/api/searchMovies?titleSearchKey=${searchKey}`);
        const jsonRes = await httpRes.json();

        setResultMovies(jsonRes.Search || []);  // Atualiza a lista de filmes com os dados recebidos
        setIsLoading(false); // Desativa o estado de carregamento
    }

    // Função para atualizar o estado do input à medida que o usuário digita
    function handleInputChange(event) {
        setSearchKey(event.target.value); // Atualiza o estado da chave de pesquisa
    }

    return (
        <div>
            <MovieForm 
                handleAction={handleAction} 
                searchKey={searchKey} 
                handleInputChange={handleInputChange} 
                isLoading={isLoading} // Passa o estado de carregamento para o formulário
            />
            <MovieTable movies={resultMovies} /> {/* Exibe os filmes na tabela */}
        </div>
    );
}

export function MovieForm({ handleAction, searchKey, handleInputChange, isLoading }) {
    return (
        <form onSubmit={handleAction}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input 
                id="idTitleSearchKey" 
                name="titleSearchKey" 
                value={searchKey} // A chave de pesquisa vem do estado
                onChange={handleInputChange} // Atualiza o estado quando o valor muda
            />
            <button type="submit" disabled={isLoading}> 
                {isLoading ? "Carregando..." : "Pesquisar"} 
            </button>
        </form>
    );
}

export function MovieTable({ movies }) {
    return (
        <div>
            {movies.map((m) => (
                <div key={m.imdbID}>
                    {/* Exibe os três dados: Título, Ano e IMDb ID */}
                    <p><strong>Title:</strong> {m.Title}</p>
                    <p><strong>Year:</strong> {m.Year}</p>
                    <p><strong>IMDb ID:</strong> {m.imdbID}</p>
                </div>
            ))}
        </div>
    );
}
