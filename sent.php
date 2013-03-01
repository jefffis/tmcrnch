<?php

// Querystring Data
$email_1 = $_POST['email_1'];
$email_2 = $_POST['email_2'];
$email_3 = $_POST['email_3'];
$email_4 = $_POST['email_4'];
$message_type_nums = $_POST['message_type'];
$message_type_times = $_POST['message_time'];
//$message_template = $_POST['message_template'];

// message type
if($message_type_nums=='1'){
	$message_type_num = "I'm+stuck+in+traffic,+gonna+be+a+bit+late.";
	$message_type_subject = "Stuck+in+traffic";
}
else if($message_type_nums=='2'){
	$message_type_num = "I'm+stuck+on+the+subway,+gonna+be+a+bit+late.";
	$message_type_subject = "Stuck+on+the+subway";
}
else{
	$message_type_num = "I'm+running+late+at+an+appointment.";
	$message_type_subject = "Stuck+in+an+appointment";
}

// time
if($message_type_times){
	if($message_type_times=='1'){
		$message_type_time = "+Hopefully+no+more+than+5+minutes+or+so.";
	}
	else if($message_type_times=='2'){
		$message_type_time = "+Hopefully+no+more+than+15+minutes+or+so.";
	}
	else{
		$message_type_time = "+I+dunno+how+long+it+will+be;+arrggghh.";
	}
}

// TESTING
$email_1_t = 'iam@jefff.co';
$email_2_t = 'jeff@goodwurk.com';
$email_3_t = 'jeff@goodwurk.com';
$email_4_t = 'jdoan@nclud.com';
$message_type_t = 'I\'m+stuck+on+the+subway,+gonna+be+a+bit+late.';

// one email only
$url = 'https://sendgrid.com/api/mail.send.json?api_user=jefffis&api_key=X3saim&to=' . $email_1 . '&toname=' . $email_1 . '&subject=' . $message_type_subject . '&text=' . $message_type_num + $message_type_time . '&from=' . $email_4;

// two emails only
$url2 = 'https://sendgrid.com/api/mail.send.json?api_user=jefffis&api_key=X3saim&to=' . $email_1 . '&toname=' . $email_1 . '&to=' . $email_2 . '&toname=' . $email_2 . '&subject=' . $message_type_subject . '&text=' . $message_type_num + $message_type_time . '&from=' . $email_4;

// three emails
$url3 = 'https://sendgrid.com/api/mail.send.json?api_user=jefffis&api_key=X3saim&to=' . $email_1 . '&toname=' . $email_1 . '&to=' . $email_2 . '&toname=' . $email_2 . '&to=' . $email_3 . '&toname=' . $email_3 . '&subject=' . $message_type_subject . '&text=' . $message_type_num + $message_type_time . '&from=' . $email_4;

// TESTING $url = 'https://sendgrid.com/api/mail.send.json?api_user=jefffis&api_key=X3saim&to=' . $email_1_t . '&toname=' . $email_1_t . '&to=' . $email_2_t . '&toname=' . $email_2_t . '&to=' . $email_3_t . '&toname=' . $email_3_t . '&subject=' . $message_type_t . '&text=' . $message_type_t . '&from=' . $email_4_t;

// only 1 email address
if(($email_1!='')&&($email_2=='')&&($email_3=='')){
	//echo '1';
	$curl_connection = curl_init($url);
}

// 2 email address
if(($email_1!='')&&($email_2!='')&&($email_3=='')){
	//echo '2';
	$curl_connection = curl_init($url2);
}

// only 1 email address
if(($email_1!='')&&($email_2!='')&&($email_3!='')){
	//echo '3';
	$curl_connection = curl_init($url3);
}

// TESTING only 1 email address
/*if(($email_1_t!='')&&($email_2_t=='')&&($email_3_t=='')){
	echo '1';
	//$curl_connection = curl_init($url);
}

// 2 email address
if(($email_1_t!='')&&($email_2_t!='')&&($email_3_t=='')){
	echo '2';
	//$curl_connection = curl_init($url2);
}

// only 1 email address
if(($email_1_t!='')&&($email_2_t!='')&&($email_3_t!='')){
	echo '3';
	//$curl_connection = curl_init($url3);
}*/

$result = curl_exec($curl_connection);
//close the connection
curl_close($curl_connection);

?>