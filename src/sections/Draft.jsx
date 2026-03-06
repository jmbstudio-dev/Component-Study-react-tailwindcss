export const Draft = () => {
  return (
    <section id="draft" className="py-32 relative overflow-hidden">
      <h2 className="sr-only">Dashboard / Highlights</h2>
      <div className="max-w-5xl mx-auto relative">
        {/* Grid container for all cards */}
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          
          {/* Theme / Color Picker Card */}
          <div className="border rounded-lg bg-base p-4 shadow-lg sm:col-span-2 xl:col-span-1">
            <h3 className="text-text mb-4 text-sm font-semibold">Theme</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              {["Latte", "Frappe", "Macchiato", "Mocha"].map(theme => (
                <button
                  key={theme}
                  className={`flex-1 px-2 py-1 text-xs font-medium rounded-md transition ${
                    theme === "Mocha"
                      ? "bg-accent text-white"
                      : "bg-base text-subtext1 hover:text-text"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2.5">
              {["rosewater","flamingo","pink","mauve","red","maroon","peach"].map(color => (
                <button
                  key={color}
                  aria-label={color}
                  className="aspect-square w-full rounded-md shadow-sm transition-transform duration-150 hover:scale-110"
                  style={{ backgroundColor: `var(--color-${color})` }}
                ></button>
              ))}
            </div>
          </div>

          {/* Let's Connect Card */}
          <div className="border rounded-lg bg-base p-4 shadow-lg lg:col-span-1 flex flex-col justify-between">
            <h3 className="text-text mb-3 text-sm font-semibold">Let's Connect</h3>
            <p className="text-subtext0 mb-4 text-sm">
              Always open to interesting projects and conversations.
            </p>
            <a
              href="https://cal.com/jsoncam/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent/80 text-white px-3 py-1.5 rounded-md text-sm font-medium text-center hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              Book a Chat
            </a>
          </div>

          {/* Click Counter Card */}
          <div className="border rounded-lg bg-base p-4 shadow-lg lg:col-span-1 flex flex-col items-center justify-center">
            <div className="text-accent text-4xl font-bold mb-3">787,080</div>
            <button className="bg-accent text-white rounded-xl px-6 py-3 font-bold mb-3 hover:scale-105 transition-transform">
              CLICK ME
            </button>
            <p className="text-subtext1 text-xs">you've clicked 0 times</p>
          </div>

          {/* Map / Location Card */}
          <div className="border rounded-lg bg-base p-4 shadow-lg lg:col-span-1 flex flex-col">
            <h3 className="text-text mb-3 text-sm font-semibold">Currently Based In 📍</h3>
            <div className="bg-surface0 flex-1 rounded-lg overflow-hidden flex items-center justify-center">
              <span className="text-subtext1">[Map Placeholder]</span>
            </div>
            <div className="mt-3 text-xs flex justify-between items-center">
              <span>Toronto, ON</span>
              <span className="text-yellow font-mono text-xs">11:23:40</span>
            </div>
          </div>

          {/* Recent Commits Card */}
          <div className="border rounded-lg bg-base p-4 shadow-lg md:col-span-2">
            <h3 className="text-text mb-3 text-sm font-semibold flex items-center gap-2">
              Recent Commits
            </h3>
            <ul className="space-y-1.5 text-sm">
              {[
                { repo: "nyx", msg: "integrate latest commits fetching", added: 305, removed: 23 },
                { repo: "Katib", msg: "Merge pull request #4", added: 41, removed: 8 },
                { repo: "Katib", msg: "Add author filtering function", added: 41, removed: 8 },
              ].map((commit, i) => (
                <li key={i} className="flex justify-between">
                  <span className="font-medium">{commit.repo}:</span>
                  <span className="truncate">{commit.msg}</span>
                  <span className="text-xs">
                    <span className="text-green">+{commit.added}</span>/
                    <span className="text-red">-{commit.removed}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Posts Card */}
          <div className="border rounded-lg bg-base p-4 shadow-lg sm:col-span-2 lg:col-span-2">
            <h3 className="text-text mb-3 text-sm font-semibold flex items-center gap-2">
              Latest Posts
            </h3>
            <ul className="list-none space-y-2">
              {[
                { title: "AWS Lambda InvalidEntrypoint Debugging", date: "Nov 28, 2025" },
                { title: "AWS CDK Credentials Hell", date: "Nov 26, 2025" },
                { title: "Hello World", date: "Oct 19, 2025" },
                { title: "Stop Burning CPU on Dead FastAPI Streams", date: "Jul 06, 2025" },
              ].map((post, i) => (
                <li key={i} className="flex justify-between text-sm text-subtext0 hover:text-accent">
                  <span className="truncate">{post.title}</span>
                  <span className="text-xs">{post.date}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};