import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";

export default function Profile() {
  const { isLoggedIn, user, setUser } = useAppContext();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userInfo = params.get("user_info");

    if (userInfo) {
      try {
        const decodedString = decodeURIComponent(userInfo);
        const jsonString = atob(decodedString);
        const userData = JSON.parse(jsonString);
        setUser(userData);
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch (error) {
        console.error("Failed to parse user info from URL", error);
      }
    }
  }, [setUser]);

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/auth/google/login";
  };

  const handleLogout = () => {
    setUser(null);
  };


  if (!isLoggedIn) {
    return (
      <div className="flex flex-col w-full h-full pb-24">
        <header className="relative px-6 pt-12 pb-8 bg-white dark:bg-surface-dark rounded-b-[2rem] shadow-soft z-10">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full p-1 border-2 border-primary/20 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800">
                <span className="material-symbols-outlined text-zinc-300 dark:text-zinc-600 text-5xl">
                  person
                </span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
              Welcome, Guest
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Join us to manage your floral experience
            </p>
          </div>
        </header>

        <main className="flex-1 px-6 py-8 flex flex-col justify-center items-center pb-32 overflow-y-auto no-scrollbar">
          <section className="w-full max-w-sm">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent-green dark:bg-green-900/10 rounded-tr-full -ml-6 -mb-6"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-primary-light dark:bg-pink-900/20 rounded-full flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    local_florist
                  </span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Track orders & more
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Sign in to see your profile, track your tulip deliveries, and
                  access exclusive member offers.
                </p>
              </div>

              <div className="pt-2 relative z-10">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full bg-white dark:bg-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-600 text-zinc-700 dark:text-white font-medium py-3.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-600 shadow-sm transition-all flex items-center justify-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full pb-24">
      <header className="relative px-6 pt-12 pb-8 bg-white dark:bg-surface-dark rounded-b-[2rem] shadow-soft z-10">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full p-1 border-2 border-primary/20">
              {user?.avatar_url ? (
                <img
                  src={user.avatar_url}
                  alt={user.full_name || "User Avatar"}
                  className="w-full h-full rounded-full object-cover shadow-sm"
                />
              ) : (
                <span className="material-symbols-outlined text-zinc-300 dark:text-zinc-600 text-5xl">
                  person
                </span>
              )}
            </div>
            <button className="absolute bottom-1 right-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-600 transition-colors">
              <span className="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            {user?.full_name || "Guest User"}
          </h1>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 px-4 py-1.5 rounded-full border border-amber-200 dark:border-amber-700/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <span className="material-symbols-outlined text-amber-500 text-lg">
              workspace_premium
            </span>
            <span className="text-amber-700 dark:text-amber-400 font-bold text-sm tracking-wide uppercase">
              Gold Client
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 py-8 space-y-8 pb-32 overflow-y-auto no-scrollbar">
        <section>
          <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-4 px-1">
            Overview
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                24
              </span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Orders
              </span>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-bl-full"></div>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                Oct 24
              </span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Last Buy
              </span>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary-light dark:bg-pink-900/20 rounded-bl-full"></div>
              <span className="text-xl font-bold text-primary mb-1">
                $1,240
              </span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Total
              </span>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-200">
              Personal Info
            </h2>
            <button className="text-sm font-semibold text-primary">
              Save Changes
            </button>
          </div>
          <div className="space-y-4 bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50">
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <div className="flex items-center border-b border-zinc-200 dark:border-zinc-700 pb-2 focus-within:border-primary transition-colors">
                <span className="material-symbols-outlined text-zinc-400 text-lg mr-3">
                  person
                </span>
                <input
                  type="text"
                  defaultValue={user?.full_name || ""}
                  className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 dark:text-white font-medium text-sm"
                />
                <span className="material-symbols-outlined text-zinc-300 text-sm">
                  edit
                </span>
              </div>
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                Email
              </label>
              <div className="flex items-center border-b border-zinc-200 dark:border-zinc-700 pb-2 focus-within:border-primary transition-colors">
                <span className="material-symbols-outlined text-zinc-400 text-lg mr-3">
                  email
                </span>
                <input
                  type="email"
                  defaultValue={user?.email || ""}
                  className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 dark:text-white font-medium text-sm"
                  readOnly
                />
              </div>
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                Delivery Address
              </label>
              <div className="flex items-center border-b border-zinc-200 dark:border-zinc-700 pb-2 focus-within:border-primary transition-colors">
                <span className="material-symbols-outlined text-zinc-400 text-lg mr-3">
                  location_on
                </span>
                <input
                  type="text"
                  defaultValue="123 Floral Lane, Blossom City"
                  className="bg-transparent border-none p-0 w-full focus:ring-0 text-zinc-900 dark:text-white font-medium text-sm"
                />
                <span className="material-symbols-outlined text-zinc-300 text-sm">
                  edit
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-4 px-1">
            Settings
          </h2>
          <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 overflow-hidden divide-y divide-zinc-100 dark:divide-zinc-700/50">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group text-left"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center text-red-400 group-hover:text-red-500">
                  <span className="material-symbols-outlined text-lg">
                    logout
                  </span>
                </div>
                <span className="font-medium text-zinc-700 dark:text-zinc-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  Sign Out
                </span>
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
