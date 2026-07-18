import { transformBhajan } from '@/transformers/transformBhajan';
import { transformWallpaper } from '@/transformers/transformWallpaper';

export const CONTENT_TYPES = {

    bhajans: {

        collection: 'bhajans',

        transformer: transformBhajan,

        label: 'Bhajans',

    },

    wallpapers: {

        collection: 'wallpapers',

        transformer: transformWallpaper,

        label: 'Wallpapers',

    },

};