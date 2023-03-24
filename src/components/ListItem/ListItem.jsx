import React from "react"
import styles from "./ListItem.module.css"

const ListItem = ({ imageUrl, name, brand, badge }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.brand}>{brand}</p>
      {badge && <span className={styles.badge}>{badge}</span>}
    </div>
  )
}

export default ListItem
