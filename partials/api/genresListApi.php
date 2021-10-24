<?php 

require __DIR__ . '/../database.php';


header('Content-Type: application/json');
header('Acces-Control-Allow-origin: *');

$genresList = [];

foreach($database as $album) {
    if(!in_array($album['genre'], $genresList)){
        $genresList[] = $album['genre'];
    }
}

echo json_encode($genresList);

?>