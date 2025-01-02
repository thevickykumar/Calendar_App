# Calendar Application for Communication Tracking

This React-based Calendar Application is designed to help track communications with companies, ensuring timely follow-ups and maintaining strong professional relationships. The application is divided into multiple modules including Admin, User, and Reporting & Analytics (optional).

## Features

### Admin Module
- **Company Management:** Add, edit, and delete companies. Includes company details like name, location, LinkedIn profile, emails, phone numbers, comments, and communication periodicity.
- **Communication Method Management:** Define communication methods, order, and mandatory status for each method. The default sequence includes LinkedIn Post, LinkedIn Message, Email, Phone Call, and Other.

### User Module
- **Dashboard:** Displays company names, the last five communications, and the next scheduled communication with color-coded highlights for overdue and due communications.
- **Interactive Features:** Users can hover over completed communications to see comments and notes.
- **Communication Action:** Log new communications with type, date, and notes. Overdue/yellow highlights reset upon logging.
- **Notifications:** Displays overdue and due communications with a badge showing counts.
- **Calendar View:** View past and upcoming communications in a calendar format.

### Reporting & Analytics Module (Optional)
- **Communication Frequency Report:** Shows usage frequency of each communication method over time with filtering options.
- **Engagement Effectiveness Dashboard:** Tracks the success rate of each communication method.
- **Overdue Communication Trends:** Displays a trendline or heatmap of overdue communications.
- **Downloadable Reports:** Export reports as PDF or CSV.
- **Real-Time Activity Log:** Live feed of all communication activities.

## Technologies Used

- **Frontend:** React.js
- **Styling:** Tailwind CSS (for clean and responsive design)
- **State Management:** React Context API / Redux (depending on the approach you prefer)
- **Calendar:** FullCalendar or similar library (for managing past and upcoming communications)
- **Other Libraries:** React Router, Axios for API requests

## Setup Instructions

### Prerequisites
- Node.js and npm (or yarn) installed on your local machine.
- Git (to clone the repository).

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thevickykumar/Calendar_App.git
2. Start the development server
```bash
  npm start

3. In another terminal
```bash
  json-server --watch db.json --port 5000  
     
###  Deployment Link
  https://calendar-app-tau-six.vercel.app/

 