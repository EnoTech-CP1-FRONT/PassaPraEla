import { useNavigate } from "react-router-dom";

export default function Form({
  children,
  className = "mt-6 flex flex-col gap-4",
  adress,
}) {
  const navigate = useNavigate();

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault(); // Impede o recarregamento da página
        // Aqui você adicionaria sua lógica de login
        navigate(adress); // Redireciona para a Home Page
      }}
    >
      {children}
    </form>
  );
}
