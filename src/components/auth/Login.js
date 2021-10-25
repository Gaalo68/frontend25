import React, { useState } from "react";
import { Link } from "react-router-dom";
import portada from "../../Recursos/photo_2021-10-24_20-52-54.jpg"

const Login = () => {
  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  //extraer usuario
  const { email, password } = usuario;

  const onchange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //click para iniciar sesion
  const noReinicio = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container col-md-6 ppal">
      <h1>Boss Project</h1>
      <h2>Inicia Sesión</h2>
      <form onSubmit={noReinicio}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Tu Email"
          className="form-control"
          id="email"
          value={email}
          onChange={onchange}
        ></input>
        <div className="form-text">Nunca lo Compartiremos con Nadie</div>
        <br></br>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Tu Password"
          className="form-control"
          id="password"
          value={password}
          onChange={onchange}
        ></input>
        <div className="form-text">Bede Tener entre 6 y 10 Carateres</div>
        <br />
        <button type="submit" className="btn btn-primary w-100">
          Ingresar
        </button>
      </form>
      <Link to={"/registro"} className="link">
        Obtener Cuenta
      </Link>
      <br />
      <Link to={"/proyectos"} className="link">
        Proyectos
      </Link>
      <img id="portada" src={portada} alt="foto"/>
    </div>
  );
};

export default Login;
