// app/novarota/tabela/page.js

export default function TabelaBebidas() {
  const bebidas = [
    { nome: "Absinto", materiaPrima: "Artemisia absinthium", tradicionalidade: "Suíça", teorAlcoolico: "40% a 89%" },
    { nome: "Cachaça", materiaPrima: "Cana-de-açúcar (garapa)", tradicionalidade: "Brasil", teorAlcoolico: "38% a 54%" },
    { nome: "Gim", materiaPrima: "Cereais e zimbro", tradicionalidade: "Países Baixos", teorAlcoolico: "43% a 60%" },
    { nome: "Rum", materiaPrima: "Cana-de-açúcar (melaço)", tradicionalidade: "Cuba", teorAlcoolico: "38% a 75%" },
    { nome: "Whisky", materiaPrima: "Cereais (envelhecido)", tradicionalidade: "Escócia", teorAlcoolico: "38% a 54%" },
    { nome: "Vodka", materiaPrima: "Cereais (filtrado)", tradicionalidade: "Rússia", teorAlcoolico: "35% a 60%" },
    { nome: "Cerveja", materiaPrima: "Cereais (levedura)", tradicionalidade: "Baviera, Alemanha", teorAlcoolico: "2% a 20%" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tabela de Bebidas Alcoólicas</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Matéria Prima</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Tradicionalidade</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Teor Alcoólico</th>
          </tr>
        </thead>
        <tbody>
          {bebidas.map((bebida, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-4 py-2">{bebida.nome}</td>
              <td className="border border-gray-300 px-4 py-2">{bebida.materiaPrima}</td>
              <td className="border border-gray-300 px-4 py-2">{bebida.tradicionalidade}</td>
              <td className="border border-gray-300 px-4 py-2">{bebida.teorAlcoolico}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
