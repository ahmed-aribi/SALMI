async function upload() {
  const input = document.getElementById("imgInput");
  const file = input.files[0];
  if (!file) return alert("Please select an image!");

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("https://your-backend-url/ocr", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  document.getElementById("output").innerText = data.text || "No text found.";
}
