import React from 'react';
import Head from 'next/head';
import styles from './About.module.css';
import Link from 'next/link';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <Link rel="icon" href="favicon.ico" />
            </Head>
            <p className={styles.description}>This is the about page. Wellcome!</p>
        </div>
    )
}
