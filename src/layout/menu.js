import "./menu.css";

const Menu = () => {
  return (
    <>
      <menu>
        <ul className="side-nav">
          <li className="side-main">
            <a href="#none">JavaScript</a>
            <ul className="side-sub">
              <li>
                <a href="#none">구글차트</a>
              </li>
              <li>
                <a href="#none">리차트</a>
              </li>
            </ul>
          </li>
          <li className="side-main">
            <a href="#none">REACT</a>
            <ul className="side-sub">
              <li>
                <a href="#none">1</a>
              </li>
            </ul>
          </li>
          <li className="side-main">
            <a href="#none">PHP</a>
            <ul className="side-sub">
              <li>
                <a href="#none">히히</a>
              </li>
            </ul>
          </li>
          <li className="side-main">
            <a href="#none">Python</a>
            <ul className="side-sub">
              <li>
                <a href="#none">히히</a>
              </li>
            </ul>
          </li>
          <li className="side-main">
            <a href="#none">Custom</a>
            <ul className="side-sub">
              <li>
                <a href="#none">히히</a>
              </li>
            </ul>
          </li>
        </ul>
      </menu>
    </>
  );
};

export default Menu;
