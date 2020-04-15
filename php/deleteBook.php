<?php

// CONNECT TO THE SERVER
include 'connection/connection.php';

$postdata = file_get_contents("php://input");
$data = json_decode($postdata);

$Id = $data->bookID;

$query = "DELETE FROM `books` WHERE id = '{$Id}'";
$result = mysqli_query($db, $query);

if ( $result ) {
 
  echo $result; // 1 or 0
}

?>