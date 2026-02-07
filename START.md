# Think Ahead - Quick Start Guide

## 🚀 Running the Application

### Simple Start
```bash
npm run dev
```

That's it! No backend server needed - everything runs in the browser! 🎉

## 📍 Access Point

- **Application**: http://localhost:5173

## ⚙️ Configuration

Make sure your `.env` file contains:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**Important:** 
- The variable MUST start with `VITE_` for Vite to expose it to the browser
- Get your API key from: https://makersuite.google.com/app/apikey
- Restart the dev server after changing `.env`

## 📦 What's Included

This is now a **pure frontend application**:
- ✅ React frontend (Vite)
- ✅ Google AI integration (client-side)
- ✅ No backend server needed!
- ✅ All logic in the browser

## 🛠️ Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Features

- Fully responsive design (desktop, tablet, mobile)
- Real-time AI chat assistant
- Beautiful animations and transitions
- Message timestamps
- Auto-scroll to latest message
- Loading states and error handling
- **Client-side only** - no backend required!

## 🏗️ Architecture

```
Frontend (React) → Google AI API (Direct)
```

No backend server needed! The React app calls the Google AI API directly from the browser.

## 🆘 Troubleshooting

**API key error?**
- Make sure `.env` file exists in this folder
- Verify the variable is named `VITE_GEMINI_API_KEY` (with VITE_ prefix)
- Verify your API key is valid
- Restart the dev server: Stop it (Ctrl+C) and run `npm run dev` again

**Port already in use?**
- Kill the process using port 5173
- Or change the port in `vite.config.js`

**Dependencies missing?**
```bash
npm install
```

**Changes to .env not working?**
- You MUST restart the dev server after changing environment variables
- Stop the server (Ctrl+C) and run `npm run dev` again

## 🔒 Security Note

**Important:** Your API key is exposed in the browser. For production apps:
- Use API key restrictions in Google Cloud Console
- Restrict to your domain only
- Consider using a backend proxy for production
- Or use Firebase/Cloud Functions for serverless backend

For learning and development, the current setup is fine! 🎓

Enjoy your AI Study Assistant! 🚀
