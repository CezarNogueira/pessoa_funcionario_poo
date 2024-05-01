import FormCadastro from "../Form/Form";
import "./css/style.css";

function Funcionario() {

    return(
        <div className="funcionario_wrapper">
            <div className="overlay"></div>
            <FormCadastro/>
        </div>
    );
}

export default Funcionario;