/* eslint-disable react/prop-types */
import styles from "../styles/HomeSection.module.css"

let Image = ({ src, alt, cssName }) => {
  return (
    <div>
      <img src={src} alt={alt} className={styles[cssName]} />
    </div>
  )
}

Image.defaultProps = {
  alt: 'image',
}

export default Image