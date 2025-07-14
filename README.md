# 🔐 Firebase Auth App

A simple and clean authentication system built with **React**, **Firebase Authentication**, and **Tailwind CSS**. Supports user **Signup**, **Login**, **Protected Routes**, and **Logout**.

---

## 🚀 Features

- ✅ Email & Password Signup
- ✅ Secure Login
- ✅ Protected Dashboard Route
- ✅ Global Auth Context with `onAuthStateChanged`
- ✅ Tailwind CSS UI
- ✅ Firebase Integration (no backend needed)

---

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [React Router v6](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🛠 Folder Thingy!!

src/
│
├── context/
│ └── AuthContext.jsx # Auth logic (context + Firebase)
│
├── pages/
│ ├── Signup.jsx # Signup form
│ ├── Login.jsx # Login form
│ └── Dashboard.jsx # Protected page
│
├── firebase.js # Firebase config
├── App.jsx # Routing + protected routes
└── main.jsx # Entry point
