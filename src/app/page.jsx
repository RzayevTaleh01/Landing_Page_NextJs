import Image from "next/image";
import styles from "./page.module.css";
import HeroImg from "public/hero.png";
import Button from "@/components/button/Button";


export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.headerInfo}>
        <h1 className={styles.infoHead}> Better design for your digital products.</h1>
        <p className={styles.infoText}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text='See Our Works'></Button>
      </div>
      <div className={styles.headerImg}>
        <Image src={HeroImg} alt='image' className={styles.heroImg} />
      </div>
    </div>
  );
}
