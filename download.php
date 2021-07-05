<?php


 $file=__DIR__."/file/Resume_Of_Pradipta_Sarker.pdf";
 $force = true;

if ($force === true) {
	header('Content-Type: application/pdf');
	header('Content-Disposition: attachment; filename="' . basename($file) . '"');

} else {
	header('Content-Type: ' . mime_content_type($file));
}
header('Content-Length: ' . filesize($file));
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');
readfile($file);
exit;






