import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "@nextui-org/react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        alert("Credenciales incorrectas");
        throw new Error("An error occurred");
      }
      alert("Inicio de sesión exitoso");
      const data = await response.json();
      console.log({data});

    }catch (error) {
      console.error("An error occurred", error);
    }
  };


  return (
    <main className="flex justify-center flex-col items-center h-screen">
        <div className="flex justify-center">
            <img src='https://blogger.googleusercontent.com/img/a/AVvXsEi1ez2VVKDbuDb403KCjowdL2BVFyvfvX543M1BBKLIJGLVvKcMDZDUutlipI6MwyduIJBybpDy9igj0Z585BLW2hncvu6XWxmBAsvNmuyim7UH8D1tPPLrsXZh0slcpaDSrYYHczleQux3rxUMnd4zgV-UEK3cqibxuHXHKBvVVLnzrKG1njh1hVI8'
            alt="Logo de Foro"
            className='w-1/3 h-auto'/>
        </div>
        <div className="my-8">
            <h1 className="font-bold text-5xl">Usocial - Iniciar Sesion</h1>
        </div>
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex gap-8 justify-center items-center"
            >
          <Input
            type="email"
            label="Correo"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="on"
            placeholder="correo@example.com"
            color="secondary"
          />
          <Input
            type="password"
            label="Contraseña"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            color="secondary"
          />
          <Button type="submit" color="warning">
            Login
          </Button>
        </form>
      </div>
      <div className="my-5">
        <Link href="/register">
          <p>Aún no tienes cuenta? Regístrate</p>
        </Link>
      </div>
    </main>
  );
}