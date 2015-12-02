<?php
require_once "Mail.php";

$from = '<ozonethegame@gmail.com>';
$to = '<###################@gmail.com>';
$subject = 'Hi!';
$body = "¿Te ha resultado interesante la visita?-- ".$_GET["res1"]." \n
		¿Te ha resultado amena?-- ".$_GET["res2"]."\n
		¿La duración ha sido adecuada? -- ".$_GET["res3"]." \n
		¿Los guías se han expresado con claridad?-- ".$_GET["res4"]."\n
		¿Recomendarías esta visita a vuestros huéspedes o amigos?--  ".$_GET["res5"]."\n";

$headers = array(
    'From' => $from,
    'To' => $to,
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 'ozonethegame@gmail.com',
        'password' => '###########################'
    ));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}
?>