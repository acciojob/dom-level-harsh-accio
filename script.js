const child = document.getElementById("level");

let level = 1;
let current = child;
 
while (current.parentElement && current.parentElement.tagName !== "html") {
  level++;
  current = current.parentElement;
	
}
window.alert('The level of the element is: '+level) 















