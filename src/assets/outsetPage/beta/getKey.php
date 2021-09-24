<?php
$file = fopen("betaUsers.TXT","r");
$failed = True;
$ip=$_GET['ipVal'];
$default="No keys currently available.";

while(! feof($file))
  {
  $line=fgets($file);
  if (strpos($line,$ip)!== False){
    $default=substr($line,0,17);
    break;
  }
  else if (strlen($line)==19)
     {
     echo "ok";
     $failed=False;
     break;
     }
  }

fclose($file);
if ($failed)
{
	echo $default;
}
?>