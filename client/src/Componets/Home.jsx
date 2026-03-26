import { useState } from "react";
import axios from "axios";
import Preview from "./Preview";
import CodeBox from "./CodeBox";
import Header from "./Header";
import Footer from "./Footer";
import SaveWebsite from "./SaveWebsite";
import Preloader from "./Preloader";


const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading]=useState(false);

  const generateSite = async () => {
    setLoading(true);
    setDownloading(false);
    try {
      const response = await axios.post("http://localhost:5000/api/ai/generate", {prompt,});
      setCode(response.data.code);
      setLoading(false);
      setDownloading(true); 

    } catch (err) {
      console.log("Error generating site", err);
    } 

  };
  return (
    <>
      <Header />
      <div className="flex h-screen bg-gradient-to-br from-gray-900 to-black text-white">

        {/* LEFT PANEL */}
        <div className="w-[40%] p-6 flex flex-col gap-4 border-r border-gray-800">

          {/* Prompt Box */}
          <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
            <textarea
              placeholder="Describe your website... (e.g. portfolio, ecommerce)"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-32 bg-transparent outline-none resize-none text-sm"
            />
          </div>

          {/* Button */}
          <button
            onClick={generateSite}
            className={`w-full py-3 rounded-xl font-semibold transition ${loading
              ? "bg-gray-900 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
              }`}
            disabled={loading}
          >
            {loading ?  <Preloader/>: "✨ Generate Website"}
          </button>

 
          {downloading && <SaveWebsite code={code} />}

        
          
          {/* Code Editor */}
          <div className="flex-1 overflow-hidden">
            <CodeBox code={code} setCode={setCode} />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-[60%]  bg-gray from-gray-900 to-black text-white">
          <Preview code={code} />
        </div>
      

      </div>
      <Footer />
    </>
  );
};

export default Home;