$(document).ready(function(){
	console.log('Jquery is loaded.');

	setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var milli = time.getMilliseconds();

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#milli').text(milli);

		if (min % 2 == 0){
			$("#min").css('color', 'green');
		} else {
			$("#min").css('color', 'white');
		};

		if (min % 5 == 0 && sec == 0 && milli < 50){
				var array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
				var a = array[Math.floor(Math.random() * array.length)]
				var b = array[Math.floor(Math.random() * array.length)]
				var c = array[Math.floor(Math.random() * array.length)]
				var d = array[Math.floor(Math.random() * array.length)]
				var e = array[Math.floor(Math.random() * array.length)]
				var f = array[Math.floor(Math.random() * array.length)]
				var random = "#"+a+b+c+d+e+f
				$("body").css('background-color', random)
		};

		if (min == 0 && sec == 0 && milli < 50){
				var array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
				var a = array[Math.floor(Math.random() * array.length)]
				var b = array[Math.floor(Math.random() * array.length)]
				var c = array[Math.floor(Math.random() * array.length)]
				var d = array[Math.floor(Math.random() * array.length)]
				var e = array[Math.floor(Math.random() * array.length)]
				var f = array[Math.floor(Math.random() * array.length)]
				var random = "#"+a+b+c+d+e+f
				$('h1').css('color', random);
		};

	}, 1);

});