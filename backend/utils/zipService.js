import archiver from "archiver";

export const createZip = (res, pages) => {
  res.attachment("website.zip");

  const archive = archiver("zip");
  archive.pipe(res);

  for (const fileName in pages) {
    archive.append(pages[fileName], { name: fileName });
  }

  archive.finalize();
};