// app/rota1/page.js
import { Home, Sobre } from '../page';  // Importando as funções

export default function Rota1() {
    return (
        <div>
            <h1>Página Rota 1</h1>
            <Sobre />  {/* Usando a função Sobre aqui */}
        </div>
    );
}
