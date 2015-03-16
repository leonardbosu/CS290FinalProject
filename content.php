<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

//session handling

session_start();

if(session_status() == PHP_SESSION_ACTIVE)
{
  if (!isset($_SESSION['user']) && isset($_POST['user']))
      {
        $_SESSION['user'] = $_POST['user'];
      }
  else if (!isset($_SESSION['user']) && !isset($_POST['user']))
  {
    header('location:content.php?action=logout', true);
  }
}

if(isset($_GET['action']) && $_GET['action'] == 'logout')
{
  $_SESSION = array();
  session_destroy();
  header('Location:index.php', true);
  die();
}

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
  echo 
  ' <div class="row">
  	<!--LEFT COLUMN-->
  	<div class="col-md-6 col-md-offset-1">

  		<h1> Trail Reports</h1><br>

      <div class="btn-group" role="group" aria-label="...">
          <button type="button" class="btn btn-default" id="showReports1" onclick="getPublic();">Show Public Reports</button>
          <button type="button" class="btn btn-default" id="showReports2" onclick="getPrivate();">Show Personal Reports</button>
          <button type="button" class="btn btn-default" id="addReport" onclick="addReport();">Add Report</button>
      </div><br>

      <div id="padding">  </div><br>
  		<h3><div id="welcomeText">Choose an Option!</div></h3><br>

      <div id="resultTable"></div>

  		debug: <div id="debug"></div>


  	</div>

  	<!--RIGHT COLUMN-->
  	<div class="col-md-4 col-md-offset-1">';

      		
  if (isset($_SESSION['user']))
  {
    echo '<h4> Welcome <div id="myuser">' . $_SESSION['user'] . "</div>!</h4>";
  }
  else
  {
    echo "<h3>You are not logged in!</h3>";
  }

  echo 
    '<button id="logout" onclick="logout();" > logout </button>
      	</div>
      </div>';
?>


<?php 
//javascript links and page closing tags
echo 
   '<!-- leonardb login scripts -->

    <script src="login.js"></script>   
    <script src="dbInterface.js"></script>  
   
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
