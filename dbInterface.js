function getPublic()
{
	document.getElementById('resultTable').innerHTML = "";

	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4 && xhr.status == 200)
			{
				var xhrResponse =  JSON.parse(xhr.responseText);

				//document.getElementById("debug").innerHTML = xhrResponse;

				if ( xhrResponse == 0) //mySQL query returned no results
				{
					document.getElementById('welcomeText').innerHTML = "No data found.";
				}

				else
				{
					document.getElementById('welcomeText').innerHTML = "Here are the latest Reports!";
					displayData(xhrResponse, "public");
				}
			}
		}

	var url = "dbInterface.php"; 
	var urlPost = "query=public";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(urlPost);
}

function getPrivate()
{
	var tempuse = document.getElementById('myuser').innerHTML;
	document.getElementById('resultTable').innerHTML = "";

	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4 && xhr.status == 200)
			{
				var xhrResponse = JSON.parse(xhr.responseText);

				//document.getElementById("debug").innerHTML = xhrResponse;

				if ( xhrResponse == 0) //mySQL query returned no results
				{
					document.getElementById('welcomeText').innerHTML = "No data found.";
				}

				else
				{
					document.getElementById('welcomeText').innerHTML = "Here are your Reports!";
					displayData(xhrResponse, "private");
				}
			}
		}

	var url = "dbInterface.php"; 
	var urlPost = "query=private&user=" + tempuse;
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(urlPost);

}

function addReport()
{
	document.getElementById('resultTable').innerHTML = "";
	document.getElementById('welcomeText').innerHTML = "Report on your latest Hike!";

		var form = document.createElement('form');
		form.className = "form-horizontal"
		document.getElementById('resultTable').appendChild(form);

			var formGroup = document.createElement('div');
			formGroup.className = "form-group";
			form.appendChild(formGroup);

				var label = document.createElement('label');
				label.className = "control-label col-sm-2";
				label.innerHTML = "Trail Name: ";
				formGroup.appendChild(label);

				var inputFormat = document.createElement('div');
				inputFormat.className = "col-sm-4";
				formGroup.appendChild(inputFormat);

					var input = document.createElement('input');
					input.id = 'trailName';
					input.className = "form-control";
					input.type = "text";
					inputFormat.appendChild(input);

		var form2 = document.createElement('form');
		form2.className = "form-horizontal"
		document.getElementById('resultTable').appendChild(form2);

			var formGroup2 = document.createElement('div');
			formGroup2.className = "form-group";
			form2.appendChild(formGroup2);

				var label2 = document.createElement('label');
				label2.className = "control-label col-sm-2";
				label2.innerHTML = "Trail Description: ";
				formGroup2.appendChild(label2);

				var inputFormat2 = document.createElement('div');
				inputFormat2.className = "col-sm-4";
				formGroup2.appendChild(inputFormat2);

					var input2 = document.createElement('textarea');
					input2.id = 'trailDescription';
					input2.className = "form-control";
					inputFormat2.appendChild(input2);

		/*var form6 = document.createElement('form');
		form6.className = "form-horizontal"
		document.getElementById('resultTable').appendChild(form6);

			var formGroup6 = document.createElement('div');
			formGroup6.className = "form-group";
			form6.appendChild(formGroup6);

				var label6 = document.createElement('label');
				label6.className = "control-label col-sm-2";
				label6.innerHTML = "Date: ";
				formGroup6.appendChild(label6);

				var inputFormat6 = document.createElement('div');
				inputFormat6.className = "col-sm-2";
				formGroup6.appendChild(inputFormat6);

					var input6 = document.createElement('input');
					input6.id = 'date';
					input6.type = "date";
					inputFormat6.appendChild(input6);*/

		var form3 = document.createElement('form');
		form3.className = "form-horizontal"
		document.getElementById('resultTable').appendChild(form3);

			var formGroup3 = document.createElement('div');
			formGroup3.className = "form-group";
			form3.appendChild(formGroup3);

				var label3 = document.createElement('label');
				label3.className = "control-label col-sm-2";
				label3.innerHTML = "Make Public? ";
				formGroup3.appendChild(label3);

				var inputFormat3 = document.createElement('div');
				inputFormat3.className = "col-sm-2";
				formGroup3.appendChild(inputFormat3);

					var input3 = document.createElement('input');
					input3.id = 'shareReport';
					input3.type = "checkbox";
					inputFormat3.appendChild(input3);

		/*var form5 = document.createElement('form');
		form5.className = "form-horizontal"
		document.getElementById('resultTable').appendChild(form5);

			var formGroup5 = document.createElement('div');
			formGroup5.className = "form-group";
			form5.appendChild(formGroup5);

				var label5 = document.createElement('label');
				label5.className = "control-label col-sm-2";
				label5.innerHTML = "Attach Picture: ";
				formGroup5.appendChild(label5);

				var inputFormat5 = document.createElement('div');
				inputFormat5.className = "col-sm-2";
				formGroup5.appendChild(inputFormat5);

					var input5 = document.createElement('input');
					input5.id = 'picture';
					input5.type = "file";
					input5.accept = "image/*";
					inputFormat5.appendChild(input5);*/
		
		var form4 = document.createElement('form');
		form4.className = "form-horizontal"
		document.getElementById('resultTable').appendChild(form4);

			var formGroup4 = document.createElement('div');
			formGroup4.className = "form-group";
			form4.appendChild(formGroup4);

				var inputFormat4 = document.createElement('div');
				inputFormat4.className = "col-sm-2";
				formGroup4.appendChild(inputFormat4);

					var input4 = document.createElement('button');
					input4.className = "btn btn-default";
					input4.id = 'addNewRecord';
					input4.onclick = addRecord;
					input4.innerHTML = "Add New Report";
					inputFormat4.appendChild(input4);

}

function displayData(response, type)
{
	document.getElementById('resultTable').innerHTML = "";

	for (var i = 0; i < response.length; ++i)
		{
			//create table for report
			var newTable = document.createElement('table');
			document.getElementById('resultTable').appendChild(newTable);

			//create row for Report ID
			var row = document.createElement('tr');
			newTable.appendChild(row);

			var head1 = document.createElement('th');
			row.appendChild(head1);
			head1.innerHTML = 'Report ID: ';

			var data = document.createElement('td');
			row.appendChild(data);
			data.innerHTML = response[i].reportID;

			//create row for user
			var row = document.createElement('tr');
			newTable.appendChild(row);

			var head1 = document.createElement('th');
			row.appendChild(head1);
			head1.innerHTML = 'Submitted by: ';

			var data = document.createElement('td');
			row.appendChild(data);
			data.innerHTML = response[i].username;

			//create row for trail name
			var row = document.createElement('tr');
			newTable.appendChild(row);

			var head1 = document.createElement('th');
			row.appendChild(head1);
			head1.innerHTML = 'Trail Name: ';

			var data = document.createElement('td');
			row.appendChild(data);
			data.innerHTML = response[i].trailName;

			//create row for hike description
			var row = document.createElement('tr');
			newTable.appendChild(row);

			var head1 = document.createElement('th');
			row.appendChild(head1);
			head1.innerHTML = 'Hike Description: ';

			var data = document.createElement('td');
			row.appendChild(data);
			data.innerHTML = response[i].hikeDescription;

			//create delete button for private records

			if(type == 'private')
			{
				var delButton = document.createElement('button');
				delButton.className = "btn btn-default";
				delButton.innerHTML = "DELETE";
				var rec = response[i].reportID;
				delButton.onclick = function()
				{
					delRecord(rec);
				};
				newTable.appendChild(delButton);
			}


			//create table seperators
			var lineBreak1 = document.createElement('br');
			var rule = document.createElement('hr');
			var lineBreak2 = document.createElement('br');

			document.getElementById('resultTable').appendChild(lineBreak1);
			document.getElementById('resultTable').appendChild(rule);
			document.getElementById('resultTable').appendChild(lineBreak2);

		}
}

function addRecord()
{

	var trailName = document.getElementById('trailName').value;
	var trailDescription = document.getElementById('trailDescription').value;
	var shareReport = document.getElementById('shareReport').checked;
	var tempuse = document.getElementById('myuser').innerHTML;
	//var date = document.getElementById('date').value;
	//var picture = document.getElementById('picture').value;

	console.log(date);
	
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4 && xhr.status == 200)
			{
				var xhrResponse = xhr.responseText;

				//document.getElementById("debug").innerHTML = xhrResponse;

				if ( xhrResponse == 0) //mySQL query returned no results
				{
					document.getElementById('welcomeText').innerHTML = "Error with Record Add" + xhrResponse;
				}

				else if( xhrResponse ==1)
				{
					document.getElementById('welcomeText').innerHTML = "New report Added!";
				}
				else 
				{
					document.getElementById('welcomeText').innerHTML = "Error with Record Add: " + xhrResponse;
				}
			}
		}

	var url = "dbInterface.php"; 
	var urlPost = "query=add&user=" + tempuse + "&trailName=" + trailName + "&trailDescription=" + trailDescription + "&shareReport=" + shareReport;
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(urlPost);
}

function delRecord(id)
{
	var reportID = id;


	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4 && xhr.status == 200)
			{
				var xhrResponse = xhr.responseText;

				//document.getElementById("debug").innerHTML = xhrResponse;

				if ( xhrResponse == 0) //mySQL query returned no results
				{
					document.getElementById('welcomeText').innerHTML = "Error with Record Delete" + xhrResponse;
				}

				else
				{
					document.getElementById('welcomeText').innerHTML = "Report Deleted!";
					getPrivate();
				}
			}
		}

	var url = "dbInterface.php"; 
	var urlPost = "query=del&reportID=" + reportID;
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(urlPost);
}