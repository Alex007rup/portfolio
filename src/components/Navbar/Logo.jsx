
import styles from "../../styles/Navbar.module.css"
import { RiInfinityLine } from "react-icons/ri";

let Logo = () => {
  return <a className="navbar-brand" href="https://alex007rup.github.io/portfolio/"><RiInfinityLine className={styles.icon} /></a>
}

export default Logo