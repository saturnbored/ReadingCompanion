import Notifications from "./Notification.js";
import RemindersView from "./RemindersView.js";
import ReminderAPI from "./ReminderAPI.js";


let Reminders = ReminderAPI.getAllReminders();



const view = new RemindersView(document.getElementsByClassName('reminder-list')[0], onReminderDelete);

view.updateReminderList(Reminders);


