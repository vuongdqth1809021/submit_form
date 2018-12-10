document.getElementById('Save').onclick = function () {
    var token = localStorage.getItem('token-key');
    if (token == null || token.length == 0) {
        location.href = 'login-form.html';
    }
    if (doValidate()) {
        saveSong();
    }
};

function saveSong() {
    var name = document.forms['song-form']['song'].value;
    var thumbnail = document.forms['song-form']['thumbnail'].value;
    var singer = document.forms['song-form']['singer'].value;
    var link = document.forms['song-form']['link'].value;
    var author = document.forms['song-form']['author'].value;
    var song = {
        thumbnail: thumbnail,
        name: name,
        singer: singer,
        link: link,
        author: author,
    };
    var sendData = JSON.stringify(song);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('Save success');
            document.forms['song-form'].reset();
        } else {

        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-001.appspot.com/_api/v2/songs/post-free', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization','Basic'+localStorage.getItem('token-key'));
    xhr.send(sendData);
}


function doValidate() {
    var isValid;
    var isValidSong = true;
    var isValidThumbnail = true;
    var isValidSinger = true;
    var isValidLink = true;
    var isValidAuthor = true;
    var pwdSong = document.forms['song-form']['song'];
    var msgSong = pwdSong.nextElementSibling;
    if (pwdSong == null || pwdSong.value.length == 0) {
        msgSong.classList.remove('msg-success');
        msgSong.classList.add('msg-error');
        msgSong.innerHTML = 'please write the name';
        isValidSong = false;
    } else {
        msgSong.classList.remove('msg-error');
        msgSong.classList.add('msg-success');
        msgSong.innerHTML = 'Ok!';
    }
    var pwdThumbnail = document.forms['song-form']['thumbnail'];
    var msgThumbnail = pwdThumbnail.nextElementSibling;
    if (pwdThumbnail == null || pwdThumbnail.value.length == 0) {
        msgThumbnail.classList.remove('msg-success');
        msgThumbnail.classList.add('msg-error');
        msgThumbnail.innerHTML = 'Please insert thumbnail';
        isValidThumbnail = false;
    } else {
        msgThumbnail.classList.remove('msg-error');
        msgThumbnail.classList.add('msg-success');
        msgThumbnail.innerHTML = 'Ok!';
    }
    var pwdSinger = document.forms['song-form']['singer']
    var msgSinger = pwdSinger.nextElementSibling;
    if (pwdSinger == null || pwdSinger.value.length == 0) {
        msgSinger.classList.remove('msg-success');
        msgSinger.classList.add('msg-error');
        msgSinger.innerHTML = 'Null';
        isValidSinger = false;
    } else {
        msgSinger.classList.remove('msg-error');
        msgSinger.classList.add('msg-success');
        msgSinger.innerHTML = 'Ok!';
    }
    var pwdAuthor = document.forms['song-form']['author'];
    var msgAuthor = pwdAuthor.nextElementSibling;
    if (pwdSong == null || pwdAuthor.value.length == 0) {
        msgAuthor.classList.remove('msg-success');
        msgAuthor.classList.add('msg-error');
        msgAuthor.innerHTML = 'Null';
        isValidAuthor = false;
    } else {
        msgAuthor.classList.remove('msg-error');
        msgAuthor.classList.add('msg-success');
        msgAuthor.innerHTML = 'Ok!';
    }
    var pwdLink = document.forms['song-form']['link'];
    var msgLink = pwdLink.nextElementSibling;
    if (pwdSong == null || pwdLink.value.length == 0) {
        msgLink.classList.remove('msg-success');
        msgLink.classList.add('msg-error');
        msgLink.innerHTML = 'Please insert link!';
        isValidLink = false;
    } else {
        msgLink.classList.remove('msg-error');
        msgLink.classList.add('msg-success');
        msgLink.innerHTML = 'Ok!';
    }
    isValid = isValidLink && isValidAuthor && isValidThumbnail && isValidSong && isValidSinger;
    return isValid;

}