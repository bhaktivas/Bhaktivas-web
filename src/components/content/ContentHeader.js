import styles from './ContentPage.module.css';
import MediaPlayer from '../media/MediaPlayer';

export default function ContentHeader({ content }) {
    const hasMedia = Boolean(
        content.videoUrl ||
        content.hlsUrl ||
        content.audioUrl ||
        content.mediaUrl ||
        content.image ||
        content.imageUrl
    );

    return (
        <>
            {hasMedia && (
                <div className={styles.mediaContainer || 'mb-6'}>
                    <MediaPlayer
                        content={content}
                        className={styles.image || 'w-full rounded-2xl shadow-md'}
                    />
                </div>
            )}

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