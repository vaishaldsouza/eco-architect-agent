import { useState } from "react";
import { analyzeItem } from "./api";

export default function App() {
  const [persona, setPersona] = useState("senior-eco-architect");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const [collapsed, setCollapsed] = useState({
    summary: false,
    indicators: false,
    risks: false,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!image && !instructions.trim()) {
      setError("Please provide a visual asset or text instructions to initiate generation.");
      return;
    }

    const formData = new FormData();
    formData.append("persona", persona);
    formData.append("instructions", instructions);
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      const data = await analyzeItem(formData);
      setResult(data);
    } catch (err) {
      setError("Service Unavailable. Ensure the backend is active on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = (section) => {
    setCollapsed((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="container">
      <header className="studio-header">
        <h1>Persona Studio<sup>©</sup></h1>
        <p className="subtitle">AI-Driven Generative Sourcing & Sustainability Frameworks</p>
      </header>

      <main className="studio-grid">
        <section className="input-panel">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Target Agent Persona</label>
              <select value={persona} onChange={(e) => setPersona(e.target.value)}>
                <option value="senior-eco-architect">Senior Eco-Architect</option>
                <option value="green-procurement-manager">Green Procurement Manager</option>
                <option value="sustainability-marketing-expert">Sustainability Marketing Expert</option>
              </select>
            </div>

            <div className="field">
              <label>Consultancy Instructions</label>
              <textarea
                placeholder="Describe project constraints or material requirements..."
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Visual Reference (Optional)</label>
              <div className="upload-zone">
                {!imagePreview ? (
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                ) : (
                  <div className="preview-container">
                    <img src={imagePreview} alt="Preview" className="preview-img" />
                    <button type="button" className="clear-btn" onClick={clearImage}>
                      Remove Asset
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button type="submit" disabled={loading} className="primary-btn">
              {loading ? "System Generating..." : image ? "Analyze Visual Asset" : "Generate Strategy"}
            </button>
          </form>
          {error && <div className="alert-error">⚠️ {error}</div>}
        </section>

        <section className="results-container">
          {loading && (
            <div className="loading-overlay">
              <div className="spinner"></div>
              <p>Gemini is synthesizing persona-driven insights...</p>
            </div>
          )}

          {result && (
            <div className="output-card">
              <div className="card-header">
                <div>
                  <span className="persona-tag">{result.persona.replace(/-/g, " ")}</span>
                  <span className="mode-tag">{result.mode}</span>
                </div>
                {result.eco_score !== "N/A" && (
                  <div className="eco-badge">
                    Score: {result.eco_score}
                  </div>
                )}
              </div>

              <div className="content-block">
                <h3 onClick={() => toggleSection("summary")}>
                  {result.mode === "Visual Analyst" ? "Asset Analysis" : "Strategic Narrative"}
                  <span className="toggle-icon">{collapsed.summary ? "＋" : "－"}</span>
                </h3>
                {!collapsed.summary && <p className="narrative">{result.summary}</p>}
              </div>

              <div className="content-block">
                <h3 onClick={() => toggleSection("indicators")}>
                  Sustainability Framework
                  <span className="toggle-icon">{collapsed.indicators ? "＋" : "－"}</span>
                </h3>
                {!collapsed.indicators && (
                  <ul className="indicator-list">
                    {result.sustainability_evaluation?.positive_indicators?.map((item, i) => (
                      <li key={i} className="pos-item">✦ {item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="content-block">
                <h3 onClick={() => toggleSection("risks")}>
                  Risk Assessment & Constraints
                  <span className="toggle-icon">{collapsed.risks ? "＋" : "－"}</span>
                </h3>
                {!collapsed.risks && (
                  <ul className="indicator-list">
                    {result.sustainability_evaluation?.risks_or_unknowns?.map((item, i) => (
                      <li key={i} className="risk-item">⚠️ {item}</li>
                    ))}
                  </ul>
                )}
              </div>

              {result.inventory_matches?.length > 0 && (
                <div className="content-block">
                  <h3>Sourcing Inventory Matches</h3>
                  <div className="inventory-grid">
                    {result.inventory_matches.map((item, i) => (
                      <div key={i} className="match-pill">
                        <span className="match-name">{item.product_name}</span>
                        <span className="match-stock">Qty: {item.stock}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {!result && !loading && (
            <div className="placeholder-state">
              <p>Enter project details or upload a reference to begin the studio session.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}