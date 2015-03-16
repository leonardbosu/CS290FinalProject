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

     <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="content.php">TrailLogger - Final Project by Barry Leonard</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-inverted navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                  </ul>
              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
      </nav>

      <div class="row">
      	<!--LEFT COLUMN-->
      	<div class="col-md-6 col-md-offset-1">

      		<h2> Enter registration info below </h2><br><br>

          <h4> <p> All fields are required.
            <p> Usernames can contain letters, numbers, and underscores only. 3-20 characters only.
              <p> Passwords can contain specials characters. 6-20 characters only. 

      		<h3><div id="welcomeText"></div></h3>

      		<!--debug: <div id="debug"></div>-->

          <div id="regForm">

          <form class="form-horizontal">
            <div class="col-md-3 col-md-offset-1">

              <strong>First Name: </strong>
              <input type="text" id="userFirstNameReg"><br>

              <strong>Last Name: </strong>
              <input type="text" id="userLastNameReg"><br>

              <strong>username: </strong>
              <input type="text" id="userNameReg"><br>

              <strong>password: </strong>
              <input type="password" id="userPassReg"><br>

              <button type="button" onclick="regInfoValidate();" >Submit</button>

            </div>
          </form>

        </div>

      	</div>

      	<!--RIGHT COLUMN-->
      	
          <div class="col-md-3 col-md-offset-1">

          <form role="form">
            <div class="form-group">
              <label for="userName">UserName:</label>
              <input type="text" class="form-control" id="userName" placeholder="Enter username">
            </div>

            <div class="form-group">
              <label for="userPass">Password:</label>
              <input type="password" class="form-control" id="userPass" placeholder="Enter password">
            </div>

            <button type="button" class="btn btn-default" onclick="loginInfoValidate();" >Submit</button>
            
          </form>

        </div>

      </div>


    <!-- leonardb login/register scripts -->

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