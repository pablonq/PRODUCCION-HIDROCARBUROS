"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileInput = e.target.elements.excelFile;
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <>
      <div className="text-8xl text-green-950">HomePage</div>
      <div style={{ padding: "2rem" }}>
        <h1>Subir archivo Excel</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="file" name="file" accept=".xlsx, .xls" required />
          <button type="submit">Subir</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}
