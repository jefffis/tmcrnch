<?php

$email_1 = $_POST['email_1'];
$message_type = $_POST['message_type'];
$message_template = $_POST['message_template'];

// testing
/*$email_1 = 'iam@jefff.co';
$message_type = 'type1';
$message_template = 'template1';*/

$url = 'https://sendgrid.com/api/mail.send.json?api_user=jefffis&api_key=X3saim&to=' . $email_1 . '&toname=somename&subject=' . $message_type . '&text=' . $message_template . '&from=friends@timecrnch.io';

$curl_connection = curl_init($url);
$result = curl_exec($curl_connection);
//close the connection
curl_close($curl_connection);

?>