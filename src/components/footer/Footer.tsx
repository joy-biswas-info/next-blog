import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div> 2023 all Copy right Reserved</div>
            <div className={styles.social}>
                <Image src="/1.png" width={15} height={15} className={styles.icon} alt="social-icon" />
                <Image src="/2.png" width={15} height={15} className={styles.icon}  alt="social-icon " />
                <Image src="/3.png" width={15} height={15} className={styles.icon}  alt="social-icon" />
            </div>
        </div>
    );
};

export default Footer;