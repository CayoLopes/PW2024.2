'use server';

export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey");
    const typeSearchKey = formData.get("typeSearchKey");

    if (!titleSearchKey || titleSearchKey === '') return { Search: [] };

    try {
        // A URL agora inclui o tipo (filme ou série)
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=aea30029&s=${titleSearchKey}&type=${typeSearchKey}`);
        const jsonRes = await httpRes.json();
        return jsonRes;
    } catch (err) {
        return { error: `Erro na requisição: ${err.message}` };
    }
}
