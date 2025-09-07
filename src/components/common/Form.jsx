import { useNavigate } from "react-router-dom";


export default function Form({ children, className }) {
    const navigate = useNavigate();
    
    return(
        <form className={["mt-6 flex flex-col gap-4", className].join(" ")} onSubmit={(e) => {
                    e.preventDefault(); // Impede o recarregamento da página
                    // Aqui você adicionaria sua lógica de login
                    navigate('/forms'); // Redireciona para a Home Page
                }}>
                    {children}
        </form>
    )
}