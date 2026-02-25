import { Link } from "react-router-dom";

export default function Notifications() {
  return (
    <div className="flex flex-col w-full h-full pb-24">
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl px-6 pt-14 pb-4 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link
              to="/orders"
              className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center -ml-2"
            >
              <span className="material-symbols-outlined text-zinc-600 dark:text-zinc-300">
                arrow_back
              </span>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Notifications
            </h1>
          </div>
          <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            Mark all read
          </button>
        </div>
      </header>

      <main className="px-5 py-6 space-y-8">
        <section>
          <h2 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wider px-1">
            Today
          </h2>
          <div className="space-y-4">
            <div className="bg-primary-light/30 dark:bg-primary/10 rounded-2xl p-4 shadow-sm border border-primary/10 dark:border-primary/20 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"></div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">
                    local_florist
                  </span>
                </div>
                <div className="flex-1 pr-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                      Order Shipped!
                    </h3>
                    <span className="text-xs text-zinc-400 font-medium whitespace-nowrap ml-2">
                      2h ago
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Your bouquet "Velvet Crimson" is on its way via delivery
                    service.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-4 shadow-soft border border-zinc-50 dark:border-zinc-800 relative">
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"></div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green">
                  <span className="material-symbols-outlined">local_offer</span>
                </div>
                <div className="flex-1 pr-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                      Spring Sale 🌷
                    </h3>
                    <span className="text-xs text-zinc-400 font-medium whitespace-nowrap ml-2">
                      5h ago
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Get 20% off all yellow tulips this weekend. Use code
                    SPRING20.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wider px-1">
            Yesterday
          </h2>
          <div className="space-y-4">
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-4 shadow-soft border border-zinc-50 dark:border-zinc-800 opacity-80">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                      Order Delivered
                    </h3>
                    <span className="text-xs text-zinc-400 font-medium whitespace-nowrap ml-2">
                      1d ago
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Order #TLP-8829 has been successfully delivered to the
                    recipient.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-4 shadow-soft border border-zinc-50 dark:border-zinc-800 opacity-80">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                  <span className="material-symbols-outlined">loyalty</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                      Double Points
                    </h3>
                    <span className="text-xs text-zinc-400 font-medium whitespace-nowrap ml-2">
                      1d ago
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    You earned double loyalty points on your recent purchase!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wider px-1">
            Last Week
          </h2>
          <div className="space-y-4">
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-4 shadow-soft border border-zinc-50 dark:border-zinc-800 opacity-60">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                  <span className="material-symbols-outlined">
                    security_update_good
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                      App Update
                    </h3>
                    <span className="text-xs text-zinc-400 font-medium whitespace-nowrap ml-2">
                      5d ago
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    We've updated our privacy policy and terms of service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
