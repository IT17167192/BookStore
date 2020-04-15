<?php

// CONNECT TO THE SERVER
include 'connection/connection.php';

// SERVER QUERY
$query = "SELECT * FROM books";
$result = mysqli_query($db, $query);


if ( $result ) {
  
  $data = array();
  while( $row = mysqli_fetch_assoc($result) ) {
    $data[] = $row;
  }
  echo json_encode($data);
}


?>