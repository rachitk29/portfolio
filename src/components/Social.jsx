import React from "react";
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Social() {
  const socials = [
    {
      name: "Email Me",
      icon: <FaEnvelope />,
      link: "rachitkumar2953@gmail.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/rachitk29",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/rachitk29",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rachitk29/",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-8 pt-4 text-left">
      {/* Top border with text */}
      <p className="font-figtree text-sm text-gray-400 mb-4 border-t border-[#27272a] pt-2">
        Where to find me (<span className="text-white">digitally</span>) if you wish to
      </p>

      {/* Social Buttons */}
      <div className="flex flex-wrap gap-3 text-gray-400">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-1 text-gray-400 text-sm  shadow hover:border-[#f3576c] transition"
          >
            {social.icon}
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Social;
