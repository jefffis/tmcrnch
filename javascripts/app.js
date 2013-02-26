if (Modernizr.localstorage) {
	
	$(function(){

	});

	var form = $('#form');

	var email_1 = $('#email_1');
	var email_1_clear = email_1.next('span');

	var email_2 = $('#email_2');
	var email_2_clear = email_2.next('span');

	var email_3 = $('#email_3');
	var email_3_clear = email_3.next('span');

	var message_type = $('input[name=message_type]');
	var message_template = $('input[name=message_template]');

	var submit = $('#submit');

	email_1.on('change',function(){
		localStorage.setItem('email_1',email_1.val());
		submit.prop('disabled',false);
		if(email_1.val()==''){
			email_1_clear.css('display','none');
		}else{
			email_1_clear.css('display','block');	
		}
	});

	email_1_clear.on('click',function(){
		localStorage.setItem('email_1','');
		email_1.val('');
		email_1_clear.css('display','none');
	});
	email_1.val(localStorage.getItem('email_1'));
	
	email_2.on('change',function(){
		localStorage.setItem('email_2',email_2.val());
		submit.prop('disabled',false);
		email_2_clear.css('display','block');
	});
	email_2_clear.on('click',function(){
		localStorage.setItem('email_2','');
		email_2.val('');
		email_2_clear.css('display','none');
	});
	email_2.val(localStorage.getItem('email_2'));

	email_3.on('change',function(){
		localStorage.setItem('email_3',email_3.val());
		submit.prop('disabled',false);
		email_3_clear.css('display','block');
	});
	email_3_clear.on('click',function(){
		localStorage.setItem('email_3','');
		email_3.val('');
		email_3_clear.css('display','none');
	});
	email_3.val(localStorage.getItem('email_3'));

	if((email_1.val()=='') && (email_2.val()=='') && (email_3.val()=='')){
		submit.prop('disabled',true);
	}

	form.on('submit',function(){
	
		if((message_type.filter(':checked').length==0)){
			return false;
		}else{
			
			$.ajax({ // create an AJAX call...
		        data: $(this).serialize(), // get the form data
		        type: $(this).attr('method'), // GET or POST
		        url: $(this).attr('action'), // the file to call
		        success: function(response) { // on success..
		            alert('funky'); // update the DIV
		        }
		    });
		    return false;

		}
	});

} else {
	alert('Sorry, get a better browser pal.');
}