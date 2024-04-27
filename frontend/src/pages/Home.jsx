
import './Home.css'
import { Link } from 'react-router-dom';
import { Button} from '@nextui-org/react';

export default function Home() {
  return (
    <main className='h-screen flex flex-col justify-center items-center'>
      <header>
        <h1 className='text-center font-bold text-4xl font-mono'>USocial</h1>
        <div className='flex justify-center'>
          <img src='https://blogger.googleusercontent.com/img/a/AVvXsEi1ez2VVKDbuDb403KCjowdL2BVFyvfvX543M1BBKLIJGLVvKcMDZDUutlipI6MwyduIJBybpDy9igj0Z585BLW2hncvu6XWxmBAsvNmuyim7UH8D1tPPLrsXZh0slcpaDSrYYHczleQux3rxUMnd4zgV-UEK3cqibxuHXHKBvVVLnzrKG1njh1hVI8'
          alt="Logo del foro"
          className='w-1/3 h-auto'/>
        </div>
      </header>
      <section className="flex flex-col items-center my-4">
        <div className="flex flex-col items-center">
          <p className='font-serif'>Foro para conocer, postear y dar a conocer al mundo lo que piensas</p>
        </div>
        <div className="flex gap-5 my-10">
          <Link to="/login">
            <Button color="primary">Iniciar Sesion</Button>
          </Link>
          <Link to="/register">
            <Button color="secondary">Registrarse</Button>
          </Link>
        </div>
      </section>
      <footer className="flex gap-6">
        <p>Kevin Daniel Catún Landaverde</p>
        <p>202200378</p>
      </footer>
    </main>
  );
}
