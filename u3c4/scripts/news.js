// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

var x = JSON.parse(localStorage.getItem("news"));

console.log(x);
        
        let img = document.createElement("img");
        img.src = x.Image;
        img.setAttribute("id","inimg");

        let title = document.createElement("h4");
        title.innerText = x.Title;
        title.setAttribute("id","intitle");

        let Desc = document.createElement("p");
        Desc.innerText = x.Description;
        Desc.setAttribute("id","inDesc");
        
        document.querySelector("#detailed_news").append(img,title,Desc);