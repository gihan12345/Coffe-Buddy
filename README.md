☕ Coffee Buddy

**Coffee Buddy** is a modern, responsive coffee shop website built with **React (Vite)** and **Tailwind CSS**. It features a cozy aesthetic, a functional gallery, direct WhatsApp table reservations, and an email contact form.

## 🚀 Live Demo
[Insert Link to Live Demo Here] 
## ✨ Key Features
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

* **Responsive Design:** Fully optimized for mobile, tablet, and desktop using Tailwind CSS.
* **📍 Services & Reservations:** * Browse services.
    * **WhatsApp Integration:** Users can book a table directly via a form that pre-fills a WhatsApp message.
* **🖼️ Gallery:** * Pinterest-style **Masonry Layout**.
    * **Lightbox Feature:** Click images to view them in full screen.
* **📩 Contact Form:** * Fully functional form powered by **EmailJS**.
    * No backend server required.
* **🗺️ Location:** Embedded Google Map integration.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Functionality:** * EmailJS (Contact Form)
    * WhatsApp API (Reservations)
* **Icons:** SVG / Heroicons

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone [https://github.com/gihan12345/coffee-buddy.git](https://github.com/your-username/coffee-buddy.git)
cd coffee-buddy

###File structure

coffee-buddy/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable components (Navbar, Footer, Hero)
│   ├── data/            # Static data (Gallery images, Menu items)
│   ├── pages/           # Main Pages (Home, About, Services, Contact, Gallery)
│   ├── App.jsx          # Main App component & Routing
│   └── main.jsx         # Entry point
├── tailwind.config.js   # Tailwind configuration
└── README.md            # Project documentation
