# Car Rentals Website

A modern car rental website built with Express.js backend and HTML/CSS/JavaScript frontend.

## Prerequisites

Before running this project, make sure you have:
- **Node.js** installed on your computer
- **npm** (comes with Node.js)

### How to Install Node.js:
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version for your operating system
3. Run the installer and follow the setup wizard
4. Verify installation by opening terminal/command prompt and typing:
   ```bash
   node --version
   npm --version
   ```

## Project Structure

```
Front-End/
├── app.js                 # Express server
├── package.json          # Node.js dependencies
├── views/                # HTML files
│   ├── index.html       # Home page
│   ├── login.html       # Login page
│   ├── book.html        # Booking page
│   └── contact.html     # Contact page
└── public/               # Static files
    ├── css/             # Stylesheets
    ├── js/              # JavaScript files
    └── images/          # Image assets
```

## Setup Instructions (For New Users)

### Step 1: Download and Extract
1. Download the project ZIP file
2. Extract it to a folder on your computer
3. Open terminal/command prompt

### Step 2: Navigate to Project Folder
```bash
cd "path/to/Front-End"
```
**Example:**
- Windows: `cd "C:\Users\YourName\Desktop\Front-End"`
- Mac/Linux: `cd "/Users/YourName/Desktop/Front-End"`

### Step 3: Install Dependencies
```bash
npm install
```
This will install all required packages (Express.js, etc.)

### Step 4: Start the Server
```bash
npm start
```

### Step 5: Open in Browser
You'll see: `Server started on port 3000`
Now open your web browser and go to:
- **Home**: http://localhost:3000/
- **Login**: http://localhost:3000/login
- **Book**: http://localhost:3000/book
- **Contact**: http://localhost:3000/contact

## Development Mode

For development with auto-restart when you make changes:
```bash
npm run dev
```

## Troubleshooting

### "npm command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)

### "Cannot find module" errors
- Run `npm install` again
- Make sure you're in the correct project folder

### Port 3000 already in use
- Change the port in `app.js` or stop other applications using port 3000

### Images not loading
- Make sure all files are in the correct folders as shown in Project Structure

## Features

- Responsive design with Bootstrap
- User authentication system
- Car booking functionality
- Contact form with issue tracking
- Modern UI with smooth animations

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **UI Framework**: Bootstrap 5
- **Package Manager**: npm

## Support

If you encounter any issues:
1. Check that Node.js is installed correctly
2. Verify you're in the right project folder
3. Run `npm install` again
4. Check the console for error messages 