import React from 'react'
import styles from './Home.module.css'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Easiest invoicing for freelancers and small businesses</h1>
                <div className={styles.paragraph}>
                   
                    <p>The Elegant way to store your invoicing with graphical Representation</p>
                </div>
                <br />
                <br />
                <br /> 
                <div className={styles.imgContainer}>
                    <img src='https://global-uploads.webflow.com/637f7c161a14232e2ea8473d/63c547b5965a12173aa77517_63aaa007c90d9702eed75c76_Group%25204793-p-500.png' alt="invoicing-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home
