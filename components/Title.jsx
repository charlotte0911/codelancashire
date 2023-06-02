import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="bg-slate-200 flex items-center justify-center">
      {children}
    </h1>
  );
}
