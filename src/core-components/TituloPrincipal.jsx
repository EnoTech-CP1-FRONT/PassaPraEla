import Button from "../components/common/Button";
import { NavLink } from 'react-router-dom';

export default function TituloPrincipal() {
  
  return (
    <div className="relative ml-10 flex flex-col gap-1 w-[50vw] h-[70vh] text-center items-baseline justify-center z-10">
      <p className="text-[4rem] text-5">PASSA PRA ELA</p>
      <p className="text-5 text-[1.5rem]">
        Faça a sua conta agora e entre para o time
      </p>
      <NavLink to='/cadastrese'>
        <Button className="text-[1.5rem]">Criar conta</Button>
      </NavLink>
    </div>
  );
}
