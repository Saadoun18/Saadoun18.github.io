/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const showButton = document.getElementById('previewBtn');
const closeButton = document.getElementById('closePreviewBtn');
    const iframeWrapper = document.getElementById('iframeWrapper');

// When "Show Iframe" is clicked, change display to block
showButton.addEventListener('click', function() {
    iframeWrapper.style.display = 'block';
});

// When "X" is clicked, change display back to none
closeButton.addEventListener('click', function() {
    iframeWrapper.style.display = 'none';
});