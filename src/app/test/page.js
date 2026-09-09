import { db } from '@/lib/firebaseAdmin';

export const dynamic = 'force-dynamic';

export default async function TestPage() {
    const snapshot = db ? await db.collection('bhajans').limit(1).get() : { size: 0 };

    return (
        <div>
            Documents: {snapshot?.size || 0}
        </div>
    );
}