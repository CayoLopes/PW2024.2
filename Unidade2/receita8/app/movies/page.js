export default async function Home({searchParams}){

  const {titleSearchKey = 'bagdad'} = await searchParams

  const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)

  const data = await res.json()



  return (

      <div>

          <div>

          {data.Search.map((m) => (
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
))}
               

          </div>

      </div>

  )

}