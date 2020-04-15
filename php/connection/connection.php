<?PHP

$db = new mysqli('localhost', 'root', '', 'bookstore');

if ($db -> connect_error) {
  die('Connection Error!!');
}
?>
