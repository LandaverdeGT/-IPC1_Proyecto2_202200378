import React from "react";
import {Button, Input} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import {careers, faculties, generate} from "./data";
import {Link} from "@nextui-org/react";
import Login from "./Login";

import {MailIcon} from './MailIcon.jsx';

export default function Register(){

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full h-screen flex items-end">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[25%] left-[8%] flex flex-col">
          <h1 className="text-blue-950 text-4xl font-bold my-4">Usocial - Registrarse</h1>
        </div>
        <div className="absolute top-[40%] left-[12%] flex flex-col">
          <img src="https://blogger.googleusercontent.com/img/a/AVvXsEi1ez2VVKDbuDb403KCjowdL2BVFyvfvX543M1BBKLIJGLVvKcMDZDUutlipI6MwyduIJBybpDy9igj0Z585BLW2hncvu6XWxmBAsvNmuyim7UH8D1tPPLrsXZh0slcpaDSrYYHczleQux3rxUMnd4zgV-UEK3cqibxuHXHKBvVVLnzrKG1njh1hVI8" 
          alt="Logo de Foro" 
          className="w-80 h-auto"/>
        </div>
      <img src="https://images2.alphacoders.com/515/515958.jpg" alt="Fondo de pantalla" className="w-full h-full object-cover"/>
      </div>
      <div className="w-full h-full flex flex-col p-20">
        <form
        
        className="flex flex-col gap-4"
        >
        <div className="w-full top-[40%] left-[20%] flex flex-col ">
          <h1 className="text-white text-4xl font-bold my-4">Registro</h1>
          <div className="flex flex-col gap-4 my-4">       
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
              type="text"
              label="Carnet-USAC/Usuario"
              placeholder="Ingresa tu carnet o usuario"
              labelPlacement="outside"
              color="secondary"
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="text"
              label="Nombres"
              placeholder="Ingresa tus nombres"
              labelPlacement="outside"
              color="secondary"
              />
              <Input
              type="text"
              label="Apellidos"
              placeholder="Ingresa tus apellidos"
              labelPlacement="outside"
              color="secondary"
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Select
              items={generate}
              label="Género"
              placeholder="Selecciona tu género"
              className="max-w-full"
              color="secondary"
              >
              {(generate) => <SelectItem key={generate.value}>{generate.label}</SelectItem>}
              </Select>
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Select
              items={faculties}
              label="Facultad"
              placeholder="Selecciona tu facultad"
              className="max-w-full"
              color="secondary"
              >
              {(faculties) => <SelectItem key={faculties.value}>{faculties.label}</SelectItem>}
              </Select>
              <Select
              items={careers}
              label="Carrera"
              placeholder="Selecciona tu carrera"
              className="max-w-full"
              color="secondary"
              >
              {(careers) => <SelectItem key={careers.value}>{careers.label}</SelectItem>}
              </Select>
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
              type="email"
              label="Correo Electrónico"
              placeholder="Ingresa tu correo electrónico"
              labelPlacement="outside"
              color="secondary"
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              />
              <Input
              type="password"
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              labelPlacement="outside"
              color="secondary"
              />
            </div>
            <div className="flex gap-5 justify-center px-40 my-1">
              <Button
              color="warning"
              className="w-1/3"
              >
              Registrarse
              </Button>
              <Link href="/login">Ya tienes cuenta?, inicia sesión</Link>
            </div>
          </div>  
        </div>
        </form>
      </div>
    </div>
  );
}