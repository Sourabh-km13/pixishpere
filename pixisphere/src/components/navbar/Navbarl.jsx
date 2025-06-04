"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname(); // e.g., /pixisphere/profile/4
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  console.log(segments);
  
  const links = [
    {
      name: "Home",
      href: "/pixisphere",
      isActive: segments.length === 1,
    },
  ];

  if (segments.includes("Citywise")) {
    links.push({
      name: "Citywise",
      href: "/pixisphere/Citywise",
      isActive: segments.includes("Citywise") && segments.length === 2,
    });
  }

  if (segments.includes("profile")) {
    links.push({
      name: "Profile",
      href: pathname,
      isActive: true,
    });
  }

  return (
    <nav className="bg-gray-100 rounded-xl shadow-sm p-4 mb-6 flex justify-center">
      <ol className="flex items-center gap-3 text-sm text-gray-700">
        {links.map((link, index) => (
          <li key={link.href} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-400 text-2xl">›</span>}
            <button
              onClick={() => !link.isActive && router.push(link.href)}
              disabled={link.isActive}
              className={`transition duration-200 text-xl ${
                link.isActive
                  ? "text-black font-semibold cursor-default"
                  : "text-blue-600 hover:underline"
              }`}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navbar;