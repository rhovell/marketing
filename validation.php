<?php $name = $_POST['name'];
$email = $_POST['email'];
$query = $_POST['query'];
$formcontent="From: $name \n Query: $query";
$recipient = "r.hovell@live.com";
$subject = "RED Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='contact.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
