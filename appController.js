var interval;
var count = 0;
var target = 125;

$(document).ready(function () {

    $("#myModal").on('shown.bs.modal', function () {
        interval = setInterval(progressTimer, 150);
    });

    function progressTimer() {
        if (count < 56) {
            count = count + 1;
            document.getElementById("value").innerHTML = '$' + count;
            var total = Math.round(((count) / 1.25)) + '%';
            document.getElementById("pgbar").style.width = total;
        } else {
            clearInterval(interval);
            document.getElementById("missing").innerHTML = '<span class="glyphicon glyphicon-info-sign" style="color:#3d2bc4;"></span> You need $69 more to reach your target.';
        }
    }

});

function stopInterval() {
    clearInterval(interval);
    count = 0;
    document.getElementById("value").innerHTML = '$' + count;
    document.getElementById("pgbar").style.width = '0%';
    document.getElementById("missing").innerHTML = '';
}

