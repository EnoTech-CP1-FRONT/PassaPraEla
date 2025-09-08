
import InputText from "../common/InputText";


export default function FormRegistro() {
    return(
        <>
            <InputText id="name" className="registro">Nome Completo</InputText>
            <InputText id="email" type="email" className="registro">Email para contato</InputText>
            <InputText id="telefone" type="tel" className="registro">Número de telefone</InputText>
            <InputText id="data" type="date" className="registro">Data de Nacimento</InputText>
            <InputText id="cpf" className="registro">CPF</InputText>
        </>
    )
}