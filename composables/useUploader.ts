import { ref } from 'vue';

const file = ref<File[]>([]);
const fileInput = ref<HTMLInputElement | null>(null);

export const fileHandle = (event: Event) => {
  const target = event.target as HTMLInputElement;
  file.value = target.files ? Array.from(target.files) : [];
}

export const upload = () => {
  if (file.value.length === 0) return;

  const formData = new FormData();
  file.value.forEach(f => formData.append('file', f));

  fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json())
  .then(data => {
    alert(`File uploaded successfully: ${data.message}`);
    console.log(data);
    file.value = []; // Clear the file array
    if (fileInput.value) {
      fileInput.value.value = ''; // Clear the input
    }
  })
  .catch(err => {
    console.error('Upload failed:', err);
    alert('File upload failed. Please try again.');
  });
}

export { file, fileInput };
