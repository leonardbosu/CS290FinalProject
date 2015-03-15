<?php
//html headers
echo 

'<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Intro</title>

    <!-- Bootstrap -->
  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

    </head>';

?>

<?php
//navbar html
echo 
  '<body>

     <nav class="navbar navbar-default">
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Final Project by Barry Leonard</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-inverted navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                   <li class="dropdown">
                     <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Go To<span class="caret"></span></a>
                   <ul class="dropdown-menu" role="menu">
                       <li><a href="index.html">Intro</a></li>
                    </ul>
                  </li>
                </ul>
              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
      </nav>'

      ?>
<?php

//open db connection
$mysqli = new mysqli("oniddb.cws.oregonstate.edu","leonardb-db","rYW5PXXTrTvbnJGI", "leonardb-db");

if(!$mysqli || $mysqli->connect_errno)
{
  echo "Connection error" . $mysqli->connect_errno . " " . $mysqli->connect_error;
}

// sql query for username
if (!($stmt = $mysqli->prepare("SELECT * FROM hikeReports WHERE username = ?")))
{
  echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

$tempUser = 'bar';

if (!$stmt->bind_param("s", $tempUser))
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

echo '<table border="1">
    <tr><th> ReportID <th> username <th> trailName <th> hikeDescription <th> makePublic <th> Delete';

while($stmt->fetch())
{
  
  echo '<tr><td>' . $resultReportID . '<td>' . $resultUsername . '<td>'
  . $resultTrailName . '<td>' . $resultHikeDescription . '<td>' . $resultMakePublic;
}

echo '</table>';
$stmt->close();

?>


<?php 
echo 
      ' <div class="row">
      	<!--LEFT COLUMN-->
      	<div class="col-md-6 col-md-offset-1">

      		<h1> Here is your content</h1><br><br>

      		<div id="welcomeText">Please login to continue</div><br>

      		debug: <div id="debug"></div>

      	</div>

      	<!--RIGHT COLUMN-->
      	<div class="col-md-4 col-md-offset-1">

      		Welcome user!

      		<button id="logout" onclick="logout();" > logout </button>


      	</div>

      </div>'

      ?>


<?php 
//javascript links and page closing tags
echo 
   '<!-- leonardb login scripts -->

    <script src="login.js"></script>     

    <!-- jQuery (necessary for Bootstraps JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
 
    <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">



	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
  </body>
</html>'
?>
