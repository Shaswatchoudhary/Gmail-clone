# Gmail Clone - MERN Stack

[![Watch on YouTube](https://img.shields.io/badge/Watch%20on-YouTube-red?logo=youtube)](https://www.youtube.com/live/W-nhAHDQEWQ?si=y-pwv2eEvklRbrI-)

A full-featured Gmail clone built using the MERN stack (MongoDB, Express, React, Node.js). This project replicates core Gmail functionality like sending emails, inbox view, drafts, trash, and more.

## Demo

![Gmail Clone - Inbox](https://your-image-url.com/inbox.png)
*Inbox View*

![Gmail Clone - Compose Mail](https://your-image-url.com/compose.png)
*Compose Email*

![Gmail Clone - Draft Auto Save](https://your-image-url.com/draft.png)
*Auto-Save Draft Feature*

## Features

- User Authentication (Login/Register)
- Compose and Send Emails
- Auto-save drafts while typing
- Inbox, Sent, Drafts, and Trash functionality
- Delete, Archive, and Restore emails
- Mobile Responsive using Material UI
- Mail status: read/unread indicator
- Powerful API system using Express and MongoDB

## Tech Stack

**Frontend:**
- React
- React Router
- Material UI
- Axios

**Backend:**
- Node.js
- Express
- MongoDB
- Mongoose
- CORS

## Project Structure

```bash
gmail-clone/
├── client/              # React frontend
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── server/              # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── index.js
└── README.md


Installation
Prerequisites
Node.js

MongoDB (Local or Atlas)

Git

Clone the repo
bash
Copy code
git clone https://github.com/your-username/gmail-clone.git
cd gmail-clone
Backend Setup
bash
Copy code
cd server
npm install
# Create a .env file
touch .env
.env file


PORT=5000
MONGODB_URI=your_mongodb_connection_string

npm run dev

Frontend Setup

cd client
npm install
npm start

## API Endpoints

| Method | Endpoint                    | Description                         |
|--------|-----------------------------|-------------------------------------|
| POST   | /api/auth/login             | User login                          |
| POST   | /api/auth/register          | User registration                   |
| POST   | /api/email/send             | Send an email                       |
| POST   | /api/email/draft            | Save email as draft                 |
| GET    | /api/email/inbox            | Fetch inbox emails                  |
| GET    | /api/email/sent             | Fetch sent emails                   |
| GET    | /api/email/drafts           | Fetch draft emails                  |
| DELETE | /api/email/delete/:id       | Move email to Trash (soft delete)   |
| DELETE | /api/email/permanent/:id    | Permanently delete email (optional) |


## Screenshots
You can add more screenshots here for each section like:

Sent Mail

Trash

Responsive layout

YouTube Walkthrough
Watch the full walkthrough of this project on YouTube:
https://www.youtube.com/live/W-nhAHDQEWQ?si=y-pwv2eEvklRbrI-

## Contributing
Pull requests are welcome. For major changes, please open an issue first.

License
MIT

yaml
Copy code

















