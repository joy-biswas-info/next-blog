import Image from 'next/image'
import styles from './page.module.css'
import HERO from 'public/hero.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={HERO} alt='joy Biswas' className={styles.image}/>

    </main>
  )
}
