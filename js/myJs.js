$(document).ready(function() {
    // process bar
    setTimeout(function() {
        audio.play();
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})
var audio = new Audio('../sound/start.mp3');
var audio1 = new Audio('../sound/ting.mp3');
var audio2 = new Audio('../sound/sound.mp3');
var audio3 = new Audio('../sound/yes.mp3');


function firstQuestion(){
    $('.content').hide();
    Swal.fire({
        title: 'Hé looo',
        text: 'Nhân dịp ngày đặc biệt nì, đây là 1 món quà nho nhỏ tặng cho vợ iu của anh, have fun nhaa 😄',
        imageUrl: '../img/baby.jpg',
        imageWidth: 300,
        imageHeight: 290,
        background: '#fff url("../img/bg2.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        audio1.play();
        audio.pause();
        audio2.play();
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {https://www.myinstants.com/instant/gaogamer12-meme-9050/?utm_source=copy&utm_medium=share
    var audio = new Audio('../sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('../sound/miss1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

function gift()
{
    $('.flip-box1').show(200);
    $('.flip-box2').show(200);
    $('.line3').show(500);
}
// show popup
$('.flip-box1').hide();
$('.flip-box2').hide();
$('.line3').hide();
$('#yes').click(function() {
    audio2.pause();
    var audio = new Audio('../sound/yay.mp3');//tick
    audio.play();
    audio3.play();
    gift();
    //$('.content').hide();
    Swal.fire({

        title: 'Awww đoán đúng rồi nè hahahaaa',
        // html: true,
        // html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy'>",
        //width: 900,
        padding: '3em',
        background: `url("../img/or.jpg")`,
        text: "Thường thì mọi người sẽ tặng em 1 món quà, nhưng mà anh là người tham lam, anh tặng 3 món luôn, mở từ từ thoi nha :))) Hình như 2 hộp quà đầu tiên nằm ở bên ngoài kìa, em quay lại xem thử..",
        backdrop: `
            rgba(0,0,123,0.4)
            url("../img/giphy2.gif")
            right top
            repeat    
          `,
        showCancelButton: true,
        cancelButtonText: "Quay lại",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Còn quà thứ 3 thì...'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Em yeu anhhhhh <3',
                confirmButtonColor: '#3085d6',
                confirmButtonColor: '#fe8a71',
                background: 'url("../img/or.jpg")',
                title: 'Món quà cuối là ...',
                text: "Bất ngờ lắm chớ giề :>> Làm lại cái này nhớ em mún chet lun :<< Bấm vào nút bên dưới để đi đến món quà cúi cùng nhó <3 À à còn nữa, chúc em sẽ thiệt nà hạnh fúc bên cạnh anh, anh yêu emmmm moaz moaz moazzzz ",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'https://studybeatsfm.netlify.app/';
                  }
            })
        }
    })
})
