/* eslint-disable react/prop-types */
import styles from "../../styles/Navbar.module.css"

let Navlinks = ({ item }) => {
  return (
    <>
      <li className={`nav-item ${styles.listItems}`}>
        <a className={`nav-link active ${styles.listItemsLinks}`} aria-current="page" href={item}>{item}</a>
      </li >
    </>
  )
}

export default Navlinks