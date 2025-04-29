
# 🧠 Break

**Break** is a minimalistic social platform where users can share what’s on their mind and read thoughts shared by others. Built with **Firebase Authentication** and **Firebase Realtime Database**, the app aims to offer a lightweight, distraction-free environment for expressing and exploring ideas.

> 🚧 This project is currently under active development.

---

## 🔧 Features

- 🔐 **Authentication**
  - Google sign-in and email/password login via Firebase Auth.
- 📦 **Realtime Database**
  - Stores user-generated thoughts.
  - Supports live read/write operations.
- 💬 **Post your thoughts**
  - Authenticated users can share what’s on their mind.
- 🔍 **Discover**
  - Read thoughts shared by others in real time.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/break.git
cd break
```

### 2. Set Up Firebase

- Initialize Firebase in your project via the Firebase CLI.
- Enable **Authentication** (Google and Email/Password).
- Enable **Realtime Database** and configure read/write permissions for authenticated users.
- Copy `.env.sample` → `.env.local` and fill in:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project_id.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the App

```bash
npm run dev
```

---

## 🧪 Testing

- Create a test user account.
- Log in using email/password or Google.
- Try adding and viewing shared thoughts.
- Confirm thoughts appear in the Firebase Realtime Database.

---

## 📌 TODO

- [ ] Add user profiles
- [ ] Edit/Delete thoughts
- [ ] Pagination and sorting
- [ ] Likes or reactions
- [ ] Dark mode

---
