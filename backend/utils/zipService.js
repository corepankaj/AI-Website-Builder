import archiver from "archiver";

const createZip = (res, code) => {
  const archive = archiver("zip", { zlib: { level: 9 } });

  res.attachment("website.zip");
  archive.pipe(res);

  // main file
  archive.append(code, { name: "index.html" });

  // optional extra files (pro feel)
  archive.append("/* Add your CSS here */", { name: "style.css" });
  archive.append("// Add your JS here", { name: "script.js" });

  archive.finalize();
};
export {createZip};