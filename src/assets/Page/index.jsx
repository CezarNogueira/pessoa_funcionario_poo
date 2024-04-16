import "./css/style.css";

function Funcionario() {
    return(
        <div className="funcionario_wrapper">
            <form className="styles-form">

                <input type="text" name="nome" placeholder="Digite o Nome"/>

                <input type="text" name="idade" placeholder="Digite a Idade"/>

                <input type="text" name="cargo" placeholder="Digite o Cargo"/> 

                <button>CADASTRAR</button>

            </form>
        </div>
    );
}

export default Funcionario;