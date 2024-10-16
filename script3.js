document.addEventListener('DOMContentLoaded', () => {
    // 使用fetch从JSON文件加载数据
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const selfPortrait = data.selfPortrait;

            // 填充数据到HTML
            document.getElementById('artist').textContent = selfPortrait.artist;
            document.getElementById('listeningHours').textContent = selfPortrait.listeningHours + " hours";
            document.getElementById('mostPlayedSong').textContent = selfPortrait.mostPlayedSong;
            document.getElementById('playCount').textContent = selfPortrait.playCount;
            document.getElementById('isFavorite').textContent = selfPortrait.isFavoriteArtist ? "Yes" : "No";

            // 填充Techno Tracks列表
            const technoTracksList = document.getElementById('technoTracks');
            selfPortrait.technoTracks.forEach(track => {
                const li = document.createElement('li');
                li.textContent = `${track.name} (Energy Level: ${track.energyLevel}, Play Count: ${track.playCount})`;
                technoTracksList.appendChild(li);
            });

            // 填充Listening Habits
            document.getElementById('dayMood').textContent = selfPortrait.listeningHabits.day.mood;
            document.getElementById('nightMood').textContent = selfPortrait.listeningHabits.night.mood;

            // 填充概念和描述
            document.getElementById('concept').textContent = selfPortrait.summary.concept;
            document.getElementById('description').textContent = selfPortrait.summary.description;

            // 切换最爱艺术家状态
            const toggleBtn = document.getElementById('toggleFavorite');
            toggleBtn.addEventListener('click', () => {
                selfPortrait.toggleFavoriteArtist();
                document.getElementById('isFavorite').textContent = selfPortrait.isFavoriteArtist ? "Yes" : "No";
            });
        })
        .catch(error => {
            console.error("Error loading JSON data:", error);
        });
});
