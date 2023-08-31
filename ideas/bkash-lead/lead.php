<?php 

	if($_FILES["image"]){
	$tmp_name = $_FILES["image"]["tmp_name"];

	$strtotime = strtotime("now");
	$filename = "images/".$strtotime.'_'.$_FILES['image']['name'];

	move_uploaded_file($tmp_name,$filename);

	die("yes");
}else{
	die("No");
}
?>