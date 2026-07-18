import { db } from '@/lib/firebaseAdmin';
import { transformBhajan } from '../transformers/transformBhajan';

export async function getBhajan(id, locale = 'en') {
    const snapshot = await db
        .collection('bhajans')
        .doc(id)
        .get();

    if (!snapshot.exists) {
        return null;
    }

    return transformBhajan(
        {
            id: snapshot.id,
            ...snapshot.data(),
        },
        locale
    );
}