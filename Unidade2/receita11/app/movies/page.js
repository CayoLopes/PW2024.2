export default async function Home({ searchParams }) {
  // Aguarda a resolução de searchParams
  const { titleSearchKey = 'bagdad', typeSearchKey = 'movie' } = await searchParams;

  const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&type=${typeSearchKey}`);
  const data = await res.json();

  return (
    <div>
      {/* Formulário de pesquisa sempre visível */}
      <form action="/movies" method="GET">
        <label htmlFor="idTitleSearchKey">Título:</label>
        <input
          id="idTitleSearchKey"
          name="titleSearchKey"
          type="text"
          defaultValue={titleSearchKey} // Preenche com o valor da pesquisa anterior
        />

        <label htmlFor="idTypeSearchKey">Tipo:</label>
        <select id="idTypeSearchKey" name="typeSearchKey" defaultValue={typeSearchKey}>
          <option value="movie">Filme</option>
          <option value="series">Série</option>
        </select>

        <button type="submit">Pesquisar</button>
      </form>

      <div>
        {data.Search ? (
          data.Search.map((m) => (
            <div
              key={m.imdbID}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '10px',
                margin: '10px',
                width: '200px',
              }}
            >
              <img
                src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
                alt={`${m.Title} Poster`}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }}
              />
              <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px 0 5px' }}>{m.Title}</p>
              <p style={{ fontSize: '14px', color: '#555' }}>{m.Year}</p>
            </div>
          ))
        ) : (
          <p>No movies or series found.</p> // Mensagem caso não tenha filmes ou séries
        )}
      </div>
    </div>
  );
}
