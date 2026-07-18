import styles from './ContentPage.module.css';

import ContentHeader from './ContentHeader';
import CTAButtons from './CTAButtons';
import Footer from './Footer';

export default function ContentPage({ content }) {
    return (
        <main className={styles.page}>
            <div className={styles.card}>
                <ContentHeader content={content} />

                <CTAButtons url={content.url} />

                <Footer />
            </div>
        </main>
    );
}