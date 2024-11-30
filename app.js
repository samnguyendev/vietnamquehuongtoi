let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let slide = document.querySelector('.slide');
let items = document.querySelectorAll('.item');

next.addEventListener('click', function () {
    slide.appendChild(items[0]); // Di chuyển phần tử đầu tiên vào cuối
    updateSlidePosition();
});

prev.addEventListener('click', function () {
    slide.prepend(items[items.length - 1]); // Di chuyển phần tử cuối cùng vào đầu
    updateSlidePosition();
});

function updateSlidePosition() {
    items = document.querySelectorAll('.item'); // Cập nhật lại mảng items sau mỗi lần thay đổi
    items.forEach((item, index) => {
        item.style.left = `${(index - 2) * 220}px`; // Cập nhật lại vị trí của từng phần tử
        item.style.opacity = index < 6 ? 1 : 0; // Ẩn phần tử ngoài 5 phần tử đầu tiên
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const seeMoreButtons = document.querySelectorAll('.see-more');
    const videoModal = document.getElementById('video-modal');
    const youtubeVideo = document.getElementById('youtube-video');
    const closeVideoButton = document.getElementById('close-video');
    const youtubeURL = "https://www.youtube.com/embed/9nYDcx31DlU"; 

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            videoModal.style.display = 'flex';
            youtubeVideo.src = youtubeURL + "?autoplay=1";
        });
    });

    closeVideoButton.addEventListener('click', function () {
        videoModal.style.display = 'none';
        youtubeVideo.src = "";
    });

    window.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
            youtubeVideo.src = "";
        }
    });
});
