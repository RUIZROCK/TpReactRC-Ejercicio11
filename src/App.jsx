import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  const [resultados, setResultados] = useState([]);
  //const [mostrarTarget, setMostrarTarget] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    console.log("ingreso");
    //setMostrarTarget(false);
    try {
      const respuesta = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_37373608f080da03682b32469494cf9f3710e&q=pegasus&language=es"
      );
      const datos = await respuesta.json();
      setResultados(datos.results);
    } catch (error) {
      console.log(error);
    }
  };

  const definirCategorias = () => {
    if (resultados !== null || resultados.length !== 0) {
      const arrayCategorias = resultados.map((o) => o.category); // con repetidos
      const arraySinRep = [];
      for (const elemento of arrayCategorias) {
        if (!arraySinRep.includes(elemento[0])) {
          arraySinRep.push(elemento[0]);
        }
      }
      return arraySinRep;
    } else {
      return [];
    }
  };

  const categorias = definirCategorias();


  const definirPais = () => {
    if (resultados !== null || resultados.length !== 0) {
      const arrayPais = resultados.map((o) => o.country); // con repetidos
      const arraySinRep = [];
      for (const elemento of arrayPais) {
        if (!arraySinRep.includes(elemento[0])) {
          arraySinRep.push(elemento[0]);
        }
      }
      return arraySinRep;
    } else {
      return [];
    }
  };

  const pais = definirPais();


  return (
    <>
      <header className="bg-dark py-3">
        <h1 className="text-light text-center">React NodeTicias</h1>
        <div className="row d-flex pt-3">
          <div className="row d-flex pt-3 col-12 col-sm-12 col-md-6 col-lg-6">
            <h4 className="text-light text-center mx-3 col-12 col-sm-12 col-md-2 col-lg2">
              Categoria
            </h4>
            <select
              className="mx-3 col-12 col-sm-12 col-md-8 col-lg-8"
              name="categoria"
              id="categoria"
            >
              <option value="">Elegir</option>
              {categorias.map((cat, pos) => (
                <option key={pos} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          
          <div className="row d-flex pt-3 col-12 col-sm-12 col-md-6 col-lg-6">
            <h4 className="text-light text-center mx-3 col-12 col-sm-12 col-md-2 col-lg2">
              Pais
            </h4>
            <select
              className="mx-3 col-12 col-sm-12 col-md-8 col-lg-8"
              name="categoria"
              id="categoria"
            >
              <option value="">Elegir</option>
              {pais.map((country, pos) => (
                <option key={pos} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
      <Container className="mainContainer">
        <ListaNoticias lista={resultados}></ListaNoticias>
      </Container>
      <footer className="bg-dark py-3">
        <p className="text-light text-center">
          &copy; Todos los derechos reservados
        </p>
      </footer>
    </>
  );
}

export default App;
