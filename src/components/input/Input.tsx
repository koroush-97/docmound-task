import React from "react";

export function Input() {
  return (
    <div>
      <label htmlFor="phone" className="block text-sm mb-1">
        شماره موبایل
      </label>
      <input
        id="phone"
        type="tel"
        placeholder="مثلاً 09123456789"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
