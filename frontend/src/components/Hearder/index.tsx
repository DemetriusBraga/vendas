import "./styles.css";
import logo from "../../assets/img/logo.svg";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>Histórico de Vendas</h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/DemetriusBraga"> Demetrius Braga</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
