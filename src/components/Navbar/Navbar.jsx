import styles from "../../styles/Navbar.module.css"
import Logo from "./Logo"
import MenuToggler from "./MenuToggler"
import Navlinks from "./Navlinks"

let Navbar = () => {

  const linkArr = ["Home", "About", "Works", "Contact"]

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navContainer}`}>
        <div className="container-fluid">
          < Logo />
          <MenuToggler />
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