
const categories = ["All", "Movies & TV", "Games", "Music", "Books"];

const reviewedItems = [
  { title: "Example Movie", category: "Movie", rating: 4, year: 2025 },
  { title: "Example Game", category: "Game", rating: 5, year: 2026 },
  { title: "Example Album", category: "Album", rating: 3, year: 2025 },
];

const pendingItems = [
  { title: "Another Movie", category: "Movie", status: "Awaiting review" },
  { title: "Another Game", category: "Game", status: "In progress" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-7xl">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 border-r border-white/10 p-6 md:block">
          <a href="/" className="text-2xl font-bold tracking-tight">
            Review<span className="text-amber-400">ALL</span>
          </a>

          <p className="mt-2 text-sm text-zinc-500">
            Your personal review archive
          </p>

          <nav className="mt-10 space-y-2">
            <a
              href="#dashboard"
              className="block rounded-lg bg-white/10 px-3 py-2 text-sm"
            >
              Dashboard
            </a>
            <a
              href="#library"
              className="block rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
            >
              My Library
            </a>
            <a
              href="#reviews"
              className="block rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
            >
              My Reviews
            </a>
          </nav>

          <div className="mt-10 rounded-xl border border-white/10 p-4">
            <p className="text-sm font-medium">Your corner of the internet.</p>
            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Everything you watch, play, read and listen to.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-8">
            <div>
              <p className="text-sm text-zinc-500">YOUR PERSONAL ARCHIVE</p>
              <h1 className="mt-1 text-2xl font-semibold" id="dashboard">
                Dashboard
              </h1>
            </div>

            <button
              type="button"
              className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
            >
              + Add item
            </button>
          </header>

          <div className="space-y-10 px-5 py-8 sm:px-8">
            {/* Category */}
            <section id="library">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-500">YOUR COLLECTION</p>
                  <h2 className="mt-1 text-xl font-semibold">Category</h2>
                </div>
                <a
                  href="#library"
                  className="text-sm text-amber-400 hover:text-amber-300"
                >
                  View library →
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    className={`rounded-full border px-4 py-2 text-sm ${
                      index === 0
                        ? "border-amber-400 bg-amber-400 text-zinc-950"
                        : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {reviewedItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          {item.category} · {item.year}
                        </p>
                        <h3 className="mt-2 font-semibold">{item.title}</h3>
                      </div>
                      <span className="rounded-md bg-amber-400/10 px-2 py-1 text-sm text-amber-400">
                        {item.rating}/5 ★
                      </span>
                    </div>
                    <p className="mt-5 text-sm text-zinc-500">
                      Placeholder content — your review will appear here.
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* To be reviewed */}
            <section>
              <div>
                <p className="text-sm text-zinc-500">YOUR NEXT THOUGHTS</p>
                <h2 className="mt-1 text-xl font-semibold">To Be Reviewed</h2>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {pendingItems.map((item) => (
                  <article
                    key={item.title}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 p-4"
                  >
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="mt-1 text-sm text-zinc-500">
                        {item.category}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      {item.status}
                    </span>
                  </article>
                ))}
              </div>
            </section>

            {/* Recommended next review */}
            <section id="reviews">
              <p className="text-sm text-zinc-500">PICK UP WHERE YOU LEFT OFF</p>
              <h2 className="mt-1 text-xl font-semibold">
                Recommended Next Review
              </h2>

              <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/[0.04] p-6 sm:p-8">
                <p className="text-sm text-amber-400">UP NEXT</p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Your next review starts here.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
                  This space will recommend an item from your collection that
                  is waiting for a review. For now, this is placeholder content.
                </p>
                <button
                  type="button"
                  className="mt-5 rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white/5"
                >
                  Explore your collection
                </button>
              </div>
            </section>

            <footer className="border-t border-white/10 py-6 text-center text-xs text-zinc-600">
              ReviewALL · Your reviews, all in one place.
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
