<?php
function injectData($file, $data, $position) {
	$fpFile = fopen($file, "rw+");
    $fpTemp = fopen('php://temp', "rw+");
    stream_copy_to_stream($fpFile, $fpTemp, -1, $position);
    fseek($fpFile, $position);
    fwrite($fpFile, $data);
    rewind($fpTemp);
    stream_copy_to_stream($fpTemp, $fpFile);

    fclose($fpFile);
    fclose($fpTemp);
}

$file = fopen("betaUsers.TXT","r");
$email = $_GET['email'];
$ip = $_GET['ip'];
$pos=0;

while(! feof($file))
  {
  $line=fgets($file);
  $pos+=strlen($line);  
  if (strlen($line)==19)
     {
	echo $line;
	fclose($file);
	$string = "-".$email."@".$ip;
	injectData("betaUsers.TXT", $string, ($pos-2));
	break;
     }
  }
?>