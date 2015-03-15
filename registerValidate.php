<?php

//capture form data
$user = $_POST['user'];
$pass = $_POST['pass'];
$first = $_POST['first'];
$last = $_POST['last'];




//open db connection
$mysqli = new mysqli("oniddb.cws.oregonstate.edu","leonardb-db","rYW5PXXTrTvbnJGI", "leonardb-db");

if(!$mysqli || $mysqli->connect_errno)
{
	echo "Connection error" . $mysqli->connect_errno . " " . $mysqli->connect_error;
}

// sql query for username
if (!($stmt = $mysqli->prepare("SELECT userName FROM accounts WHERE userName = ?")))
{
	echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$stmt->bind_param("s", 'bar'))
{
	echo "Binding parameters failed: (" . $stmt-errno . ") " . $stmt->error;
}

if (!$stmt->execute())
{
	echo "1Execute failed: (" . $stmt->errno . ") " . $stmt->error;
}

$outName = null;

if (!$stmt->bind_result($outName)) 
{
    echo "Binding output parameters failed: (" . $stmt->errno . ") " . $stmt->error;
}

$stmt->fetch();
$stmt->close();

//userName exists
if($outName != null)
{
	echo 0;
}

//userName does not exist; create account
else if($outName == null)
{
	$mysqli = new mysqli("oniddb.cws.oregonstate.edu","leonardb-db","rYW5PXXTrTvbnJGI", "leonardb-db");

		if(!$mysqli || $mysqli->connect_errno)
		{
			echo "Connection error" . $mysqli->connect_errno . " " . $mysqli->connect_error;
		}

		if (!($stmt = $mysqli->prepare("INSERT INTO accounts (userName, password, firstName, lastName) VALUES (?,?,?,?)")))
		{
			echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
		}

		if (!$stmt->bind_param("ssss", $user, $pass, $first, $last))
		{
			echo "Binding parameters failed: (" . $stmt-errno . ") " . $stmt->error;
		}

		if (!$stmt->execute())
		{
			echo "2Execute failed: (" . $stmt->errno . ") " . $stmt->error;
		}

		$stmt->close();

	echo 1;
}

//unknown error
else
{
	echo 2;
}

?>