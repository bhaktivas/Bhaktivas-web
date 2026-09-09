import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let db = null;

try {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (projectId && clientEmail && privateKey) {
        const app =
            getApps().length > 0
                ? getApps()[0]
                : initializeApp({
                      credential: cert({
                          projectId,
                          clientEmail,
                          privateKey,
                      }),
                  });
        db = getFirestore(app);
    } else {
        if (process.env.NODE_ENV === 'development') {
            console.warn('[firebaseAdmin] Warning: Firebase environment variables missing. Falling back to safe mock mode.');
        }
    }
} catch (error) {
    console.error('[firebaseAdmin] Initialization error:', error.message);
}

const firebaseAdmin = { db };

export { db };
export default firebaseAdmin;