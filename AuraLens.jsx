
import React, { useState } from "react";

function AuraLens() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleAnalyze = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("photo", document.querySelector("#photoInput").files[0]);

    const response = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>AuraLens.ai</h1>
      <input type="file" id="photoInput" onChange={handleUpload} />
      <button onClick={handleAnalyze}>Analyze My Aura</button>
      {loading && <p>Loading...</p>}
      {result && (
        <div>
          <p><strong>Aura Color:</strong> {result.auraColor}</p>
          <p><strong>Mood:</strong> {result.mood}</p>
          <p><strong>Personality:</strong> {result.personality}</p>
          <p><strong>Compatibility:</strong> {result.compatibleWith}</p>
        </div>
      )}
    </div>
  );
}

export default AuraLens;
