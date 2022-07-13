export async function uploadFile(event) {
  const [imageFile] = event.target.files;
  if (imageFile) {
    const formData = new FormData();
    formData.append("file", imageFile);

    const res = await fetch("http://192.168.3.79:3001/api/file/create", {
        body: formData,
        method: "POST",
      }),
      response = await res.json();

    if (!res.ok) throw new Error(response.message);

    console.log(response);

    // if (isLoaded) {
    //   const imageUrl = URL.createObjectURL(imageFile)
    //   setFileUrl(imageUrl)
    // }
  }
}
