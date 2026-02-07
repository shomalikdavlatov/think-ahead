# Think Ahead - Quick Start Guide

## 🚀 Running the Application

### Quick Start (Recommended)
Run both frontend and backend together:
```bash
npm start
```

### Separate Processes
If you prefer to run them separately:

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## 📍 Access Points

- **Frontend (React App)**: http://localhost:5173
- **Backend (API Server)**: http://localhost:3000

## ⚙️ Configuration

Make sure your `.env` file contains:
```
GEMINI_API_KEY=your_actual_api_key_here
```

Get your API key from: https://makersuite.google.com/app/apikey

## 📦 What's Included

This folder contains everything you need:
- ✅ React frontend (Vite)
- ✅ Express backend (Node.js)
- ✅ Google AI integration
- ✅ All dependencies

## 🛠️ Available Scripts

- `npm start` - Run both frontend and backend
- `npm run dev` - Run frontend only (Vite dev server)
- `npm run server` - Run backend only (Express server)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Features

- Fully responsive design (desktop, tablet, mobile)
- Real-time AI chat assistant
- Beautiful animations and transitions
- Message timestamps
- Auto-scroll to latest message
- Loading states and error handling

## 🆘 Troubleshooting

**Port already in use?**
- Kill the process using port 3000 or 5173
- Or change the port in `server.js` or `vite.config.js`

**API key error?**
- Make sure `.env` file exists in this folder
- Verify your API key is valid
- Restart the server after updating `.env`

**Dependencies missing?**
```bash
npm install
```

Enjoy your AI Study Assistant! 🎓
