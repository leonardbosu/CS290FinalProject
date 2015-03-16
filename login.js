//ajax request; sends login info via POST; receives validation code 0-3
function sendLoginInfo(user, pass)
{
	var userName = user;
	var userPass = pass;

	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4 && xhr.status == 200)
			{
				var xhrResponse =  xhr.responseText;

				if ( xhrResponse == 0)
				{
					var a = document.createElement('a');
					a.setAttribute('href', 'register.php');
					a.innerHTML = "HERE";
					document.getElementById('welcomeText').innerHTML = "The user name you have entered has not been registered. Please click ";
					document.getElementById('welcomeText').appendChild(a);
					document.getElementById('welcomeText').innerHTML += " to register a new account.";
				}

				else if ( xhrResponse == 1)
				{
					document.getElementById('welcomeText').innerHTML = "The password you entered is incorrect, try again or contact administrator for assistance.";
				}

				else if ( xhrResponse == 2)
				{
					/*var urlContent = "content.php";
					var urlPostContent = "?user=" + userName;
					window.location.replace(urlContent + urlPostContent);
					*/

					//from stackechange.com/19064352
					var redirect = function(url)
					{
						var form = document.createElement('form');
						form.method = 'POST';
						form.action = url;

						var input = document.createElement('input');
						input.name = 'user';
						input.value = userName; 

						form.appendChild(input);
						document.body.appendChild(form);

						form.submit();
					}

					redirect('content.php');
				}

				else if ( xhrResponse == 3)
				{
					document.getElementById('welcomeText').innerHTML = "Uknown error: please try again or contact administrator for assistance.";
				}

				else
				{
					document.getElementById('welcomeText').innerHTML = "An error has occured: " + xhrResponse;
				}

				//document.getElementById("debug").innerHTML = userName + xhrResponse;
			}
		}

	var url = "login.php"; 
	var urlPost = "user=" + userName + "&pass=" + userPass;
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(urlPost);
	
}

function sendRegInfo(first, last, user, pass)
{
	var userFirstNameReg = first;
	var userLastNameReg = last;
	var userNameReg = user;
	var userPassReg = pass;

	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4 && xhr.status == 200)
			{
				var xhrResponse =  xhr.responseText;

				//document.getElementById("debug").innerHTML = xhrResponse;

				if ( xhrResponse == 0) //userName already exists
				{
					document.getElementById('welcomeText').innerHTML = "The user name you have entered has been taken, please try again.";
				}

				else if ( xhrResponse == 1) //username available; account registered
				{
					

					var a = document.createElement('a');
					a.setAttribute('href', 'content.php');
					a.innerHTML = "HERE";
					document.getElementById('welcomeText').innerHTML = "Your account has been successfully created! Click ";
					document.getElementById('welcomeText').appendChild(a);
					document.getElementById('welcomeText').innerHTML += " to continue.";


				}

				else if ( xhrResponse == 2)
				{
					document.getElementById('welcomeText').innerHTML = "An unkown error has occured. Please contact administrator for assistance.";
				}

				else
				{
					document.getElementById('welcomeText').innerHTML = "An error has occured: " + xhrResponse;
				}
			}
		}

	var url = "registerValidate.php"; 
	var urlPost = "first=" + userFirstNameReg + "&last=" + userLastNameReg + "&user=" + userNameReg + "&pass=" + userPassReg;
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(urlPost);
}

function regInfoValidate()
{
	var userFirstNameReg = encodeURIComponent(document.getElementById('userFirstNameReg').value);
	var userLastNameReg = encodeURIComponent(document.getElementById('userLastNameReg').value);
	var userNameReg = encodeURIComponent(document.getElementById('userNameReg').value);
	var userPassReg = encodeURIComponent(document.getElementById('userPassReg').value);

	var readyToReg = true;

	//borroed from http://www.9lessons.info/2009/03/perfect-javascript-form-validation.html
	var ck_username = /^[A-Za-z0-9_]{1,20}$/;
	var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

	if (userFirstNameReg == "" || userLastNameReg == "" || userNameReg == "" || userPassReg == "")
	{
		document.getElementById('welcomeText').innerHTML = "All fields are required, please enter missing fields to continue";
		readyToReg = false;
	}

	if (!ck_username.test(userNameReg)) 
	{
	  document.getElementById('welcomeText').innerHTML =  "You valid UserName no special char .";
	  readyToReg = false;
	}
	
	if (!ck_password.test(userPassReg)) 
	{
	  document.getElementById('welcomeText').innerHTML =  "You must enter a valid Password ";
	  readyToReg = false;
	}
	
	if (readyToReg == true)
	{
		sendRegInfo(userFirstNameReg, userLastNameReg, userNameReg, userPassReg);
	}

}

function loginInfoValidate()
{
	var userName = encodeURIComponent(document.getElementById('userName').value);
	var userPass = encodeURIComponent(document.getElementById('userPass').value);

	var readyToLogin = true;

	if (userName == "" || userPass == "")
	{
		document.getElementById('welcomeText').innerHTML = "Please enter a valid username and password!";
		readyToLogin = false;
	}

	if (readyToLogin == true)
	{
		sendLoginInfo(userName, userPass);
	}


}


function logout()
{
	window.location = 'content.php?action=logout';
}