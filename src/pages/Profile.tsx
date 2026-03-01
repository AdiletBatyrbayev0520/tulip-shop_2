import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Icon } from "../components/ui/Icon";
import { Input } from "../components/ui/Input";
import { GoogleSignInButton } from "../components/GoogleSignInButton";
import { handleGoogleSignIn, api } from "../lib/api";

export default function Profile() {
  const { isLoggedIn, user, setUser, addToBasket } = useAppContext();
  const [fullName, setFullName] = useState(user?.full_name || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || "");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setFullName(user.full_name || "");
      setPhoneNumber(user.phone_number || "");
    }
  }, [user]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isLoggedIn && user) {
        try {
          const updatedUser = await api.getUser(user.user_id);
          // Only update if stats differ to avoid infinite loops, or just update once on mount if needed.
          // Since it's refetched, we can update the user context
          setUser(updatedUser);
        } catch (error) {
          console.error("Failed to fetch user data for profile", error);
        }
      }
    };
    // Fetch once on mount to get latest stats
    fetchUserData();
  }, [isLoggedIn]); // Removed 'user' from dependency to prevent infinite fetch loop if setUser changes object ref

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

        // Recover pending basket items interrupted by login
        const pendingItemStr = localStorage.getItem("pendingCartItem");
        if (pendingItemStr) {
          const pendingItem = JSON.parse(pendingItemStr);
          addToBasket(pendingItem);
          localStorage.removeItem("pendingCartItem");
        }
      } catch (error) {
        console.error("Failed to parse user info from URL", error);
      }
    }
  }, [setUser, addToBasket]);

  const handleGoogleLogin = () => {
    handleGoogleSignIn();
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSave = async () => {
    if (!user) return;
    setIsSaving(true);
    try {
      const updatedUser = await api.updateUser(user.user_id, {
        full_name: fullName,
        phone_number: phoneNumber,
      });
      setUser(updatedUser);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
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
                  <Icon name="local_florist" className="text-3xl" />
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
                <GoogleSignInButton onClick={handleGoogleLogin} variant="outline" />
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
              <Icon name="edit" className="text-sm" />
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
              {user?.user_tier === "gold" ? "Gold Client" : user?.user_tier === "silver" ? "Silver Client" : user?.user_tier ? `${user.user_tier} Client` : "Standard Client"}
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
                {user?.total_orders || 0}
              </span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Orders
              </span>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-bl-full"></div>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                {user?.last_buy_date ? new Date(user.last_buy_date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }) : "--"}
              </span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Last Buy
              </span>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary-light dark:bg-pink-900/20 rounded-bl-full"></div>
              <span className="text-xl font-bold text-primary mb-1">
                ${user?.total_spent || 0}
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
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="text-sm font-semibold text-primary disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
          <div className="space-y-4 bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50">
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                icon={<Icon name="person" className="text-lg" />}
              />
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                Email
              </label>
              <Input
                type="email"
                value={user?.email || ""}
                readOnly
                icon={<Icon name="email" className="text-lg" />}
              />
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                Phone Number
              </label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                icon={<Icon name="phone" className="text-lg" />}
              />
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
                  <Icon name="logout" className="text-lg" />
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
