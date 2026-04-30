import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p className="text-gray-300">📍 sirajgonj, Rajshahi, Bangladesh</p>
          <p className="text-gray-300">📞 +880 1790987656</p>
          <p className="text-gray-300">📧 almamun2001@gmail.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Twitter (X)
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} YourStore. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
