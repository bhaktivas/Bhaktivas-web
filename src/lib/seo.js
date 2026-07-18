export function generateContentMetadata(content) {
    const title = `${content.title} | Bhaktivas`;

    const description =
        content.description ||
        'Experience devotional content on Bhaktivas.';

    return {
        title,
        description,

        alternates: {
            canonical: content.url,
        },

        openGraph: {
            title,
            description,

            url: content.url,

            siteName: 'Bhaktivas',

            images: [
                {
                    url: content.image,
                    width: 1200,
                    height: 630,
                    alt: content.title,
                },
            ],

            locale: 'en_IN',
            type: 'website',
        },

        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [content.image],
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1,
            },
        },
    };
}