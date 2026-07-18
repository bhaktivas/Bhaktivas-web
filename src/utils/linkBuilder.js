const WEBSITE_URL =
    process.env.NEXT_PUBLIC_WEBSITE_URL ||
    'https://www.bhaktivas.com';

export function buildContentUrl(type, id) {
    return `${WEBSITE_URL}/${type}s/${id}`;
}