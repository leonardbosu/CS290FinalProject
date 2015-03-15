function getPublic()
{

	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4 && xhr.status == 200)
			{
				var xhrResponse =  JSON.parse(xhr.responseText);

				document.getElementById("debug").innerHTML = xhrResponse;

				if ( xhrResponse == 0) //mySQL query returned no results
				{
					document.getElementById('welcomeText').innerHTML = "No data found.";
				}

				else
				{

					for (var i = 0; i < xhrResponse.length; ++i)
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
						data.innerHTML = xhrResponse[i].reportID;

						//create row for user
						var row = document.createElement('tr');
						newTable.appendChild(row);

						var head1 = document.createElement('th');
						row.appendChild(head1);
						head1.innerHTML = 'Submitted by: ';

						var data = document.createElement('td');
						row.appendChild(data);
						data.innerHTML = xhrResponse[i].username;

						//create row for trail name
						var row = document.createElement('tr');
						newTable.appendChild(row);

						var head1 = document.createElement('th');
						row.appendChild(head1);
						head1.innerHTML = 'Trail Name: ';

						var data = document.createElement('td');
						row.appendChild(data);
						data.innerHTML = xhrResponse[i].trailName;

						//create row for hike description
						var row = document.createElement('tr');
						newTable.appendChild(row);

						var head1 = document.createElement('th');
						row.appendChild(head1);
						head1.innerHTML = 'Hike Description: ';

						var data = document.createElement('td');
						row.appendChild(data);
						data.innerHTML = xhrResponse[i].hikeDescription;

						//create table seperators
						var lineBreak1 = document.createElement('br');
						var rule = document.createElement('hr');
						var lineBreak2 = document.createElement('br');

						document.getElementById('resultTable').appendChild(lineBreak1);
						document.getElementById('resultTable').appendChild(rule);
						document.getElementById('resultTable').appendChild(lineBreak2);



					}


				}
			}
		}

	var url = "dbInterface.php"; 
	var urlPost = "query=public";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(urlPost);
}

function getPersonal()
{

}

function addRecord()
{

}