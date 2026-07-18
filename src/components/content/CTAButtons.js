'use client';

import styles from './ContentPage.module.css';
import { getStoreUrl } from '@/utils/storeLinks';

export default function CTAButtons({ url }) {
  const handleOpenApp = () => {
    console.log(url);
    window.location.href = url;
  };

  const handleDownload = () => {
    window.open(getStoreUrl(), '_blank');
  };

  return (
    <div className={styles.actions}>
      <button
        className={styles.primaryButton}
        onClick={handleOpenApp}
      >
        Open in Bhaktivas
      </button>

      <button
        className={styles.secondaryButton}
        onClick={handleDownload}
      >
        Download Bhaktivas
      </button>
    </div>
  );
}