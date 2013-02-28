var html = $('html');
var form = $('#form');

var email_1 = $('#email_1');
var email_1_clear = email_1.next('span');

var email_2 = $('#email_2');
var email_2_clear = email_2.next('span');

var email_3 = $('#email_3');
var email_3_clear = email_3.next('span');

var message_type = $('input[name=message_type]');
var message_template = $('input[name=message_template]');

var sam_message_type = message_type.next('span');

var submit = $('#submit');

if (Modernizr.localstorage) {
	//
} else {
	html.addClass('no-loc');
}

$(function(){

	// email 1
	email_1.on('change',function(){
		localStorage.setItem('email_1',email_1.val());
		submit.prop('disabled',false);
		//email_1_clear.css('display','block');
	});
	email_1.on('blur',function(){
		if(email_1.val()==''){
			$(this).addClass('bad').removeClass('good');
		}else if(validateEmail(email_1.val())){
			$(this).removeClass('bad').addClass('good');
			$(this).parent().addClass('good');
			$('.errored.first').removeClass('show');
		}else{
			$(this).addClass('bad');
			$(this).parent().removeClass('good');
		}
	});
	email_1_clear.on('click',function(){
		localStorage.setItem('email_1','');
		email_1.val('');
		email_1_clear.css('display','none');
	});
	email_1.val(localStorage.getItem('email_1'));
	
	// email 2
	email_2.on('change',function(){
		localStorage.setItem('email_2',email_2.val());
		submit.prop('disabled',false);
		//email_2_clear.css('display','block');
	});
	email_2.on('blur',function(){
		if(email_2.val()==''){
			$(this).removeClass('bad');
		}else if(validateEmail(email_2.val())){
			$(this).removeClass('bad').addClass('good');
			$(this).parent().addClass('good');
		}else{
			$(this).addClass('bad');
			$(this).parent().removeClass('good');
		}
	});
	email_2_clear.on('click',function(){
		localStorage.setItem('email_2','');
		email_2.val('');
		email_2_clear.css('display','none');
	});
	email_2.val(localStorage.getItem('email_2'));

	// email 3
	email_3.on('change',function(){
		localStorage.setItem('email_3',email_3.val());
		submit.prop('disabled',false);
		//email_3_clear.css('display','block');
	});
	email_3.on('blur',function(){
		if(email_3.val()==''){
			$(this).removeClass('bad');
		}else if(validateEmail(email_3.val())){
			$(this).removeClass('bad').addClass('good');
			$(this).parent().addClass('good');
		}else{
			$(this).addClass('bad');
			$(this).parent().removeClass('good');
		}
	});
	email_3_clear.on('click',function(){
		localStorage.setItem('email_3','');
		email_3.val('');
		email_3_clear.css('display','none');
	});
	email_3.val(localStorage.getItem('email_3'));

	if((email_1.val()=='') && (email_2.val()=='') && (email_3.val()=='')){
		//submit.prop('disabled',true);
	}

	message_type.on('change',function(){
		$('.errored.type').removeClass('show');
	});

	message_type.on('click',function(){
		sam_message_type.removeClass('checked');
		$(this).next('span').addClass('checked');
	});

	form.on('submit',function(){
		if((message_type.filter(':checked').length==0)||(email_1.hasClass('bad'))||(email_2.hasClass('bad'))||(email_3.hasClass('bad'))||(email_1.val()=='')){
			if(message_type.filter(':checked').length==0){
				$('.errored').addClass('show');
			}
			if(email_1.val()==''){
				email_1.addClass('bad');
				email_1.focus();
			}
			if(email_1.val()!=''){
				$('.errored.first').removeClass('show');
			}
			return false;
		}else{

			form.find('div').css('opacity',.5);
			$('.submitted').addClass('show');

			$.ajax({
		        data: $(this).serialize(),
		        type: $(this).attr('method'),
		        url: $(this).attr('action'),
		        success: function(response) {
		            //alert('funky');
					setTimeout(function(){
						form.find('div').css('opacity',1);
						$('.submitted').removeClass('show');
					}, 1000);
		        }
		        /*error: function(response) {
					form.find('div').css('opacity',1);
					$('.submitted').removeClass('show');
					alert('Errored.');
		        }*/
		    });
		    return false;
		}
	});
});

function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}



