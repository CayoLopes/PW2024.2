// app/rota2/page.js
import { Contato } from '../page';  // Importando a função Contato

export default function Rota2() {
    return (
        <div>
            <h1>Página Rota 2</h1>
            <Contato />  {/* Usando a função Contato aqui */}
        </div>
    );
}
