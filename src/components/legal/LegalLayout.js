import Link from 'next/link';
import styles from './LegalLayout.module.css';

export default function LegalLayout({
    title,
    lastUpdated,
    children,
}) {
    return (
        <main className={styles.container}>
            <article className={styles.card}>

                <Link
                    href="/"
                    className={styles.brand}
                >
                    Bhaktivas
                </Link>

                <h1>{title}</h1>

                <p className={styles.updated}>
                    Last updated: {lastUpdated}
                </p>

                <div className={styles.content}>
                    {children}
                </div>

            </article>
        </main>
    );
}