<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'mkx';

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// API endpoint to fetch data from MySQL
function fetchData() {
    global $conn;

    $sql = "SELECT * FROM data";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
    } else {
        echo json_encode(array());
    }
}

// API endpoint to insert data into MySQL
function insertData($name, $age) {
    global $conn;

    $sql = "INSERT INTO data (name, age) VALUES ('$name', $age)";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('success' => false, 'error' => $conn->error));
    }
}

// Add more API endpoints for update and delete operations

// Check the requested API endpoint and call the corresponding function
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_GET['action'] === 'fetchData') {
        fetchData();
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['action'] === 'insertData') {
        $name = $_POST['name'];
        $age = $_POST['age'];
        insertData($name, $age);
    }
    elseif ($_POST['action'] === 'deleteData') {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $age = $_POST['age'];
        deleteData($id);
    }
}
?>
