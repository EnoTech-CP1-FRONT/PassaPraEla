import Form from "../components/common/form";
import InputChecked from "../components/common/InputChecked";
import InputText from "../components/common/InputText";

export default function FormsLogin() {
  return (
    <Form adress="/forms">
      <InputText id="email" type="email">
        Email
      </InputText>
      <InputText id="senha" type="password">
        Senha
      </InputText>
      <InputChecked>Lembre de mim</InputChecked>

      <button
        type="submit"
        className="bg-3 mt-4 text-white text-2xl py-2 px-4 rounded-md hover:bg-purple-800 transition-colors"
      >
        Login
      </button>
    </Form>
  );
}
