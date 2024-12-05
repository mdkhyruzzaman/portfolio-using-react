import React from "react";

function MailMeButton() {
  const email = "khyruzzaman999@gmail.com";
  const subject = "Hello!";
  const body = "I wanted to reach out to you about...";

  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <button
      onClick={() => (window.location.href = mailToLink)}
      className="bg-[#0A3D2A] text-[#A9B7A0] font-bold py-2 px-4 rounded hover:bg-blue-600 active:scale-95 transition transform flex items-center space-x-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 3.75l4.5 4.5m0 0l-4.5 4.5m4.5-4.5H7.5m6.75 6H4.5m0 0l-4.5-4.5m4.5 4.5l4.5-4.5"
        />
      </svg>
      <span>Mail Me</span>
    </button>
  );
}

export default MailMeButton;
