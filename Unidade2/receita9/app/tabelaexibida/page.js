import TabelaBebidas from "../novarota/tabela/page"; // Caminho correto para importar

export default function TabelaExibida() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Essa é uma tabela de bebidas</h1>
      <p className="mb-4">Eu puxei ela do diretório tabela, que está no diretório novarota:</p>
      <TabelaBebidas /> {/* Exibindo a tabela aqui */}
    </div>
  );
}
