// Rewrites a Cloudinary delivery URL to request an auto-formatted (WebP/AVIF),
// auto-compressed, resized version instead of shipping the full-resolution original.
export const optimizeCloudinaryUrl = (url, { width, height, crop = "limit" } = {}) => {
  if (
    !url ||
    typeof url !== "string" ||
    !url.includes("cloudinary.com") ||
    !url.includes("/upload/")
  ) {
    return url;
  }

  const transforms = ["f_auto", "q_auto"];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (width || height) transforms.push(`c_${crop}`);

  return url.replace("/upload/", `/upload/${transforms.join(",")}/`);
};

export const uploadFileToCloudinary = async (files, data) => {
  const fileUrl = [];
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
  try {
    for (const key in files) {
      const data = new FormData();
      data.append("file", files[key]);
      data.append("upload_preset", uploadPreset);
      data.append("cloud_name", cloudName);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        },
      );
      const resData = await res.json();
      fileUrl.push(resData.url);
    }
    data["files"] = fileUrl;
    return data;
  } catch (e) {
    console.log(e);
  }
};
