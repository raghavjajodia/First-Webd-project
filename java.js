var CurrentActiveContent = "";

function showContent(contentID)
{
	document.getElementById("home").style.display = "none";
	document.getElementById("products").style.display = "none";
	document.getElementById("contact").style.display = "none";
	
	if(contentID == "home")
	{
		document.getElementById("home").style.display = "block";
		CurrentActiveContent = "a";
		
	}
	else if(contentID == "products")
	{
		document.getElementById("products").style.display = "block";
		CurrentActiveContent = "b";
	}
	else if(contentID == "contact")
	{
		document.getElementById("contact").style.display = "block";
		CurrentActiveContent = "c";
	}
	
	clickeffect(contentID);
	
	
	}
	
function clickeffect(contentID)
	{
	document.getElementById("a").style.backgroundPosition=" top left";
	document.getElementById("b").style.backgroundPosition="top left";
	document.getElementById("c").style.backgroundPosition= "top left";
	
	if (contentID == "home")
	document.getElementById("a").style.backgroundPosition=" top right";
	if (contentID == "products")
	document.getElementById("b").style.backgroundPosition= "top right";
	if (contentID == "contact")
	document.getElementById("c").style.backgroundPosition= "top right";
	
	}
	
	function navBarLinksHoverEffect(contentID)
{

if(contentID == 0)
{	
	document.getElementById("a").style.backgroundPosition=" top left";
	document.getElementById("b").style.backgroundPosition="top left";
	document.getElementById("c").style.backgroundPosition= "top left";
	document.getElementById("drop").style.display= "none";
	document.getElementById(CurrentActiveContent).style.backgroundPosition=" top right";
	
}	
	else
	{
	document.getElementById(CurrentActiveContent).style.backgroundPosition=" top right";
	if (contentID == "home")
	document.getElementById("a").style.backgroundPosition=" top right";
	if (contentID == "products")
	{document.getElementById("b").style.backgroundPosition= "top right";
	document.getElementById("drop").style.display= "block";
	}
	if (contentID == "contact")
	document.getElementById("c").style.backgroundPosition= "top right";
}	
	
}
	
	