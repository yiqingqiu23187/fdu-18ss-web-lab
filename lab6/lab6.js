window.onload = function () {
    handlePicture();
    fadeIn();
    fadeOut();
    document.getElementById('figcaption').style.webkitTransitionDuration = '1s';
};

//点击图片的事件处理器
function handlePicture() {

    //得到大图片、小图片、文字dom
     var smallimages = document.getElementById('thumbnails').getElementsByTagName('img');
     var bigimage = document.getElementById('bigimage');
     var text = document.getElementById('figcaption');


    smallimages[0].onclick = function () {
        bigimage.src = "images/medium/5855774224.jpg";
        bigimage.title = "Battle";
        text.innerHTML = "Battle";

    };
    smallimages[1].onclick = function () {
        bigimage.src = "images/medium/5856697109.jpg";
        bigimage.title = "Luneburg";
        text.innerHTML = "Luneburg";
    };
    smallimages[2].onclick = function () {
        bigimage.src = "images/medium/6119130918.jpg";
        bigimage.title = "Bermuda";
        text.innerHTML = "Bermuda";
    };
    smallimages[3].onclick = function () {
        bigimage.src = "images/medium/8711645510.jpg";
        bigimage.title = "Athens";
        text.innerHTML = "Athens";
    };
    smallimages[4].onclick = function () {
        bigimage.src = "images/medium/9504449928.jpg";
        bigimage.title = "Florence";
        text.innerHTML = "Florence";
    }

};

//动画淡入
function fadeIn() {
    document.getElementById('bigimage').onmouseenter = function () {
        document.getElementById('figcaption').style.opacity = 0.8
    }
}

//动画淡出
function fadeOut() {
    document.getElementById('bigimage').onmouseout = function () {
        document.getElementById('figcaption').style.opacity = 0
    }
};