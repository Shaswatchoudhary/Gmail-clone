# 📧 Gmail Clone - MERN Stack

[![Watch on YouTube](https://img.youtube.com/vi/W-nhAHDQEWQ/0.jpg)](https://www.youtube.com/live/W-nhAHDQEWQ?si=y-pwv2eEvklRbrI-)

A full-featured Gmail clone built using the **MERN stack** (MongoDB, Express, React, Node.js). This project replicates core Gmail functionality like sending emails, inbox view, drafts, trash, and more.

---

## 🚀 Demo Screenshots

### 📥 Inbox View
![Inbox View](https://via.placeholder.com/800x450?text=Inbox+Screenshot)

### ✉️ Compose Email
![Compose Email](https://via.placeholder.com/800x450?text=Compose+Screenshot)

### 💾 Auto-Save Draft
![Draft Auto Save](https://via.placeholder.com/800x450?text=Draft+Screenshot)

> 🔄 Replace placeholder URLs with real screenshots if available.

---

## ✨ Features

- 🔐 User Authentication (Login/Register)
- 📝 Compose and Send Emails
- 💾 Auto-save drafts while typing
- 📥 Inbox, 📤 Sent, 🗂 Drafts, 🗑 Trash functionality
- 📦 Delete, Archive, and Restore emails
- 📱 Mobile Responsive using Material UI
- ✅ Mail status: read/unread indicator
- ⚙️ REST API with Express and MongoDB

---

## 🧱 Tech Stack

**Frontend:**
- React
- React Router
- Material UI
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- CORS

---

## 📁 Project Structure

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
```
## ⚙️ Installation
✅ Prerequisites
Node.js

MongoDB (Local or Atlas)

Git

###🔧 Clone the Repository
```
git clone https://github.com/Shaswatchoudhary/Gmail-clone.git
cd Gmail-clone
```
### 🔌 Backend Setup
```
cd server
npm install
touch .env
Create a .env file and add:
```
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
Run the backend:
npm run dev
```
## 💻 Frontend Setup
```
cd client
npm install
npm start
```


## 📡 API Endpoints
```
Method	Endpoint	Description
POST	/api/auth/login	User login
POST	/api/auth/register	User registration
POST	/api/email/send	Send an email
POST	/api/email/draft	Save email as draft
GET	/api/email/inbox	Fetch inbox emails
GET	/api/email/sent	Fetch sent emails
GET	/api/email/drafts	Fetch draft emails
DELETE	/api/email/delete/:id	Move email to Trash (soft delete)
DELETE	/api/email/permanent/:id	Permanently delete email
```
## 📺 YouTube Walkthrough
```
Watch the full walkthrough of this project on YouTube:
👉 Click to Watch
```

## 🤝 Contributing
```
Pull requests are welcome. For major changes, please open an issue first to discuss.
```
## 📝 License
```
This project is licensed under the MIT License.
```

