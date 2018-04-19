console.log('javascript sourced');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is sourced');
    $.ajax({
        type: 'GET',
        url: '/monsters'
    })
    .then(function(monsters) {
        console.log(monsters);
        for(let i = 0; i < monsters.length; i++){
            $('#monstersList').append(`<li>${monsters[i]}</li>`);
        }
    })
}