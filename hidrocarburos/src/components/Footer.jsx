export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0d] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Texto */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-2xl">#</span>
          <p>Copyright © 2025 - All rights reserved</p>
        </div>

        {/* Íconos con animación */}
        <div className="flex items-center gap-6 text-gray-300">

          {/* GitHub */}
          <a
            href="https://github.com/pablonq"
            target="_blank"
            className="transition transform hover:scale-125 hover:text-white"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.3 1.6 2.9 2.1v-2.2c-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9v2.3c0 .3.2.7.8.6A10.98 10.98 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pablo-navarro-quezada"
            target="_blank"
            className="transition transform hover:scale-125 hover:text-blue-500"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.7h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v6.1h-4v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.5H9v-12z"/>
            </svg>
          </a>

        </div>

      </div>
    </footer>
  );
}
