import "./header.css";
import Btndark from "../dark/dark";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <a
            className="logo"
            href="https://github.com/fabidesar"
            target="blank"
          >
            <img src="https://i.ibb.co/R25szhy/github.png" alt="" />
            <span>Github</span>
          </a>
        </div>
        <div className="busca">
          <input
            className="txtbusca"
            type="text"
            id="txtBusca"
            placeholder="Buscar por ID"
          />
          <i className="bi bi-search" id="lupa"></i>
        </div>
        <div>
          <Btndark />
        </div>
      </header>
    </>
  );
}
