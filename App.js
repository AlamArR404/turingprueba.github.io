// Importar el logo y los estilos de la aplicación
import { useAuth0 } from "@auth0/auth0-react";

import logo from "./logo.svg";
import "./App.css";
import { LoginButton } from "./login";
import { LogoutButton } from "./logout";
import { Profile } from "./profile";

// Importar los componentes necesarios
import CompMostrarLibros from "./libros/mostrarLibros";
import CompCreateLibro from "./libros/crearLibros";
import CompEditLibro from "./libros/editarLibro";


// Importar elementos relacionados con la navegación en React
import { BrowserRouter, Route, Routes } from "react-router-dom";


// Función principal que representa la aplicación
function App() {
  const { isAuthentiicated } = useAuth0();
  return (
    <div className="App">
      {/* Encabezado de la aplicación */}
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
            <a href="#masinfo">Mas información</a>
            </li>
            <li>
            <a href="#circulos">Círculos</a>
            </li>
              
          </ul>
        </nav>
        {/* Mostrar el logo de la aplicación */}
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthentiicated ? ( 
        <>
          <Profile/>
        <LogoutButton/>
        </>
        ) : (
        <LoginButton/>
          )}
        <h2>Bienvenido a Mi Aplicación</h2>
        <p>Explora libros, crea nuevos, y edita la información.</p>
        {/* Botón para redirigir al final del header */}
        <a href="#empezar" className="scroll-to-bottom-button">
          Empezar
        </a>
      </header>

      {/* Configuración de la navegación mediante BrowserRouter y Routes de 'react-router-dom' */}
      <div id="empezar">
        <BrowserRouter>
          <Routes>
            {/* Definir rutas y sus componentes correspondientes */}
            <Route path="/" element={<CompMostrarLibros />} />
            <Route path="/create" element={<CompCreateLibro />} />
            <Route path="/edit/:id" element={<CompEditLibro />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* Sección al final del header */}

      {/* Contenido al final del header */}
      <div id="masinfo">
        <h1>Más información</h1>

        {/* Bloque 1: Información sobre la biblioteca */}
        <div className="info-block">
          <h2>Biblioteca XYZ</h2>
          <p>
            Explora nuestra extensa colección de libros en la Biblioteca XYZ.
            Descubre títulos fascinantes de diversos géneros y autores.
          </p>
        </div>

        {/* Bloque 2: Novedades destacadas */}
        <div className="info-block">
          <h2>Novedades Destacadas</h2>
          <p>
            Échale un vistazo a las últimas adiciones a nuestra colección.
            Mantente actualizado con las novedades y descubre lecturas
            emocionantes.
          </p>
        </div>

        {/* Bloque 3: Recomendaciones personalizadas */}
        <div className="info-block">
          <h2>Recomendaciones Personalizadas</h2>
          <p>
            Te ofrecemos recomendaciones adaptadas a tus preferencias de
            lectura. Encuentra libros que se ajusten a tus intereses y descubre
            nuevas joyas literarias.
          </p>
        </div>

        {/* Bloque 4: Eventos y Comunidad */}
        <div className="info-block">
          <h2>Eventos y Comunidad</h2>
          <p>
            Participa en eventos literarios y únete a nuestra comunidad de
            lectores. Descubre clubes de lectura, charlas de autores y más en la
            Biblioteca XYZ.
          </p>
        </div>
      </div>
      {/* Sección con círculos */}
      <div id="circulos">
        <h1>Libros mas vendidos</h1>

        <div className="circle-container">
          {/* Círculo 1 */}
          <div className="circle small">
            <p>Libro 1</p>
          </div>

          {/* Círculo 2 (el más grande) */}
          <div className="circle large">
            <p>Libro 2</p>
          </div>

          {/* Círculo 3 */}
          <div className="circle small">
            <p>Libro 3</p>
          </div>
        </div>
      </div>
      {/* Barra al final de la página */}
      <div id="footer">
        <p>© 2023 Tu Sitio Web | Términos y Condiciones | Política de Privacidad</p>
      </div>
    </div>
  );
}

// Exportar el componente principal de la aplicación
export default App;
