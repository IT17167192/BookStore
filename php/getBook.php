<?php

// CONNECT TO THE SERVER
include 'connection/connection.php';

$postdata = file_get_contents("php://input");
$data = json_decode($postdata);

$Id = $data->bookID;

$query = "SELECT * FROM `books` WHERE id = '$Id'";
$result = mysqli_query($db, $query);

if ( $result ) {
 
  $row = mysqli_fetch_assoc($result);
  echo json_encode($row);
}



?>