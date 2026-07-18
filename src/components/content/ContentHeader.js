import styles from './ContentPage.module.css';

export default function ContentHeader({ content }) {
    return (
        <>
            <img
                src={content.image}
                alt={content.title}
                className={styles.image}
            />

            <h1 className={styles.title}>
                {content.title}
            </h1>

            {content.subtitle && (
                <p className={styles.subtitle}>
                    {content.subtitle}
                </p>
            )}

            {content.description && (
                <p className={styles.description}>
                    {content.description}
                </p>
            )}
        </>
    );
}