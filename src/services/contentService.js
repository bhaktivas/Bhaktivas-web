import { db } from '@/lib/firebaseAdmin';
import { CONTENT_TYPES } from '@/constants/contentTypes';

export async function getContent(type, id, locale = 'en') {

    const config = CONTENT_TYPES[type];

    if (!config) {

        return null;

    }

    const snapshot = await db
        .collection(config.collection)
        .doc(id)
        .get();

    if (!snapshot.exists) {

        return null;

    }

    return config.transformer(
        {
            id: snapshot.id,
            ...snapshot.data(),
        },
        locale
    );

}