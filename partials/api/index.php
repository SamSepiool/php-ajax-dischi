<?php  

// $genre = $_GET['genre'];
// $authors = $_GET['authors'];




require __DIR__ . '/../database.php';


header('Content-Type: application/json');
header('Acces-Control-Allow-origin: *');

// echo json_encode($database);

// FILTER BY GENRE
if(!empty($_GET['queryValue'])){
    $genre = $_GET['queryValue'];
    $databaseFiltered=[];

    foreach($database as $album) {
        if($album['genre'] == $genre){
            $databaseFiltered[]=$album;
        }
    }
    echo json_encode($databaseFiltered);

} else {
    echo json_encode($database);

}

?>