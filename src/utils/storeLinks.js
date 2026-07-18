
const PLAY_STORE_URL =
    'https://play.google.com/store/apps/details?id=com.bhaktivas.app';

const APP_STORE_URL =
    'https://apps.apple.com/...';

    
export function getStoreUrl() {

    const ua = navigator.userAgent;

    if (/iPhone|iPad|iPod/i.test(ua)) {
        return APP_STORE_URL;
    }

    return PLAY_STORE_URL;
}