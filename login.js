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
					var urlContent = "content.php";
					var urlPostContent = "?user=" + userName;
					window.location.replace(urlContent + urlPostContent);
				}

				else if ( xhrResponse == 3)
				{
					document.getElementById('welcomeText').innerHTML = "Uknown error: please try again or contact administrator for assistance.";
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

function sendRegInfo()
{
	var userFirstName = encodeURIComponent(document.getElementById('userFirstNameReg').value);
	var userLastName = encodeURIComponent(document.getElementById('userLastNameReg').value);
	var userName = encodeURIComponent(document.getElementById('userNameReg').value);
	var userPass = encodeURIComponent(document.getElementById('userPassReg').value);

	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4 && xhr.status == 200)
			{
				var xhrResponse =  xhr.responseText;

				document.getElementById("debug").innerHTML = xhrResponse;
			}
		}

	var url = "registerValidate.php"; 
	var urlPost = "first=" + userFirstNameReg + "&last=" + userLastNameReg + "user=" + userNameReg + "&pass=" + userPassReg;
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(urlPost);
}

function infoValidate()
{
	var userFirstName = encodeURIComponent(document.getElementById('userFirstNameReg').value);
	var userLastName = encodeURIComponent(document.getElementById('userLastNameReg').value);
	var userName = encodeURIComponent(document.getElementById('userNameReg').value);
	var userPass = encodeURIComponent(document.getElementById('userPassReg').value);

	var readyToReg = true;

	if (readyToReg == true)
	{
		document.getElementById('debug').innerHTML += regValidated;
		sendRegInfo();
	}

}