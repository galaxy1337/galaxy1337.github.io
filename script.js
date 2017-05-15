var guys = {
	"Maestro": "http://steamcommunity.com/profiles/76561198138058643",
	"Faz": "http://steamcommunity.com/profiles/76561198199823746",
	"Lolzy": "http://steamcommunity.com/profiles/76561198106147426",
	"Legacy": "http://steamcommunity.com/profiles/76561198178841609",
	"Tofi": "http://steamcommunity.com/profiles/76561198347667273",
	"lonely": "http://steamcommunity.com/profiles/76561198330849477",
	"zero": "http://steamcommunity.com/profiles/76561198128082965",
}

var links = {
	"Steam": "http://steamcommunity.com/profiles/76561198249090462",
	"Steam Group": "https://steamcommunity.com/groups/DRIVEBYBOYZ",
}

var marquee = document.getElementsByClassName("js-marquee")[0];

for (var guy in guys)
{
	var node = document.createElement("a");
	var text = document.createTextNode(guy);

	node.appendChild(text);
	node.href = guys[guy];
	node.target = "_blank";
	marquee.appendChild(node);

	var keys = Object.keys(guys);
	if (guy != keys[keys.length - 1])
		marquee.innerHTML += ' - ';
}

var center = document.getElementById("center");

for (var link in links)
{
	var pre = document.createElement("pre");
	var node = document.createElement("a");
	var text = document.createTextNode(link);

	node.appendChild(text);
	node.href = links[link];
	node.target = "_blank";
	pre.appendChild(node);
	center.appendChild(pre);
}

var asciiTitle = document.getElementById("ascii");

var desired = "\
  /$$$$$$  /$$ \n\
 /$$__  $$| $$  \n\
| $$  |__/| $$$$$$$   /$$$$$$ \n\
| $$      | $$__  $$ |____  $$ \n\
| $$      | $$  | $$  /$$$$$$$ \n\
| $$    $$| $$  | $$ /$$__  $$ \n\
|  $$$$$$/| $$  | $$|  $$$$$$$ \n\
 |______/ |__/  |__/ |_______/ \
"

var iter = 0;
var completion = 0;

function timeout()
{
	setTimeout(function()
	{
		if (iter < desired.length - 1)
		{
			asciiTitle.innerHTML = desired.substring(0, iter);
			iter++;
		}
		completion = iter / desired.length;
		timeout();
	}, Math.pow(completion, 3) * 40)
}

timeout();
