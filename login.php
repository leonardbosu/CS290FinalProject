<?php

//capture form data
$user = $_POST['user'];
$pass = $_POST['pass'];




//open db connection
$mysqli = new mysqli("oniddb.cws.oregonstate.edu","leonardb-db","rYW5PXXTrTvbnJGI", "leonardb-db");

if(!$mysqli || $mysqli->connect_errno)
{
	echo "Connection error" . $mysqli->connect_errno . " " . $mysqli->connect_error;
}

// sql query for username
if (!($stmt = $mysqli->prepare("SELECT userName, password FROM accounts WHERE userName = ?")))
{
	echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$stmt->bind_param("s", $user))
{
	echo "Binding parameters failed: (" . $stmt-errno . ") " . $stmt->error;
}

if (!$stmt->execute())
{
	echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
}

$outName = null;
$outPass = null;

if (!$stmt->bind_result($outName, $outPass)) 
{
    echo "Binding output parameters failed: (" . $stmt->errno . ") " . $stmt->error;
}

$stmt->fetch();
$stmt->close();

//userName not found in db
if($outName == null)
{
	echo 0;
}

//password doesn't match
else if($outPass != $pass)
{
	echo 1;
}

//serName found and password match
else if ($user == $outName && $pass == $outPass)
{
	echo 2;
}

//unknown error
else
{
	echo 3;
}

?>