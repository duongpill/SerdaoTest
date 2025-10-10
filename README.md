# SerdaoTest

A React Native app built with **JavaScript / TypeScript**, demonstrating clean structure, API integration, state management, offline caching, and smooth UI/UX.

---

## 📖 Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Architecture & Structure](#architecture--structure)  
- [Tech Stack](#tech-stack)  
- [Installation & Setup](#installation--setup)  
- [Configuration](#configuration)  
- [Start App](#start-app)  
- [Testing](#testing)  
- [Screenshots / Demo](#screenshots--demo)  
- [Contributing](#contributing)  
- [License](#license)

---

## 🧱 Overview

**SerdaoTest** is a sample React Native project intended to showcase:

- A clean, modular project architecture  
- API communication and data caching  
- Offline support  
- Modern UI with animations and gestures  
- State management and testability

---

## ✨ Features

- Fetch data from a remote API  
- Local caching (e.g. using SQLite, AsyncStorage, or Realm)  
- Offline-first design  
- Smooth UI in React Native with animations  
- Detail screens with transitions  
- Gesture handling (e.g. drag-to-close)  
- Pagination or infinite scroll  
- Tests: unit tests and UI / integration tests  

---

## 🏗 Architecture & Structure

Here’s a suggested folder structure:

```
SerdaoTest/
├── src/
│   ├── api/             # API client setup, endpoints
│   ├── components/      # Reusable presentational components
│   ├── features/        # Feature modules (screens, logic)
│   ├── navigation/      # React Navigation setup
│   ├── store/            # State management (Redux, MobX, Context, etc.)
│   ├── services/        # Data services, caching, local storage
│   └── utils/           # Helpers, constants
├── App.js / index.js
├── package.json
└── README.md
```

You can adapt this to match your project.

---

## 🛠 Tech Stack

| Concern       | Library / Tool |
|---------------|-------------------|
| UI & Core     | React Native |
| Navigation     | React Navigation or Native Navigation |
| HTTP Requests | Axios / Fetch API |
| Local Storage / Caching | AsyncStorage, SQLite, Realm, or WatermelonDB |
| State Management | Redux, MobX, Context API, or Recoil |
| Animation & Gestures | React Native Reanimated, React Native Gesture Handler |
| Testing       | Jest, React Native Testing Library, Detox (E2E) |

---

## ⚙️ Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/duongpill/SerdaoTest.git
   cd SerdaoTest
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Link native dependencies / Pods (iOS)**  
   ```bash
   npx pod-install
   ```

4. **Add configuration**  
   Create a `.env` file or update `config.js` with your API keys or base URL:  
   ```dotenv
   API_BASE_URL=https://api.example.com
   API_KEY=your_api_key_here
   ```

---

## ▶️ Start App

- Run on Android:
  ```bash
  npx react-native run-android
  ```

- Run on iOS:
  ```bash
  npx react-native run-ios
  ```

- Start Metro bundler:
  ```bash
  npm start
  # or
  yarn start
  ```

---

## 🧪 Testing

- **Unit / Component Tests** with Jest & React Native Testing Library  
  ```bash
  npm test
  # or
  yarn test
  ```

- **E2E / Integration Tests** with Detox (if configured):
  ```bash
  detox test
  ```

---

*Built with ❤️ using React Native. Enjoy coding!*  
