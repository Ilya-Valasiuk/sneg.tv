import React from "react";

export function CloseIcon({ onClick }) {
  return (
    <svg
      className="close-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      onClick={onClick}
    >
      <path
        stroke="#fff"
        strokeWidth={2}
        d="M.734.734l14.532 14.532m-14.532 0L15.266.734"
      />
    </svg>
  );
}
