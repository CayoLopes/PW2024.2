// app/api/searchMovies/route.js

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams; // Pegando os parâmetros da URL
    const titleSearchKey = searchParams.get("titleSearchKey"); // Pegando o parâmetro titleSearchKey

    // Dados de exemplo (você pode substituir com dados reais ou lógicas do seu backend)
    const mockMovies = [
        { imdbID: "1", Title: `${titleSearchKey} Movie 1`, Year: "2022" },
        { imdbID: "2", Title: `${titleSearchKey} Movie 2`, Year: "2021" },
        { imdbID: "3", Title: `${titleSearchKey} Movie 3`, Year: "2020" },
    ];

    // Retorna os dados como resposta JSON
    return Response.json({ Search: mockMovies });
}
