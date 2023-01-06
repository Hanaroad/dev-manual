import './header.css';

const Header = () => {
  return (
    <>
      <header
        style={{
          backgroundImage:
            'url(https://docs.popbill.com/static/img/bg/header_bg.jpg)',
        }}
      >
        <a href="#none">
          <img
            className="main-logo"
            src={process.env.PUBLIC_URL + '/img/main-logo.png'}
            alt=""
          />
        </a>
        <div className="pcmenu">
          <ul className="nav">
            <li className="main">
              <a href="#none">JavaScript</a>
              <ul className="sub">
                <li>
                  <a href="#none">서브메뉴 1</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 2</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 3</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 4</a>
                </li>
              </ul>
            </li>
            <li className="main">
              <a href="#none">REACT</a>
              <ul className="sub">
                <li>
                  <a href="#none">서브메뉴 1</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 2</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 3</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 4</a>
                </li>
              </ul>
            </li>
            <li className="main">
              <a href="#none">PHP</a>
              <ul className="sub">
                <li>
                  <a href="#none">서브메뉴 1</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 2</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 3</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 4</a>
                </li>
              </ul>
            </li>
            <li className="main">
              <a href="#none">Python</a>
              <ul className="sub">
                <li>
                  <a href="#none">서브메뉴 1</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 2</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 3</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 4</a>
                </li>
              </ul>
            </li>
            <li className="main">
              <a href="#none">Vue</a>
              <ul className="sub">
                <li>
                  <a href="#none">서브메뉴 1</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 2</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 3</a>
                </li>
                <li>
                  <a href="#none">서브메뉴 4</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
