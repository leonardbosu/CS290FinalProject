//ajax request; sends login info via POST; receives validation code 0-3
function sendLoginInfo()
{
	var userName = encodeURIComponent(document.getElementById('userName').value);
	var userPass = encodeURIComponent(document.getElementById('userPass').value);

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

				document.getElementById("debug").innerHTML = userName + xhrResponse;
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

				document.getElementById("debug").innerHTML = xhrResponse;

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

function infoValidate()
{
	var userFirstNameReg = encodeURIComponent(document.getElementById('userFirstNameReg').value);
	var userLastNameReg = encodeURIComponent(document.getElementById('userLastNameReg').value);
	var userNameReg = encodeURIComponent(document.getElementById('userNameReg').value);
	var userPassReg = encodeURIComponent(document.getElementById('userPassReg').value);

	var readyToReg = true;

	if (readyToReg == true)
	{
		document.getElementById('debug').innerHTML += "regValidated";
		sendRegInfo(userFirstNameReg, userLastNameReg, userNameReg, userPassReg);
	}

}



function logout()
{
	window.location = 'content.php?action=logout';
}