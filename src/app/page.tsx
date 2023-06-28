import Image from 'next/image'
import styles from './page.module.css'
import HERO from 'public/hero.png'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for your digital products</h1>
        <p className={styles.desc}>Turning your Idea into reality. we bring together global tech industry</p>
      <button className={styles.button}>See our Works</button>
      </div>
      <div className={styles.item}>
      <Image src={HERO} alt='joy Biswas' className={styles.image}/>
      </div>
    </main>
  )
}
