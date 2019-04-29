<?php
$myfile = fopen("./doc/test.txt", "w") or die("Unable to open file!");
echo readfile("./doc/test.txt");
$txt = "Helloe\n";
fwrite($myfile, $txt);
$txt = "This is Gaurav\n";
fwrite($myfile, $txt);
//fclose($myfile);
?>