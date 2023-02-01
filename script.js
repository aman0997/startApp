const colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(function(colorOption) {
    colorOption.addEventListener('click', function() {
        const selectedColor = window.getComputedStyle(colorOption).backgroundColor;
        document.body.style.backgroundColor = selectedColor;
        const imgSrc = colorOption.getAttribute('data-img-src');
        document.querySelector('#example-img').src = imgSrc;
        document.querySelector('#uploaded-img').src = "";
    });
});
const fileInput = document.querySelector('#file-input');
fileInput.addEventListener('change', function() {
    const reader = new FileReader();
    reader.onload = function() {
        const uploadedImg = document.querySelector('#uploaded-img');
        uploadedImg.src = reader.result;
        uploadedImg.style.display = 'block';
    };
    reader.readAsDataURL(fileInput.files[0]);
});