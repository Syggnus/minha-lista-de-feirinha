import { NotificationSubscription } from '@/components/NotificationSubscription';

export let subscriptions: NotificationSubscription[] = [];

export const addSubscription = (subscription: Omit<NotificationSubscription, 'id' | 'createdAt'>) => {
  const newSubscription: NotificationSubscription = {
    ...subscription,
    id: generateSubscriptionId(),
    createdAt: new Date().toISOString(),
  };
  subscriptions.push(newSubscription);
  return newSubscription;
};

export const getSubscriptions = () => subscriptions;

export const removeSubscription = (id: string) => {
  subscriptions = subscriptions.filter(s => s.id !== id);
};

export const updateSubscription = (id: string, updates: Partial<NotificationSubscription>) => {
  subscriptions = subscriptions.map(s => 
    s.id === id ? { ...s, ...updates } : s
  );
};

const generateSubscriptionId = () => {
  return `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export interface Reminder {
  id: string;
  subscriptionId: string;
  fairMarketId: string;
  scheduledTime: string;
  sent: boolean;
  createdAt: string;
}

export let reminders: Reminder[] = [];

export const scheduleReminder = (subscriptionId: string, fairMarketId: string, eventDate: string, reminderMinutes: number) => {
  const eventTime = new Date(eventDate);
  const reminderTime = new Date(eventTime.getTime() - (reminderMinutes * 60 * 1000));
  
  const reminder: Reminder = {
    id: generateReminderId(),
    subscriptionId,
    fairMarketId,
    scheduledTime: reminderTime.toISOString(),
    sent: false,
    createdAt: new Date().toISOString(),
  };
  
  reminders.push(reminder);
  return reminder;
};

export const getReminders = () => reminders;

export const markReminderAsSent = (id: string) => {
  reminders = reminders.map(r => 
    r.id === id ? { ...r, sent: true } : r
  );
};

export const getPendingReminders = () => {
  const now = new Date();
  return reminders.filter(r => !r.sent && new Date(r.scheduledTime) <= now);
};

const generateReminderId = () => {
  return `rem_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};