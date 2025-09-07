
import Form from "../components/common/form";
import InputText from "../components/common/InputText";

export default function FormsLogin(){
    
    
    return(
        <Form>
            <InputText>Email</InputText>
            <InputText>Senha</InputText>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="lembrar-login" />
                <label htmlFor="lembrar-login">Lembrar login</label>
            </div>
                        
            <button type="submit" className="bg-3 mt-4 text-white text-2xl py-2 px-4 rounded-md hover:bg-purple-800 transition-colors">
                Login
            </button>
        </Form>
    )
}