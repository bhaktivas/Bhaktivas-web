import Link from 'next/link';

import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <main className={styles.container}>

            <div className={styles.card}>

                <div className={styles.icon}>
                    🙏
                </div>

                <h1>Content Not Found</h1>

                <p>
                    This devotional content may have been removed or the link is invalid.
                </p>

                <div className={styles.actions}>

                    <Link
                        href="https://www.bhaktivas.com"
                        className={styles.primaryButton}
                    >
                        Visit Bhaktivas
                    </Link>

                    <a
                        href="https://play.google.com/store/apps/details?id=com.bhaktivas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryButton}
                    >
                        Download Bhaktivas
                    </a>

                </div>

            </div>

        </main>
    );
}