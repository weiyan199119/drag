// JavaScript Document
function drag(id){
	var obj=document.getElementById(id)
	var disX=0;
	var disY=0;
	
	obj.onmousedown=function(e){	
		disX=e.pageX-obj.offsetLeft;
		disY=e.pageY-obj.offsetTop;
		document.onmousemove=function(e){

			obj.style.left=e.pageX-disX+'px'
			obj.style.top=e.pageY-disX+'px'

		}
		document.onmouseup=function(e){
			document.onmousemove=null;
			document.onmouseup=null;

		}
	}
	return false;
}