<?php

// CONNECT TO THE SERVER
include 'connection/connection.php';

$postdata = file_get_contents("php://input");
$data = json_decode($postdata);

$title = $data->title;
$author = $data->author;
$price = $data->price;
$image = $data->image;
$description = $data->description;
$uploaded = $data->uploaded;

$query = "INSERT INTO books (title, author, price, image, description, uploaded) VALUES ('{$title}', '{$author}', '{$price}', '{$image}', '{$description}', '{$uploaded}')";
$result = mysqli_query($db, $query);

if ( $result ) {
  $last_id = mysqli_insert_id($db);
  echo $last_id ;
}

?>