import styles from "../../styles/CompactMenu.module.css"
import Navlinks from "./Navlinks";

let CompactMenu = () => {

  const linkArr = ["Home", "About", "Works", "Contact"];

  return (
    <>
      <div className={styles.compactContainer}>
        <ul className={styles.compactNavContainer}>
          {
            linkArr.map(item => <Navlinks item={item} key={item} />)
          }
        </ul>
      </div>
    </>
  )
}

export default CompactMenu