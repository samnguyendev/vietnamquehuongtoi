let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
document.addEventListener('DOMContentLoaded', () => {
    // Lấy tất cả các nút "See More"
    const seeMoreButtons = document.querySelectorAll('.see-more');

    // Lấy modal và iframe
    const videoModal = document.getElementById('video-modal');
    const youtubeVideo = document.getElementById('youtube-video');
    const closeVideoButton = document.getElementById('close-video');

    // URL của video YouTube
    const youtubeURL = "https://www.youtube.com/embed/T_wdCzRPxWk?si=C9S2L8kYs7E677CY"; 

    // Thêm sự kiện click cho mỗi nút "See More"
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            videoModal.style.display = 'flex'; // Hiển thị modal
            youtubeVideo.src = youtubeURL + "?autoplay=1"; // Phát video
        });
    });

    // Sự kiện đóng modal khi nhấn nút "Close"
    closeVideoButton.addEventListener('click', function () {
        videoModal.style.display = 'none';
        youtubeVideo.src = ""; // Dừng video
    });

    // Sự kiện đóng modal khi nhấn bên ngoài video
    window.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
            youtubeVideo.src = ""; // Dừng video
        }
    });
});
