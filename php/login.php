<?php
    // $username = !isset($_GET['username']) ? "" : $_GET['username'];
    // $pwd = !isset($_GET['pwd']) ? "" : $_GET['pwd'];
    // //连接数据库。用户名和密码进行查询 => waiting 。。。。
    // //参数获取 => POST
    // $username = !isset($_POST['username']) ? "" : $_POST['username'];
    // $pwd = !isset($_POST['pwd']) ? "" : $_POST['pwd'];

    // // echo $username;
    // if($username == 'lemon' && $pwd == '123456'|| $username == 'aa' && $pwd == 'aa'){
    //     echo "{status:true}";
    // } else {
    //     echo "{status: false, code:0, message: '用户名或密码不正确'}";
    // }
    require("connect.php");
    $userNum=isset($_GET['userNum'])? $_GET['userNum']:null;
    $password=isset($_GET['password'])? $_GET['password']:null;
    $sql="SELECT * FROM `user` WHERE phone='$userNum' and password='$password'";
    $res=$conn -> query($sql);
    $row = $res->fetch_assoc();
    if($res->num_rows > 0){
        echo "success";
    }else{
        echo "fail";
    }
   
?>