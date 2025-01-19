"use client";  // Diretriz deve vir antes de qualquer importação

import '../styles.css';
import { useState } from "react";

export default function Home() {
    const [resultMovies, setResultMovies] = useState([]); 
    const [searchKey, setSearchKey] = useState(""); // Estado para armazenar a chave de pesquisa
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

    async function handleAction(event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário
        setIsLoading(true); // Ativa o estado de carregamento (desabilita o botão)

        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${searchKey}`);
        const jsonRes = await httpRes.json();

        setResultMovies(jsonRes.Search || []);
        setIsLoading(false); // Desativa o estado de carregamento (habilita o botão)
    }

    // Função para atualizar o estado do input à medida que o usuário digita
    function handleInputChange(event) {
        setSearchKey(event.target.value);
    }

    return (
        <div>
            <MovieForm 
                handleAction={handleAction} 
                searchKey={searchKey} 
                handleInputChange={handleInputChange} 
                isLoading={isLoading}  // Passa o estado de carregamento para o formulário
            />
            <MovieTable movies={resultMovies} />
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
                value={searchKey}  // A chave de pesquisa vem do estado
                onChange={handleInputChange}  // Atualiza o estado quando o valor muda
            />
            <button type="submit" disabled={isLoading}> 
                {isLoading ? "Carregando..." : "Pesquisar"} 
            </button>
        </form>
    );
}

export function MovieTable({ movies }) {
    return (
        <div className="movie-grid">
            {movies.map((m) => (
                <div key={m.imdbID} className="movie-item">
                    <img 
                        src={m.Poster !== "N/A" ? m.Poster : "https://via.placeholder.com/200x300?text=No+Image"} 
                        alt={m.Title} 
                        className="movie-poster" 
                    />
                    <div className="movie-details">
                        <p className="movie-title">{m.Title}</p>
                        <p className="movie-year">{m.Year}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

