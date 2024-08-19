import styles from "../../styles/Navbar.module.css"
import Logo from "./Logo"
import MenuToggler from "./MenuToggler"
import Navlinks from "./Navlinks"
import CompactMenu from "./CompactMenu"
import { useState } from "react"

let Navbar = () => {

  const linkArr = ["Home", "About", "Works", "Contact"];
  let [check, setCheck] = useState(false);

  function handleCheck() {
    setCheck(!check);
  }

  window.addEventListener('resize', () => {
    setCheck(false);
  });

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary sticky-top ${styles.navContainer}`}>
        <div className="container-fluid">
          < Logo />
          <MenuToggler handleCheck={handleCheck} />
          {check && <CompactMenu />}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {
                linkArr.map(item => <Navlinks item={item} key={item} />)
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar