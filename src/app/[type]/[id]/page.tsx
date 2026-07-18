import { notFound } from 'next/navigation';

import { getContent } from '@/services/contentService';
import { generateContentMetadata } from '@/lib/seo';

import ContentPage from '@/components/content/ContentPage';

export async function generateMetadata({ params }) {
    const { type, id } = await params;

    const content = await getContent(type, id);

    if (!content) {
        return {};
    }

    return generateContentMetadata(content);
}

export default async function Page({ params }) {
    const { type, id } = await params;

    const content = await getContent(type, id);

    if (!content) {
        notFound();
    }

    return <ContentPage content={content} />;
}