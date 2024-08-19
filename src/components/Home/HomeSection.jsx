import styles from "../../styles/HomeSection.module.css"
import Navbar from "../Navbar/Navbar"
import Image from "../Image"
import img from "../../assets/dp.png"
import TypingEffect from "./TypingEffect"

let HomeSection = () => {

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.innerContainer}>
          <div className={styles.textDesigner}>
            <TypingEffect />
          </div>
          <div className={styles.imageDesigner}>
            <Image src={img} alt="Profile Picture" cssName="dp" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection