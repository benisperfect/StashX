import { ref } from 'vue';

const file = ref<File | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

export const fileHandle = (event: Event) => {
  const target = event.target as HTMLInputElement;
  file.value = target.files?.[0] || null;
}

export const upload = () => {
  if (!file.value) return;

  const formData = new FormData();
  formData.append('file', file.value);

  fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json())
  .then(data => {
    alert(`File uploaded successfully: ${data.message}`);
    console.log(data);
    file.value = null;
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
