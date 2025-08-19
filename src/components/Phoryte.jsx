import React from "react";
import Container from "./Container";
import towerImg from "../assets/phoryte/towerImg.jpeg";

// Photos data
const photos = [
  {
    imgs: [towerImg, towerImg, towerImg],
    caption: `every time i walk up to the terrace,
i see shadows of people
talking to someone on the phone
maybe a friend, maybe someone they love.

and then there's me...
looking up at the sky,
lost in thoughts,
wondering what tomorrow holds.
will i ever make it?
will i become someone, or just fade away?

the moon shines brightly,
and everyone admires its light.
but no one notices the countless stars
that surround it,
that make its glow even more beautiful..! ✨🌙

~rachit`,
    hashtags: "#mobilephotography #travelingram #writer #writercommunity",
    date: "April 4, 2025",
  },
  {
    imgs: ["/your-image-4.jpg", "/your-image-5.jpg"],
    caption: "Second post caption...",
    hashtags: "#example #demo",
    date: "May 1, 2025",
  },
];

const Phoryte = () => {
  return (
    <Container>
      <div className="font-figtree min-h-screen bg-[#0a0a0a] text-white flex justify-center py-8">
        <div className="w-full max-w-5xl flex flex-col gap-12 px-2 md:px-0">
          {photos.map((post, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row border border-[#27272a] rounded-2xl overflow-hidden shadow-md hover:scale-[1.01] transition-transform duration-300"
            >
              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 bg-[#0a0a0a] flex justify-center items-center">
                <img
                  src={post.imgs[0]}
                  alt={`post-${idx}`}
                  className="w-full md:h-full object-cover"
                />
              </div>

              {/* Right Side: Caption */}
              <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between bg-[#0f0f0f]">
                <div className="flex-1">
                  <p className="text-sm whitespace-pre-line leading-relaxed">
                    {post.caption}
                  </p>
                  <p className="text-xs text-gray-400 mt-3">{post.hashtags}</p>
                </div>
                <p className="text-[11px] text-gray-500 mt-4">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Phoryte;
