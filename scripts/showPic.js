function addLoadEvent(func){
  var oldonload=window.onload;
  if(typeof window.onload!="function"){
	  window.onload=func;
  }else{
	  window.onload=function(){
		  oldonload();
		  func();
	  }
  }
}
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild.newElement;
	} else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("src","images/placeholder.gif");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("alt","my images gallery");
	var description=document.createElement("p");
    description.setAttribute("id","description"); 	
	var desctext=document.createTextNode("choose an image");
	description.appendChild(desctext);
	var gallery=document.getElementById("imagesgallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);	
}

function prepareGallery(){
	var gallery=document.getElementById("imagesgallery");
	var links=gallery.getElementsByTagName("a");
	for (var i=0;i<links.length;i++){
		links[i].onclick=function(){
			 showPic(this);
			 return false;
		}
	}
}
function showPic(whichpic){
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	return false;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);