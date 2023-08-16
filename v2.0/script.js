const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function(event) {
  const selectedFile = event.target.files[0];

  if (selectedFile) {
    if (isValidFileType(selectedFile) && isValidFileSize(selectedFile)) {
      fileInfo.innerHTML = `
        Nombre del archivo: ${selectedFile.name}<br>
        Tipo MIME: ${selectedFile.type}<br>
        Tamaño: ${formatFileSize(selectedFile.size)}
      `;

      if (selectedFile.type.startsWith('image/')) {
        preview.style.display = 'block';
        const reader = new FileReader();

        reader.onload = function(e) {
          preview.src = e.target.result;
        };

        reader.readAsDataURL(selectedFile);
      } else {
        preview.style.display = 'none';
      }
    } else {
      fileInfo.innerHTML = `Archivo no válido. Por favor, elige un archivo .jpg, .png o .gif que sea menor a 5 MB.`;
      preview.style.display = 'none';
    }
  }
});

function isValidFileType(file) {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  return allowedTypes.includes(file.type);
}

function isValidFileSize(file) {
  const maxSize = 5 * 1024 * 1024; // 5 MB
  return file.size <= maxSize;
}

function formatFileSize(size) {
  const units = ['bytes', 'KB', 'MB', 'GB'];
  let i = 0;
  while (size >= 1024 && i < units.length - 1) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(2)} ${units[i]}`;
}
