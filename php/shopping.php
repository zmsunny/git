<?php
    require('connect.php');
    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;
    $type = isset($_GET['type']) ? $_GET['type'] : null;
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $sql = "select * from car";
    $result = $conn->query($sql);
    $data = array();
    while($row = mysqli_fetch_array($result)){
        $data[]=$row;
    }
    echo json_encode($data);
    $conn->close();
?>