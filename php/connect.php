<?php
	// 连接数据库
	$servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = 'goodlist';

	// 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

?>