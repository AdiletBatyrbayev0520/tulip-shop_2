import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NotificationItem, Notification } from "../components/NotificationItem";
import { useAppContext } from "../context/AppContext";
import { api } from "../lib/api";

export default function Notifications() {
  const { user } = useAppContext();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    api.getUserNotifications(user.user_id)
      .then(setNotifications)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user]);

  const handleMarkAllRead = async () => {
    if (!user) return;
    try {
      await api.markAllNotificationsRead(user.user_id);
      setNotifications(prev => prev.map(n => ({ ...n, notification_status: "READ" })));
    } catch (err) {
      console.error(err);
    }
  };

  const mapBackendNotification = (notif: any): Notification => {
    const sendDate = new Date(notif.send_date);
    const now = new Date();
    const diffMs = now.getTime() - sendDate.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    let timeStr = "";
    if (diffHours < 1) {
      const diffMins = Math.floor(diffMs / (1000 * 60));
      timeStr = diffMins === 0 ? "Just now" : `${diffMins}m ago`;
    } else if (diffHours < 24) {
      timeStr = `${diffHours}h ago`;
    } else {
      timeStr = `${diffDays}d ago`;
    }

    let type: "success" | "offer" | "system" | "delivery" | "points" = "system";
    let iconName = "notifications";

    if (notif.notification_type === "ORDER") {
      type = "delivery";
      iconName = "local_shipping";
    } else if (notif.notification_type === "AD") {
      type = "offer";
      iconName = "local_offer";
    }

    return {
      id: notif.notification_id.toString(),
      title: notif.topic,
      message: notif.body_text,
      time: timeStr,
      iconName: iconName,
      type: type,
      isRead: notif.notification_status === "READ"
    };
  };

  const todayNotifications: Notification[] = [];
  const yesterdayNotifications: Notification[] = [];
  const pastNotifications: Notification[] = [];

  if (!loading) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    notifications.forEach(notif => {
      const mapped = mapBackendNotification(notif);
      const notifDate = new Date(notif.send_date);
      notifDate.setHours(0, 0, 0, 0);

      if (notifDate.getTime() === today.getTime()) {
        todayNotifications.push(mapped);
      } else if (notifDate.getTime() === yesterday.getTime()) {
        yesterdayNotifications.push(mapped);
      } else {
        pastNotifications.push(mapped);
      }
    });
  }

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
          <button
            onClick={handleMarkAllRead}
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Mark all read
          </button>
        </div>
      </header>

      <main className="px-5 py-6 space-y-8">
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
          </div>
        ) : notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
            <span className="material-symbols-outlined text-5xl mb-3 opacity-50">notifications_off</span>
            <p>No notifications yet</p>
          </div>
        ) : (
          <>
            {todayNotifications.length > 0 && (
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
            )}

            {yesterdayNotifications.length > 0 && (
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
            )}

            {pastNotifications.length > 0 && (
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
            )}
          </>
        )}
      </main>
    </div>
  );
}
