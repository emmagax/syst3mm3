async function loadSkin(file) {
  const zip = await JSZip.loadAsync(file);

  const assets = {};

  for (const filename in zip.files) {
    const fileData = zip.files[filename];

    if (!fileData.dir) {
      const blob = await fileData.async("blob");
      assets[filename] = URL.createObjectURL(blob);
    }
  }

  return assets;
}

