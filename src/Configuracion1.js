import React from "react";
import "./Configuracion1.css";

export default function Configuracion1() {
  return (
    <div className="Configuracion1">
      <table className="config">
        <tr>
          <button className="atras">
            <img
              src="https://1.bp.blogspot.com/-F9j1pPlcOyE/X2D2At5HqOI/AAAAAAAAP4M/Zu55xGCco6s4IkouCzW4Sq7s7BgGBUwugCLcBGAsYHQ/s512/iconfinder_arrow-left-01_186410.png"
              alt=""
              height="15px"
            />
          </button>
          <label className="cofi">COFIGURACION </label>
        </tr>
        <tr className="borde">
          <div className="general">Configuracion general</div>
        </tr>
        <tr className="borde">
          Formato hora------------
          <select classname="hora">
            <option value="24">24:00 horas </option>
            <option value="12">12:00 horas </option>
          </select>
        </tr>
        <tr className="borde">
          <label classname="Inicio"> inicio---------------------</label>
          <select>
            <option value="1">1:00 AM </option>
            <option value="2"> 2:00 AM</option>
            <option value="3"> 3:00 AM</option>
            <option value="4"> 4:00 AM</option>
            <option value="5"> 5:00 AM</option>
            <option value="6"> 6:00 AM</option>
            <option value="7"> 7:00 AM</option>
            <option value="8"> 8:00 AM</option>
            <option value="9"> 9:00 AM</option>
            <option value="10"> 10:00 AM</option>
            <option value="11"> 11:00 AM</option>
            <option value="12"> 12:00 PM</option>
            <option value="13"> 13:00 PM</option>
            <option value="14"> 14:00 PM</option>
            <option value="15"> 15:00 PM</option>
            <option value="16"> 16:00 PM</option>
            <option value="17"> 17:00 PM</option>
            <option value="18"> 18:00 PM</option>
            <option value="19"> 19:00 PM</option>
            <option value="20"> 20:00 PM</option>
            <option value="21"> 21:00 PM</option>
            <option value="22"> 22:00 PM</option>
            <option value="23"> 23:00 PM</option>
            <option value="24"> 24:00 PM</option>
          </select>
        </tr>
        <tr className="borde">
          Finalizar----------------
          <select classname="finalizar">
            <option value="1">1:00 AM </option>
            <option value="2"> 2:00 AM</option>
            <option value="3"> 3:00 AM</option>
            <option value="4"> 4:00 AM</option>
            <option value="5"> 5:00 AM</option>
            <option value="6"> 6:00 AM</option>
            <option value="7"> 7:00 AM</option>
            <option value="8"> 8:00 AM</option>
            <option value="9"> 9:00 AM</option>
            <option value="10"> 10:00 AM</option>
            <option value="11"> 11:00 AM</option>
            <option value="12"> 12:00 PM</option>
            <option value="13"> 13:00 PM</option>
            <option value="14"> 14:00 PM</option>
            <option value="15"> 15:00 PM</option>
            <option value="16"> 16:00 PM</option>
            <option value="17"> 17:00 PM</option>
            <option value="18"> 18:00 PM</option>
            <option value="19"> 19:00 PM</option>
            <option value="20"> 20:00 PM</option>
            <option value="21"> 21:00 PM</option>
            <option value="22"> 22:00 PM</option>
            <option value="23"> 23:00 PM</option>
            <option value="24"> 24:00 PM</option>
          </select>
        </tr>
        <tr className="borde">
          Sonido notificación---
          <select classname="sonido">
            <option value="S1">Sonido 1 </option>
            <option value="S2">Sonido 2 </option>
            <option value="S3">Sonido 3 </option>
            <option value="S4">Sonido 4 </option>
          </select>
        </tr>
        <tr className="borde">
          Activar notificación----
          <select classname="sonido">
            <option value="S3">SI </option>
            <option value="S4">NO </option>
          </select>
        </tr>
        <tr className="borde">
          <input
            className="color"
            id="color"
            name="color"
            placeholder="COLOR FONDO"
          />
        </tr>
        <tr className="borde">
          <button className="turquesa"></button>
          <button className="celeste"></button>
          <button className="claro"></button>
          <button className="turquesa2"></button>
          <button className="verde"></button>
          <button className="verde2"></button>
          <div>
            <button className="rojo"></button>
            <button className="piel"></button>
            <button className="rosa"></button>
            <button className="piel2"></button>
            <button className="morado"></button>
            <button className="morado2"></button>
          </div>
          <div>
            <button className="claro2"></button>
            <button className="amarillo"></button>
            <button className="naranja"></button>
            <button className="naranja2"></button>
            <button className="purpura"></button>
            <button className="rosa1"></button>
          </div>
        </tr>

        <tr className="borde">
          <label className="cofi">Cambiar contraseña </label>
          <button className="adelante">
            <img
              src="https://1.bp.blogspot.com/-GMKEMNW-QW8/X2FGkf9c9DI/AAAAAAAAP7A/4ikO7FCbLfwYl5FTQYzjTn0xjBFuZ_0XwCLcBGAsYHQ/s512/iconfinder_nav-arrow-right_383100.png"
              alt=""
              height="15px"
            />
          </button>
        </tr>
        <tr className="borde">
          <label className="cerrar">Cerrar sesión </label>
          <button className="afuera">
            <img
              src="https://1.bp.blogspot.com/-yXrmXmo650Q/X2ln8Iqbo3I/AAAAAAAAQO0/69wUnc-fe3gHznBBSTNTvNv4x9n7lz6igCLcBGAsYHQ/s512/iconfinder_Arrow_Right_1063918.png"
              alt=""
              height="20px"
            />
          </button>
        </tr>
      </table>
    </div>
  );
}
