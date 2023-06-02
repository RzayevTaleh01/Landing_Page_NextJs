import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>2023 - Taleh Rzayev | All right reserved.</div>
      <div>
        <div className={styles.socialMedia}>
        <Image className={styles.socialIcon} src="/1.png" alt='Facebook' width={20} height={20} />
        <Image className={styles.socialIcon} src="/2.png" alt='Facebook' width={20} height={20} />
        <Image className={styles.socialIcon} src="/3.png" alt='Facebook' width={20} height={20} />
        <Image className={styles.socialIcon} src="/4.png" alt='Facebook' width={20} height={20} />
        </div>
        
      </div>
    </div>
  )
}
