<?php
$dir = "/var/www/html/outset/screenshots/*.png";
//get the list of all files with .jpg extension in the directory and safe it in an array named $images
$images = glob( $dir );

//extract only the name of the file without the extension and save in an array named $find
foreach( $images as $image ):
    echo $image;
endforeach;
?>