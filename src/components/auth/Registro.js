import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registro = () => {
  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  //extraer usuario
  const { nombre, email, password, confirmar } = usuario;

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
      <h1>Registro</h1>
      <h2>Ingresa tus Datos</h2>
      <form onSubmit={noReinicio}>
        

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
        </div>
        <input
          type="nombre"
          name="nombre"
          placeholder="Tu Nombre"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={onchange}
        ></input>
        <br></br>

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
        <div className="mb-3">
          <label htmlFor="confirmar" className="form-label">
            Confirma tu Password
          </label>
        </div>
        <input
          type="password"
          name="confirmar"
          placeholder="Nuevamente tu Password"
          className="form-control"
          id="confirmar"
          value={confirmar}
          onChange={onchange}
        ></input>
        <div className="form-text">Confirma tu Password</div>
        <br />
        <button type="submit" className="btn btn-primary w-100">
          Registrar
        </button>
      </form>
      <Link to={"/"} className="link">
        Iniciar Sesión
      </Link>
      <br />
      <Link to={"/proyectos"} className="link">
        Proyectos
      </Link>
    </div>
  );
};

export default Registro;
