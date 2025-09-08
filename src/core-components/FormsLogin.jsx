import ButtonForms from "../components/common/ButtonForms";
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

      <ButtonForms>
        Login
      </ButtonForms>
    </Form>
  );
}
