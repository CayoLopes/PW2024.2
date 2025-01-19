
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
  
/*import Form from "next/form"

export default async function MovieForm(){

    return (

        <Form action="/movies">

            <label htmlFor="idTitleSearchKey">Título</label>            

            <input id="idTitleSearchKey" name="titleSearchKey"/>

            <button type="submit">Pesquisar</button>

        </Form>

    )

}
import Form from "next/form";

export default async function MovieForm() {
  return (
    <Form action="/movies">
      <label htmlFor="idTitleSearchKey">Título:</label>
      <input id="idTitleSearchKey" name="titleSearchKey" />

      <label htmlFor="idType">Tipo:</label> 
      <select id="idType" name="type"> 
        <option value="">Todos</option> 
        <option value="movie">Filme</option>
        <option value="series">Série</option>
      </select>

      <button type="submit">Pesquisar</button>
    </Form>
  );
}*/ 
