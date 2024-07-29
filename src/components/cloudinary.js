export const uploadFileToCloudinary = async (files, data) => {
  const fileUrl = [];
  try {
    for(const key in files ) {
      const data = new FormData();
      data.append("file", files[key]);
      data.append("upload_preset", "qpfwor4c");
      data.append("cloud_name", "dmfyjaagg");
      const res = await fetch("https://api.cloudinary.com/v1_1/dmfyjaagg/image/upload", {
        method: "POST",
        body: data,
      });
      const resData = await res.json();
      fileUrl.push(resData.url);
    }
    data["files"] = fileUrl;
    return data;
  } catch (e) {
    console.log(e);
  }
};
