export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F4EE] flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-[#2D1F1A]">
        Bhaktivas
      </h1>

      <p className="mt-5 max-w-xl text-center text-lg text-[#6B5B53]">
        Your Daily Companion for Bhakti, Peace & Spiritual Growth.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-full bg-[#D48A29] px-8 py-3 font-semibold text-white transition hover:opacity-90">
          Coming Soon
        </button>

        <button className="rounded-full border border-[#D48A29] px-8 py-3 font-semibold text-[#D48A29]">
          Learn More
        </button>
      </div>
    </main>
  );
}