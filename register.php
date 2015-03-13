<!DOCTYPE html>
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

    </head>
  <body>

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
      </nav>

      <div class="row">
      	<!--LEFT COLUMN-->
      	<div class="col-md-6 col-md-offset-1">

      		<h1> Welcome to my site!</h1><br><br>

      		<div id="welcomeText">Please login to continue</div>

      		<div id="debug"></div>

          <div id="regForm">

          <h2> Enter registration info below </h2>

          <strong>First Name: </strong>
          <input type="text" id="userFirstNameReg">*<br>

          <strong>Last Name: </strong>
          <input type="text" id="userLastNameReg">*<br>

          <strong>username: </strong>
          <input type="text" id="userNameReg">*<br>

          <strong>password: </strong>
          <input type="text" id="userPassReg">*<br>

          <button type="button" onclick="infoValidate();" >Submit</button>

        </div>

      	</div>

      	<!--RIGHT COLUMN-->
      	<div class="col-md-4 col-md-offset-1">

      		<strong>username: </strong>
      		<input type="text" id="userName"><br>

      		<strong>password: </strong>
      		<input type="text" id="userPass"><br>

      		<button type="button" onclick="sendLoginInfo();" >Submit</button>

      		<!-- "sendLoginInfo(document.getElementsByName('userName').value, document.getElementsByName('userPass').value);" -->


      	</div>

      </div>


    <!-- leonardb login scripts -->

    <script src="login.js"></script>     

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
 
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">



<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
  </body>
</html>