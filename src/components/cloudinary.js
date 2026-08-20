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
