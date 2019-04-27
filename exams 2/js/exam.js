
// section 1 add and remove
$(document).ready(function(){
var ulList = $('#addText');
$('#add').click(function(e){
    var addNew =$('#addNew').val();
    var text = $('<li class="forms-control mt-4">'+addNew+'<button class="btn btn-danger ml-5 delete">X</button></li>')
    text.appendTo(ulList);
    $('#addNew').val('');

    $('.delete').click(function(){
        $(this).parents('li').remove();
    })
})
})
// end section


    $(document).ready(function(){

    
    $('#hustlin').mouseover(function(){
        $('.layout').css({animationPlayState:'running'})
    });
    $('#hustlin').mouseleave(function(){
        $('.layout').css({animationPlayState:'paused'})
    });
    var music = new Audio();
    music.src = 'Audio/eminem.mp3';
    $('.music').mouseover(function(){
        music.play();
    });
    $('.music').mouseleave(function(){
        music.pause();
    });
    

})


function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

    setInterval(function() { makeTimer(); }, 1000);
    

 $(document).ready(function(){
     $('#rgbThree').mouseover(function(){
         $('#rgbThree').css({color:'#000'});
         $('.section-four').css({backgroundColor:'#f02222'});
     });
     $('#rgbThree').mouseleave(function(){
        $('#rgbThree').css({color:'#f02222'});
        $('.section-four').css({backgroundColor:'#fff'});
    });
    $('#rgbOne').mouseover(function(){
        $('#rgbOne').css({color:'#000'});
        $('.section-four').css({backgroundColor:'#22f033'});
    });
    $('#rgbOne').mouseleave(function(){
       $('#rgbOne').css({color:'#22f033'});
       $('.section-four').css({backgroundColor:'#fff'});
   });
   $('#rgbTwo').mouseover(function(){
    $('#rgbTwo').css({color:'#000'});
    $('.section-four').css({backgroundColor:'#09c'});
});
$('#rgbTwo').mouseleave(function(){
   $('#rgbTwo').css({color:'#09c'});
   $('.section-four').css({backgroundColor:'#fff'});
});
 })   