// app/page.js

export function Home() {
    return (
        <div>
            <h1>Página Inicial</h1>
            <p>Esta é a Home da aplicação.</p>
        </div>
    );
}

export function Sobre() {
    return (
        <div>
            <h1>Sobre a Aplicação</h1>
            <p>Esta página deveria fornecer informações sobre a aplicação.</p>
            <p>Mas não tem nada :D </p>
        </div>
    );
}

export function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <p>Não entre em contato conosco.</p>
            
        </div>
    );
}

// Exportação default necessária para o Next.js reconhecer a página
export default function Page() {
    return (
        <div>
            <Home />  {/* Usando a função Home aqui */}
            <Sobre />  {/* Usando a função Sobre aqui */}
        </div>
    );
}
