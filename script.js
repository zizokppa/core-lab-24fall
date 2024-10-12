function hoverEffect(image, newSource) {
    image.src = newSource;
}

// 获取音频元素
const hoverSound = document.getElementById('hover-sound');

// 为视频添加悬停事件，播放预先录制的音频
document.querySelector('.invertible-video').addEventListener('mouseover', () => {
    hoverSound.play();  // 播放音频，但不重置时间
});

document.querySelector('.invertible-video').addEventListener('mouseout', () => {
    hoverSound.pause();  // 暂停音频，不重置播放时间
});

// 为GIF添加悬停事件，播放预先录制的音频
document.querySelector('.invertible-gif').addEventListener('mouseover', () => {
    hoverSound.play();  // 播放音频，但不重置时间
});

document.querySelector('.invertible-gif').addEventListener('mouseout', () => {
    hoverSound.pause();  // 暂停音频，不重置播放时间
});
