import { transformBhajan } from '@/transformers/bhajanTransformer';
import { transformWallpaper } from '@/transformers/wallpaperTransformer';

export const CONTENT_REGISTRY = {
    bhajans: {
        collection: 'bhajans',
        transformer: transformBhajan,
    },

    wallpapers: {
        collection: 'wallpapers',
        transformer: transformWallpaper,
    },
};