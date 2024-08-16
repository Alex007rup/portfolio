/* eslint-disable react/prop-types */
import styles from "../../styles/Navbar.module.css"
// have to use Link

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