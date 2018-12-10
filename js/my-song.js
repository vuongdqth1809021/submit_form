var btnMySong = document.forms['my-song']['btn-song'];
btnMySong.onclick = function () {
    mySong();
    // playSong();
};
// function playSong(link) {
// var audioPlayer = document.getElementById('audio')[0];
// audioPlayer.src = link;
// audioPlayer.play();
// }
function mySong() {
    var token = localStorage.getItem('token-key');
    if (token == null || token.length == 0) {
        location.href = 'login-form.html';
        alert("Vui lòng đăng nhập")
    }
    var xhr = new XMLHttpRequest();

    // // function playSong(link) {
    // var audioPlayer = document.getElementById('audio')[0];
    // audioPlayer.src = link;
    // audioPlayer.play();
    // // }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {

            // xhr.onreadystatechange = function () {
            alert('Nhấn Ok để xem những gì bạn đã chia sẻ');
            var arraySongs = JSON.parse(xhr.responseText);
            var htmlContent = '';
            for (var i = 0; i < arraySongs.length; i++) {
                var song = arraySongs[i];
                htmlContent += '<div class="song-item">';
                htmlContent += '<div class="song-index">' + (i + 1) + '</div>';
                htmlContent += '<div class="song-thumbnail">';
                htmlContent += '<img src="' + song.thumnail + '"alt="">';
                htmlContent += '</div>';
                htmlContent += '<div class="song-infor">';
                htmlContent += '<div class="song-name">' + song.name + '</div>';
                htmlContent += '<div class="song-singer">' + song.singer + '</div>';
                htmlContent += '</div>';
                //Style 1
                htmlContent += '<div class="song-control" onclick="playSong(\'' + song.link + '\')">Play</div>';
                //Style 2
                // htmlContent+=`<div class="song-control" onclick="playSong('${song.link}')">Play</div>`;
                htmlContent += '<div class="song-control"><a href="#">Detail</a></div>';
                htmlContent += '</div>';
            }
            document.getElementById('list-song').innerHTML += htmlContent;
        }
    }
    ;
    xhr.open('GET', 'https://2-dot-backup-server-001.appspot.com/_api/v2/songs/get-mine', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Basic ' + token);
    xhr.send();

}

// var btnMySong = document.forms['my-song']['btn-song'];
// btnMySong.onclick = function () {
//     mySong();
// };
