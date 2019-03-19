<?php
@$from = $_POST['email']; // this is the sender's Email address
@$last_name = $_POST['last_name'];
@$email = $_POST['email'];
@$telefoon = $_POST['telefoon'];
if(isset($_POST['submit'])){
$to = "info@mikelivis.be";
$subject = "Contact freelancer Mike Livis";

$message = '
<html>
<head>
<title>Contact freelancer Mike Livis</title>
</head>
<body>
<p> Naam:  '."$last_name".'<br> E-mail: '."$email" .'<br> Telefoonnummer: '."$telefoon" . "<br><br>" . $_POST['message'];'.</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>John</td>
<td>Doe</td>
</tr>
</table>
</body>
</html>
';

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <'."$from".'>'. "\r\n";

mail($to,$subject,$message,$headers);

echo "<div>
<p class='notification' style='color:#fffdfd; font-family: Arial;'>
E-mail verzonden! Dankjewel " . $last_name . ", We houden u zo snel mogelijk op de hoogte.</p></div>";
// You can also use header('Location: thank_you.php'); to redirect to another page.
}
?>
