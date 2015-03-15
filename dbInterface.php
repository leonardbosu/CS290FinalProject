<?php

if(isset($_POST['query']))
{
	$query = $_POST['query'];
}


//open db connection
$mysqli = new mysqli("oniddb.cws.oregonstate.edu","leonardb-db","rYW5PXXTrTvbnJGI", "leonardb-db");

if( $query == 'public' )
{

	if(!$mysqli || $mysqli->connect_errno)
	{
	  echo "Connection error" . $mysqli->connect_errno . " " . $mysqli->connect_error;
	}

	// sql query for recent
	if (!($stmt = $mysqli->prepare("SELECT * FROM hikeReports WHERE makePublic = ?")))
	{
	  echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
	}

	$tempQuery = 1;

	if (!$stmt->bind_param("i", $tempQuery))
	{
	  echo "Binding parameters failed: (" . $stmt-errno . ") " . $stmt->error;
	}

	if (!$stmt->execute())
	{
	  echo "1Execute failed: (" . $stmt->errno . ") " . $stmt->error;
	}

	$resultReportID = null;
	$resultUsername = null;
	$resultTrailName = null;
	$resultHikeDescription = null;
	$resultMakePublic = null;

	if (!$stmt->bind_result($resultReportID, $resultUsername, $resultTrailName, $resultHikeDescription, $resultMakePublic)) 
	{
	    echo "Binding output parameters failed: (" . $stmt->errno . ") " . $stmt->error;
	}

	$resultArray = array();

	while($stmt->fetch())
	{
	  $resultArray[] = array(
		  	'reportID' => $resultReportID, 
		  	'username' => $resultUsername, 
		  	'trailName' => $resultTrailName, 
		  	'hikeDescription' => $resultHikeDescription, 
		  	'makePublic' => $resultMakePublic);
	}

	echo json_encode($resultArray);
	$stmt->close();

}

else if( $query == 'user' )
{
	if (isset($_POST['user']))
	{
		if(!$mysqli || $mysqli->connect_errno)
		{
		  echo "Connection error" . $mysqli->connect_errno . " " . $mysqli->connect_error;
		}

		// sql query for recent
		if (!($stmt = $mysqli->prepare("SELECT * FROM hikeReports WHERE user = ?")))
		{
		  echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
		}

		$tempQuery = $_POST['user'];

		if (!$stmt->bind_param("s", $tempQuery))
		{
		  echo "Binding parameters failed: (" . $stmt-errno . ") " . $stmt->error;
		}

		if (!$stmt->execute())
		{
		  echo "1Execute failed: (" . $stmt->errno . ") " . $stmt->error;
		}

		$resultReportID = null;
		$resultUsername = null;
		$resultTrailName = null;
		$resultHikeDescription = null;
		$resultMakePublic = null;

		if (!$stmt->bind_result($resultReportID, $resultUsername, $resultTrailName, $resultHikeDescription, $resultMakePublic)) 
		{
		    echo "Binding output parameters failed: (" . $stmt->errno . ") " . $stmt->error;
		}

		$resultArray = array();

		while($stmt->fetch())
		{
		  $resultArray[] = array(
		  	'reportID' => $resultReportID, 
		  	'username' => $resultUsername, 
		  	'trailName' => $resultTrailName, 
		  	'hikeDescription' => $resultHikeDescription, 
		  	'makePublic' => $resultMakePublic);
		}

		echo json_encode($resultArray);
		$stmt->close();
	}
	else
	{
		echo 'Error: user not defined.';
	}
}

?>