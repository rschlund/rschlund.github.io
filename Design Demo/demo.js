/* Element verändern durch Austausch */
function switchCss(){
	
	/* Zu ersetzender Link, Zugriff über ID*/
    var oldlink = document.getElementById("css");
	/* Name der aktuellen CSS-Datei */
    var href = oldlink.getAttribute("href");
	/* Erzeugung des neuen Links */
	var newlink = document.createElement("link");
    
	/* Attribute setzen */
	newlink.setAttribute("id", "css");    
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    
	/* Nächste CSS-Datei wählen */
	if(href == "no.css")
		newlink.setAttribute("href", "demoQ.css");
	else
		newlink.setAttribute("href", "no.css");    
	
	/* Den alten Link durch neuen ersetzen */
	var parent = oldlink.parentNode;
	parent.replaceChild(newlink, oldlink);
}

/* Element verändern durch Wertzuweisung */
function switchMediaQuery(){
	
	/* Zu ersetzender Link, Zugriff über ID*/
    var oldlink = document.getElementById("css");
	/* Name der aktuellen CSS-Datei */
    var href = oldlink.getAttribute("href");
    
	/* Nächste CSS-Datei wählen */
	if(href == "demoQ.css")
		oldlink.setAttribute("href", "demo.css");
	else
		oldlink.setAttribute("href", "demoQ.css");
}

/* Zugriff auf Element über ID */
var toggle  = document.getElementById('btn_togglecss');
/* Klick Event Listener hinzufügen */
toggle.addEventListener ('click',
    function() {           // anonyme Funktion
      switchCss('');  
    }, 
    true);
/* Zugriff auf Element über ID */	
toggle  = document.getElementById('btn_togglequery');
/* Klick Event Listener hinzufügen */
toggle.addEventListener ('click',
    function() {           // anonyme Funktion
      switchMediaQuery('query');  
    }, 
    true);