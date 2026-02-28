import { Link } from "react-router-dom";
import { NotificationItem, Notification } from "../components/NotificationItem";

export default function Notifications() {
  const todayNotifications: Notification[] = [
    {
      id: "1",
      title: "Order Shipped!",
      message: 'Your bouquet "Velvet Crimson" is on its way via delivery service.',
      time: "2h ago",
      iconName: "local_florist",
      type: "delivery",
      isRead: false,
    },
    {
      id: "2",
      title: "Spring Sale 🌷",
      message: "Get 20% off all yellow tulips this weekend. Use code SPRING20.",
      time: "5h ago",
      iconName: "local_offer",
      type: "offer",
      isRead: false,
    },
  ];

  const yesterdayNotifications: Notification[] = [
    {
      id: "3",
      title: "Order Delivered",
      message: "Order #TLP-8829 has been successfully delivered to the recipient.",
      time: "1d ago",
      iconName: "check_circle",
      type: "success",
      isRead: true,
    },
    {
      id: "4",
      title: "Double Points",
      message: "You earned double loyalty points on your recent purchase!",
      time: "1d ago",
      iconName: "loyalty",
      type: "points",
      isRead: true,
    },
  ];

  const pastNotifications: Notification[] = [
    {
      id: "5",
      title: "App Update",
      message: "We've updated our privacy policy and terms of service.",
      time: "5d ago",
      iconName: "security_update_good",
      type: "system",
      isRead: true,
    },
  ];

  return (
    <div className="relative flex flex-col w-full h-full pb-24 pt-[110px]">
      <header className="fixed w-full top-0 left-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl px-6 pt-14 pb-4 border-b border-zinc-100 dark:border-zinc-800">
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
            {todayNotifications.map((notif) => (
              <NotificationItem key={notif.id} notification={notif} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wider px-1">
            Yesterday
          </h2>
          <div className="space-y-4">
            {yesterdayNotifications.map((notif) => (
              <NotificationItem key={notif.id} notification={notif} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wider px-1">
            Last Week
          </h2>
          <div className="space-y-4">
            {pastNotifications.map((notif) => (
              <NotificationItem key={notif.id} notification={notif} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
