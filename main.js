var red_input_var 	= document.getElementById('red_input');
var green_input_var = document.getElementById('green_input');
var blue_input_var 	= document.getElementById('blue_input');
var form_var 		= document.querySelector  ('form');
var greyback_id_var = document.getElementById('greyback_id');
var inactive_id_var = document.getElementById('inactive_id');

form_var.addEventListener('submit',function(e){

	e.preventDefault();
	func_greback();
	func_inactive();
});

var func_greback = function(){

	var greyback_value = 0;

	greyback_value = (((red_input_var.value) *0.3) +  ((green_input_var.value)*0.59) + ((blue_input_var.value)*0.11));

	if(greyback_value >=127){

		greyback_value = greyback_value - 32;
	
	} else {

		greyback_value = greyback_value + 32;
	}

	greyback_value = greyback_value.toFixed(2);
	greyback_id_var.innerHTML = "Greyaback value(RGB) :" + greyback_value+' , '+greyback_value+' , '+greyback_value;
}

var func_inactive = function(){

	var inactive_value = 0;

	inactive_value = (((red_input_var.value) *0.3) +  ((green_input_var.value)*0.59) + ((blue_input_var.value)*0.11));

	if(inactive_value >=127){

		inactive_value = inactive_value - 50;
	
	} else {

		inactive_value = inactive_value + 50;
	}

	inactive_value = inactive_value.toFixed(2);
	inactive_id_var.innerHTML = " Inactive  value(RGB)  : " + inactive_value+' , '+inactive_value+' , '+inactive_value;
}
