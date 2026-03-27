import axios from "axios";

const SaveWebsite = ({code})=>{

    const downloadSite = async () => {
        try {
          const response = await axios.post("https://ai-website-builder-m8zs.vercel.app/api/ai/download",{code},{responseType:"blob"});
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
    
          link.href = url;
          link.setAttribute("download", "website.zip");
          document.body.appendChild(link);
          link.click();
    
        } catch (err) {
          console.log("Download failed", err);
        }
      };

    return(
        <div>
             <button
            onClick={downloadSite}
            className="w-full py-3 font-semibold transition px-15 bg-green-600 rounded-xl"
          >
            ⬇ Download
          </button>
        </div>
    )
}
export default SaveWebsite;
