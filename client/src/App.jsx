import { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [pages, setPages] = useState({});
  const [activePage, setActivePage] = useState("index.html");
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:5000/api";

  // 🔥 Generate Multi Page Website
  const handleGenerate = async () => {
    try {
      setLoading(true);

      const res = await axios.post(`${API}/generate`, {
        prompt: `
Create a multi-page website:
Pages:
- index.html (home)
- about.html
- contact.html

Use Tailwind CSS CDN.
Return response in JSON format like:
{
  "index.html": "...",
  "about.html": "...",
  "contact.html": "..."
}

Only return JSON.
User Request: ${prompt}
        `,
      });

      let text = res.data.code;

      // Clean markdown
      text = text.replace(/```json/g, "").replace(/```/g, "").trim();

      const parsed = JSON.parse(text);

      setPages(parsed);
      setActivePage("index.html");

      setLoading(false);

    } catch (err) {
      console.error(err);
      alert("Error generating site");
      setLoading(false);
    }
  };

  // ✏️ Handle code edit
  const handleEditorChange = (value) => {
    setPages({ ...pages, [activePage]: value });
  };

  // 📦 Download all pages
  const handleDownload = async () => {
    const res = await axios.post(
      `${API}/download`,
      { pages },
      { responseType: "blob" }
    );

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const a = document.createElement("a");
    a.href = url;
    a.download = "multi-page-site.zip";
    a.click();
  };

  return (
    <div className="h-screen flex flex-col">

      {/* Header */}
      <div className="bg-black text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">🚀 AI Website Builder Pro</h1>

        <div>
          <button
            onClick={handleGenerate}
            className="bg-blue-500 px-4 py-2 mr-2 rounded"
          >
            {loading ? "Generating..." : "Generate"}
          </button>

          <button
            onClick={handleDownload}
            className="bg-green-500 px-4 py-2 rounded"
          >
            Download
          </button>
        </div>
      </div>

      {/* Prompt */}
      <div className="p-3 border-b">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your website..."
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1">

        {/* Left - Editor */}
        <div className="w-1/2 flex flex-col">

          {/* Tabs */}
          <div className="flex border-b">
            {Object.keys(pages).map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`px-4 py-2 ${
                  activePage === page ? "bg-gray-200" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Monaco Editor */}
          <Editor
            height="100%"
            language="html"
            value={pages[activePage] || ""}
            onChange={handleEditorChange}
            theme="vs-dark"
          />
        </div>

        {/* Right - Preview */}
        <div className="w-1/2 bg-white">
          <iframe
            title="preview"
            srcDoc={pages[activePage]}
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
  );
}

export default App;