# CONDITIONED — Firebase Setup (5 minutes)

## Step 1: Create a Firebase Project

1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Name it something like `conditioned-ap-psych`
4. Disable Google Analytics (you don't need it)
5. Click "Create project"

## Step 2: Create a Realtime Database

1. In the left sidebar, click "Build" → "Realtime Database"
2. Click "Create Database"
3. Choose the location closest to you (us-central1 is fine)
4. Select **"Start in test mode"** (we'll secure it after)
5. Click "Enable"

## Step 3: Get Your Config

1. Click the gear icon (⚙️) next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" → click the web icon (`</>`)
4. Register the app (name it "Conditioned")
5. Copy the `firebaseConfig` object — it looks like:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "conditioned-ap-psych.firebaseapp.com",
  databaseURL: "https://conditioned-ap-psych-default-rtdb.firebaseio.com",
  projectId: "conditioned-ap-psych",
  storageBucket: "conditioned-ap-psych.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Step 4: Paste Config into index.html

Open `index.html` and find this block near the top of the main `<script>`:

```js
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  ...
};
```

Replace ALL the placeholder values with your real config values from Step 3.

## Step 5: Set Database Rules

In the Firebase console → Realtime Database → Rules tab, paste:

```json
{
  "rules": {
    "leaderboard": {
      ".read": true,
      ".write": true,
      "$entry": {
        ".validate": "newData.hasChildren(['name', 'teacher', 'period', 'wisdom'])"
      }
    }
  }
}
```

Click "Publish."

> These rules let anyone read/write the leaderboard. Since students don't have accounts, this is the simplest approach. The data is just names + scores — nothing sensitive.

## Step 6: Deploy to Netlify

1. Go to https://app.netlify.com/drop
2. Drag the entire `AP APP PROJECT` folder onto the page
3. Wait ~10 seconds — you'll get a URL like `https://random-name.netlify.app`
4. Share that URL with your students

## That's it!

Students visit the URL → enter their name, pick their teacher + period → play → scores push to Firebase automatically → leaderboard shows class rankings in real time.

### Resetting the Leaderboard

To clear all scores (e.g., before a new unit or exam):
1. Firebase Console → Realtime Database
2. Hover over "leaderboard" → click the X to delete
3. Scores will repopulate as students play

### Changing a Student's Info

If a student entered wrong info, they can clear it by opening browser DevTools → Console → typing:
```js
localStorage.removeItem("conditioned_student");
location.reload();
```
