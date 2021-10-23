document.getElementsByClassName('result')[0].style.display = "none";

//Night Mode
const sun = document.querySelector(".sun");
const body = document.querySelector("body");
sun.onclick = function()
{
    body.classList.toggle("dark");
}

//Drive Car
var player = [];
var score = [0, 0, 0];
function start()
{
    player[0] = player[1] = player[2] = setInterval(anim,0);
    function anim()
    {
        if(score[0]>1200 || score[1]>1200 || score[2]>1200)
        {
           
            //
            var top1 = document.getElementById('top1');
            var top2 = document.getElementById('top2');
            var top3 = document.getElementById('top3');
            //
            var car_img = ['img/car-1.png', 'img/car-2.png', 'img/car-3.png']
            // Short Rank To Find Top Player
            var temp = 0;
            var img = '';
            for (var i = 0; i < score.length - 1; i++) {
            for (var j = i + 1; j < score.length; j++) {
                if (score[i] < score[j]) {
                        temp = score[j];
                        score[j] = score[i];
                        score[i] = temp;
                        //img
                        img = car_img[j];
                        car_img[j] = car_img[i];
                        car_img[i] = img;
                    }
                }
            }
            //
            var result1 = '<td>#1</td> <td><img src="' + car_img[0] + '"></td> <td>' + score[0] + '</td>';
            var result2 = '<td>#2</td> <td><img src="' + car_img[1] + '"></td> <td>' + score[1] + '</td>';
            var result3 = '<td>#3</td> <td><img src="' + car_img[2] + '"></td> <td>' + score[2] + '</td>';
            //
            top1.innerHTML = result1;
            top2.innerHTML = result2;
            top3.innerHTML = result3;
            //
            document.getElementsByClassName('result')[0].style.display = "block";
            //
            clearInterval(player[0]);
            clearInterval(player[1]);
            clearInterval(player[2]);
        }
        else
        {
            //
            score[0]+=(Math.floor(Math.random()*1.2));
            document.getElementById("player-1").style.left = score[0]+'px';
            //
            score[1]+=(Math.floor(Math.random()*1.2));
            document.getElementById("player-2").style.left = score[1]+'px';
            //
            score[2]+=(Math.floor(Math.random()*1.2));
            document.getElementById("player-3").style.left = score[2]+'px';
        }
    }    
}