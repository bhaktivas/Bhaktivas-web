export default function Home() {
    return (
        <main className="min-h-screen bg-[#F8F4EE] flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">

                <h1 className="text-5xl font-bold text-[#2D1F1A]">
                    Bhaktivas
                </h1>

                <p className="mt-6 text-xl text-[#6B5B53]">
                    Your Daily Companion for Bhakti, Peace & Spiritual Growth.
                </p>

                <p className="mt-6 text-base leading-8 text-[#6B5B53]">
                    Start every day with devotion through powerful alarms,
                    soulful bhajans, divine wallpapers, Panchang,
                    horoscope, live mandir darshan, devotional status,
                    motivational audio, and much more—all in one app.
                </p>

                <div className="mt-12 flex flex-wrap justify-center gap-4">

                    <a
                        href="https://play.google.com/store/apps/details?id=com.bhaktivas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#D48A29] px-8 py-3 font-semibold text-white transition hover:opacity-90"
                    >
                        Download for Android
                    </a>

                    <a
                        href="/privacy"
                        className="rounded-full border border-[#D48A29] px-8 py-3 font-semibold text-[#D48A29]"
                    >
                        Privacy Policy
                    </a>

                </div>

                <div className="mt-16 grid grid-cols-2 gap-6 text-left md:grid-cols-4">

                    <Feature title="Bhajans" />

                    <Feature title="Wallpapers" />

                    <Feature title="Live Mandir" />

                    <Feature title="Panchang" />

                    <Feature title="Horoscope" />

                    <Feature title="Devotional Alarm" />

                    <Feature title="Status" />

                    <Feature title="Motivational Audio" />

                </div>

            </div>
        </main>
    );
}

function Feature({ title }) {
    return (
        <div className="rounded-2xl bg-white p-5 shadow-sm">

            <h3 className="font-semibold text-[#2D1F1A]">
                {title}
            </h3>

        </div>
    );
}