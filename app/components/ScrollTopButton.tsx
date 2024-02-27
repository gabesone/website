"use client";

import { useEffect, useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function ScrollTopButton() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      window.scrollY > 5 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  // Handle scrolling to top
  function handleScroll() {
    isVisible && window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="">
      <button
        className={`fixed bottom-4 right-4 transition-opacity duration-500 text-gray-500/70 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleScroll}
      >
        <ArrowCircleUpIcon fontSize="large" />
      </button>
    </div>
  );
}
