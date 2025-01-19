"use client";

import { useState } from "react";
import { searchMovies } from "../actions/movieActions";
import Form from "next/form";

export default function Home() {
    const [data, setData] = useState({});
    const [error, setError] = useState("");

    async function handleAction(formData) {
        const res = await searchMovies(formData);
        if (res.error) {
            setError(res.error); // Exibe erro, se houver
        } else {
            setData(res); // Atualiza os resultados
            setError(""); // Limpa o erro
        }
    }

    return (
        <div>
            <MovieForm actionHandler={handleAction} />
            {error && <div style={{ color: "red" }}>{error}</div>} {/* Exibe erro */}
            {data.Search && <MovieTable movies={data.Search} />}
        </div>
    );
}

export function MovieForm({ actionHandler }) {
    return (
        <Form action={actionHandler}>
            <label htmlFor="idTitleSearchKey">Título:</label>
            <input id="idTitleSearchKey" name="titleSearchKey" type="text" />

            <label htmlFor="idTypeSearchKey">Tipo:</label>
            <select id="idTypeSearchKey" name="typeSearchKey">
                <option value="movie">Filme</option>
                <option value="series">Série</option>
            </select>

            <button type="submit">Pesquisar</button>
        </Form>
    );
}

export function MovieTable({ movies }) {
    return (
        <div>
            {movies.length > 0 ? (
                movies.map((m) => (
                    <div key={m.imdbID} style={{ margin: '10px' }}>
                        <p>{m.Title} ({m.Year})</p>
                        <img
                            src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
                            alt={`${m.Title} Poster`}
                            style={{ width: '200px', height: '300px' }}
                        />
                    </div>
                ))
            ) : (
                <p>Nenhum filme ou série encontrado.</p>
            )}
        </div>
    );
}
