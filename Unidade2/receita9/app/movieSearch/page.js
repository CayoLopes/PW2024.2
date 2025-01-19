
export default function MovieForm() {
    return (
      <form action="/movies" method="GET"> {/* Corrigido para <form> padrão do HTML */}
        <label htmlFor="idTitleSearchKey">Título:</label>
        <input id="idTitleSearchKey" name="titleSearchKey" type="text" />
  
        <label htmlFor="idTypeSearchKey">Tipo:</label>
        <select id="idTypeSearchKey" name="typeSearchKey">
          <option value="movie">Filme</option>
          <option value="series">Série</option>
        </select>
  
        <button type="submit">Pesquisar</button>
      </form>
    );
  }
  
