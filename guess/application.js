$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	$("#submit").click(function(){
		var user_guess = $("input[name=guess]").val();
		if (user_guess == random_num){
			alert("You got it!");
		} else if() {
			
		} else {
			
		}
		$("input[name=guess]").val("").focus();
	})



	//create click event for clear button


});
