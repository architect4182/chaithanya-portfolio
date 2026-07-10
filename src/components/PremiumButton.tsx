"use client";

import React from "react";

interface PremiumButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function PremiumButton({ href, onClick, children, className = "", ariaLabel }: PremiumButtonProps) {
  const content = (
    <>
      <span style={{
        position: "relative",
        zIndex: 2,
        fontWeight: 600,
        fontSize: "1.1rem",
        color: "white",
        marginRight: "0.2rem"
      }}>
        {children}
      </span>

      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          backgroundColor: "var(--accent-primary)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "12px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </>
  );

  const commonClasses = `premium-btn ${className}`;

  if (href) {
    return (
      <a href={href} className={commonClasses} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
