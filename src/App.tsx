

function App() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-blue-600 text-white p-6 text-center text-2xl font-bold">
        Sarita Karwa's Portfolio
      </header>

      <main className="p-6 space-y-12 max-w-3xl mx-auto">
        {/* About Section */}
        <section id="about">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>
            Hi! I'm Sarita, a full-stack developer with a passion for creating clean and modern web applications. I love working with React, TypeScript, and Node.js.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <ul className="space-y-4">
            <li className="border p-4 rounded shadow">
              <h3 className="text-lg font-medium">Blog App</h3>
              <p>Full-featured blog platform with authentication, profile management, and CRUD blogs using MERN stack.</p>
            </li>
            <li className="border p-4 rounded shadow">
              <h3 className="text-lg font-medium">Drowsiness Detection System</h3>
              <p>AI-powered tool that detects driver fatigue in real-time using OpenCV and machine learning.</p>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            📧 Email: <a href="mailto:sarita@example.com" className="text-blue-600 underline">sarita@example.com</a>
          </p>
          <p>
            💼 GitHub: <a href="https://github.com/saritakarwaa" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">github.com/saritakarwaa</a>
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 text-center text-sm text-gray-600 p-4 mt-12">
        &copy; {new Date().getFullYear()} Sarita Karwa. All rights reserved.
      </footer>
    </div>
  )
}

export default App
