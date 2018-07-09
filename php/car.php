<?php
require('connect.php');
$img=isset($_GET['img'])?  $_GET['img'] : null;
$id=isset($_GET['id'])?  $_GET['id'] : null;
$title=isset($_GET['title'])? $_GET['title']  : null;
$price=isset($_GET['price'])?  $_GET['price'] : null;
$qty= isset($_GET['qty'])? $_GET['qty'] : null;
$sql="SELECT * FROM `car` WHERE id='$id'";
$res=$conn->query($sql);
$row=$res->fetch_all(MYSQLI_ASSOC);
// var_dump($row);
if($row){
    $sql="UPDATE `car` SET `qty`=qty+$qty WHERE id='$id'";
    $conn->query($sql);
}else{
    $sql="INSERT INTO `car`(`id`, `price`, `title`, `img`, `qty`) VALUES ('$id','$price','$title','$img','$qty')";
    $conn->query($sql);
    echo $sql;
}
//关闭数据库以防浪费资源
$conn ->close();
?>