import styles from './ContentLoading.module.css';

export default function ContentLoading() {
    return (
        <main className={styles.container}>
            <div className={styles.card}>

                <div className={styles.logo}>
                    🕉️
                </div>

                <div className={styles.spinner} />

                <h2>Loading...</h2>

                <p>Preparing your devotional content</p>

            </div>
        </main>
    );
}