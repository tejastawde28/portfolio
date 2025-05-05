# Portfolio Website

This is the source code for my personal portfolio website, hosted at [tejastawde.me](https://tejastawde.me). The website showcases my projects, skills, and contact information. It also includes a contact form that allows visitors to send me messages directly via email.

---

## Features

### 1. **Portfolio Showcase**
- Displays a list of projects with descriptions, technologies used, and links to GitHub repositories or live demos.

### 2. **Skills Section**
- Highlights my technical skills and expertise.

### 3. **Contact Form**
- A fully functional contact form that allows visitors to send me messages.
- Messages are sent directly to my email using the **Nodemailer** library and a backend API hosted within the Next.js app.

### 4. **Responsive Design**
- The website is fully responsive and works seamlessly on desktops, tablets, and mobile devices.

---

## Tech Stack

### **Frontend**
- **Next.js**: React-based framework for building the frontend and API routes.
- **Tailwind CSS**: For styling and responsive design.
- **Lucide Icons**: For modern and customizable icons.

### **Backend**
- **Next.js API Routes**: Used to handle the backend logic for the contact form.
- **Nodemailer**: For sending emails from the contact form.

---

## Contact Form: Mail-Sending Feature

### **How It Works**
1. The contact form is located in the **Contact** section of the website.
2. When a user submits the form, the data is sent to the backend API route (`/api/send-message`).
3. The backend API uses **Nodemailer** to send the message to the configured email address.

The backend logic is implemented in [`pages/api/send-message.js`](pages/api/send-message.js):

---

## Contact

If you have any questions or feedback, feel free to reach out to me at [tawde.te@northeastern.edu](mailto:tawde.te@northeastern.edu).