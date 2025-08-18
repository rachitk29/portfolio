import React from 'react';

function Footer() {
  return (
    <footer className="py-6 mb-8">
      <div className="max-w-2xl mx-auto text-gray-400 text-center font-figtree border-t border-[#27272a] tracking-wider pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>
        <p className="text-sm pt-2">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-blue-400 font-medium">rachit</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
