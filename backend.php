<?php
header('Access-Control-Allow-Origin: http://localhost:8080');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

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

    $sql = "SELECT * FROM mkx.data ORDER BY dtm_create DESC";
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
function insertData($data) {
    global $conn;

    $currentDate = date('Y-m-d H:i:s');
    $sql = "INSERT INTO mkx.data (motor_current, open_pressure, switch_pressure, flow, command_id, pump_id, dtm_create)
            VALUES ({$data['motor_current']}, {$data['open_pressure']}, {$data['switch_pressure']}, {$data['flow']}, '{$data['command_id']}', '{$data['pump_id']}', '{$currentDate}')";

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
    if ($_POST['action'] === 'insertData' && isset($_POST["data"])) {
        insertData(json_decode($_POST["data"], true));
    }
    elseif ($_POST['action'] === 'deleteData') {
        $id = $_POST['id'];
        deleteData($id);
    }
}
?>
