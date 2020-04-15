<?php

// CONNECT TO THE SERVER
include 'connection/connection.php';

$postdata = file_get_contents("php://input");
$data = json_decode($postdata);

$Id = $data->bookID;
$stars = $data->howManyStars;

$query = "UPDATE `books` SET `stars`= '{$stars}' WHERE id = '{$Id}'";
$result = mysqli_query($db, $query);

if ( $result ) {
 
  echo $result;
}

?>