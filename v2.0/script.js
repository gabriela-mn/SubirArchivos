const fileInput = document.getElementById('fileInput');

const fileInfo = document.getElementById('fileInfo');

const preview = document.getElementById('preview');


fileInput.addEventListener('change', function(event) {

  const selectedFile = event.target.files[0];


  fileInfo.innerHTML = `

    Nombre del archivo: ${selectedFile.name}<br>

    Tipo MIME: ${selectedFile.type}<br>

    Tamaño: ${selectedFile.size} bytes

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

});