import { db } from '@/lib/firebaseAdmin';

export default async function TestPage() {
    const snapshot = await db.collection('bhajans').limit(1).get();

    return (
        <div>
            Documents: {snapshot.size}
        </div>
    );
}