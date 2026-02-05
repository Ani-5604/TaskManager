# ✅ Task Manager App
**Version:** v1.0.0

A modern React-based Task Manager application with user authentication using Firebase. Users can sign up, log in, and manage tasks efficiently through a clean and intuitive interface.

---

## 🚀 Features

- 🔐 User Authentication (Firebase Email & Password)
- 📝 Add and Edit Tasks
- 📄 Task Title & Description Support
- 🔄 Reusable Task Form Component
- 🧭 Client-side Routing (React Router)
- 🎨 Clean UI with custom CSS
- ⚛️ Built with React Hooks

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- JavaScript (ES6)
- HTML5
- CSS3

### Backend / Services
- Firebase Authentication

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── Signup.jsx
│   │   ├── Login.jsx
│   │   └── Auth.css
│   │
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.css
│   │
│   └── Task/
│       └── TaskForm.jsx
│
├── services/
│   └── firebase.js
│
├── App.jsx
├── main.jsx
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Firebase

Create a Firebase project and enable **Email/Password Authentication**.

Update `src/services/firebase.js`:
```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

### 4️⃣ Run the Application
```bash
npm run dev
```

App will run at:
```
http://localhost:5173
```

---

## 🧠 Core Components

### 🔹 TaskForm
- Used for both adding and editing tasks
- Controlled inputs using `useState`
- Reusable and scalable

### 🔹 Signup
- Firebase authentication
- Error handling
- Redirects to dashboard on success

### 🔹 Home
- Landing page
- Navigation to Login and Signup

---

## 📌 Future Enhancements

- Task deletion
- Task status (completed / pending)
- Firestore database integration
- Protected routes
- User profile page
- Dark mode

---

## 📜 License

MIT License

---

**Status:** Actively Developed  
**Author:** Your Name
