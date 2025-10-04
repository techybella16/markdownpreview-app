📘 Markdown Preview App

This project was bootstrapped with Create React App.

It’s a real-time Markdown Previewer where users can write Markdown on the left and see the rendered output on the right.

📝 Project Description & Features

Live Markdown editing with instant preview

GitHub Flavored Markdown (GFM) support (tables, checklists, strikethrough, etc.)

Syntax highlighting for code blocks

Responsive design (works on desktop and mobile)

Accessibility-first design: semantic HTML, ARIA roles, WCAG AA contrast compliance

Error Boundaries to catch crashes in the previewer

Optional API integrations (Markdown-to-PDF, cloud save, etc.)

⚙️ Installation & Setup Instructions
Prerequisites

Node.js (>= 18 recommended)

npm (>= 10) or yarn

Steps
# Clone the repository
git clone https://github.com/techybella16/markdownpreview-app

# Navigate into the project folder
cd markdownpreview-app

# Install dependencies
npm install

# Start development server
npm start


The app will run locally on:
👉 http://localhost:3000

To build for production:

npm run build

📜 Available Scripts & Commands

In the project directory, you can run:

npm start → Runs app in development mode.

npm test → Launches the test runner in watch mode.

npm run build → Builds the app for production.

npm run eject → Ejects CRA configuration (⚠️ irreversible).

🛠 Technology Stack & Architecture Decisions

React 19 → Frontend framework

Tailwind CSS + Flowbite → Styling and UI components

React Markdown → Core Markdown rendering

remark-gfm → Enables GitHub Flavored Markdown features

rehype-raw → Allows limited raw HTML parsing (with sanitization for safety)

React-Toastify → Toast notifications

CodeMirror / Monaco Editor → Provides syntax highlighting in the Markdown editor

Architecture Notes:

Chose react-markdown because it safely parses Markdown without exposing security vulnerabilities.

Added rehype-raw to support inline HTML while maintaining sanitization.

Error Boundaries ensure that unexpected Markdown doesn’t crash the app.

🔌 API Documentation & Usage (Optional Integrations)

If enabled, APIs may provide:

Markdown-to-PDF API → Export rendered Markdown as a PDF

Cloud Storage API → Save & retrieve Markdown documents online

Usage examples will go here once integrated.

📷 Screenshots / Demos
Markdown Input	Preview Output

	

Optionally add a GIF or short demo video here (e.g., hosted on GitHub or YouTube).

🚧 Known Issues / Limitations

Performance may degrade with very large Markdown files

Some raw HTML may not render as expected due to sanitization

Mobile keyboard experience could be further optimized

🔮 Future Improvements

Export to PDF / Word / HTML

Dark mode & theme switching

Collaborative editing (via WebSockets)

Offline-first support as a Progressive Web App (PWA)

📚 CRA Reference Docs

For more details on CRA internals:

Code Splitting

Analyzing Bundle Size

Making a PWA

Deployment

Troubleshooting build errors

👩‍💻 Author

Developed by Your Name.

Portfolio


📜 License

This project is licensed under the MIT License
.