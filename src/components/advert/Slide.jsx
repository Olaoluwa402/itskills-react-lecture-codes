import React from 'react'
import styles from './Slide.module.css'

function Slide({slide}) {
  return (
    <div className={styles.container}>
        <div className={styles.banner}>
            <div className={styles.prod_1}>
                <img src={slide.image_1} alt='slide'/>
            </div>
            <div className={styles.content}>
                <span>upto</span>
                <h3>50% Off</h3>
                <p>Offer ends after 5days</p>
                <a href="#" className={styles.btn}>View Offer</a>
            </div>
            <div className={styles.prod_2}>
                <img src={slide.image_2} alt='slide'/>
            </div>
        </div>
      
    </div>
  )
}

export default Slide
