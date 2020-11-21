// JavaScript Document
function pilih(){
 var pil=document.getElementById("form1").pic.value;
  if (pil=="1")
    {
        document.getElementById("img").innerHTML="<img src='IMG/awiskeraway.jpg'>";
		window.alert("Ini Adalah Gambar Film Fav Dari awiskeraway.jpg");
    }
	else if (pil=="2")
    {
        document.getElementById("img").innerHTML="<img src='IMG/grave.jpg'>";
		window.alert("Ini Adalah Gambar Film Fav Dari grave.jpg");
    }
	else if (pil=="3")
    {
        document.getElementById("img").innerHTML="<img src='IMG/thedudeinme.jpg'>";
		window.alert("Ini Adalah Gambar Film Fav Dari thedudeinme.jpg");
    }
	else if (pil=="4")
    {
        document.getElementById("img").innerHTML="<img src='IMG/looks.jpg'>";
		window.alert("Ini Adalah Gambar Film Fav  Dari looks.jpg");
    }
	else if (pil=="5")
    {
        document.getElementById("img").innerHTML="<img src='IMG/ALIVE.jpg'>";
		window.alert("Ini Adalah Gambar Film Fav Dari ALIVE.jpg");
    }
	else if (pil=="6")
    {
        document.getElementById("img").innerHTML="<img src='IMG/koeno.jpg'>";
		window.alert("Ini Adalah Gambar  Film Fav Dari koeno.jpg");
    }
	else if (pil=="7")
    {
        document.getElementById("img").innerHTML="<img src='IMG/only.jpg'>";
		window.alert("Ini Adalah Gambar Film Fav Dari only.jpg");
    }
	else if (pil=="8")
    {
        document.getElementById("img").innerHTML="<img src='IMG/fabricated.jpg'>";
		window.alert("Ini Adalah Gambar Film Fav Dari fabricated.jpg");
    }else{
		document.getElementById("img").innerHTML="<img src='IMG/Pilih.jpg'>";
	}
	
}
