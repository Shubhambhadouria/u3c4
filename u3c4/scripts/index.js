// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


async function searchNews(){
    try{

        // const query = document.getElementById("").value;

        const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);

        const data = await res.json();

        const finaldata = data.articles;

        console.log(finaldata);

        appendNews(finaldata);

    }catch(err){
        console.log(err);
    }
}
searchNews();


function appendNews(finaldata){

    finaldata.forEach(function(el){
        let div = document.createElement("div");
        div.setAttribute("id","mainnews")
        
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;
        img.setAttribute("id","newsimg");
        div1.append(img);

        let div2 = document.createElement("div");
        div2.setAttribute("id","newsdes");
        let h4 = document.createElement("h4");
        h4.innerText = el.title;
        h4.onclick = function(){
            let obj = {
                Image:el.urlToImage,
                Title:el.title,
                Description:el.description,
            };

            localStorage.setItem("news",JSON.stringify(obj));
            window.location.href="news.html";
        }
        let p = document.createElement("p");
        p.innerText = el.description;

        div2.append(h4,p);
        

        div.append(div1,div2);

        document.querySelector("#results").append(div);
    })
}

document.querySelector("#ch").addEventListener("click",chfun);

function chfun(){
    event.preventDefault();

    document.querySelector("#results").innerHTML=null;

    async function searchNews(){
        try{
    
            // const query = document.getElementById("").value;
    
            const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`);
    
            const data = await res.json();
    
            const finaldata = data.articles;
    
            console.log(finaldata);
    
            appendNews(finaldata);
    
        }catch(err){
            console.log(err);
        }
    }
    searchNews();
    
    
    function appendNews(finaldata){
    
        finaldata.forEach(function(el){
            let div = document.createElement("div");
            div.setAttribute("id","mainnews")
            
            let div1 = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.urlToImage;
            img.setAttribute("id","newsimg");
            div1.append(img);
    
            let div2 = document.createElement("div");
            div2.setAttribute("id","newsdes");
            let h4 = document.createElement("h4");
            h4.innerText = el.title;
            h4.onclick = function(){
                let obj = {
                    Image:el.urlToImage,
                    Title:el.title,
                    Description:el.description,
                };
    
                localStorage.setItem("news",JSON.stringify(obj));
                window.location.href="news.html";
            }
            let p = document.createElement("p");
            p.innerText = el.description;
    
            div2.append(h4,p);
            
    
            div.append(div1,div2);
            
    
            document.querySelector("#results").append(div);
        })
    }
    
}

document.querySelector("#us").addEventListener("click",usfun);

function usfun(){
    event.preventDefault();

    document.querySelector("#results").innerHTML=null;

    async function searchNews(){
        try{
    
            // const query = document.getElementById("").value;
    
            const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`);
    
            const data = await res.json();
    
            const finaldata = data.articles;
    
            console.log(finaldata);
    
            appendNews(finaldata);
    
        }catch(err){
            console.log(err);
        }
    }
    searchNews();
    
    
    function appendNews(finaldata){
    
        finaldata.forEach(function(el){
            let div = document.createElement("div");
            div.setAttribute("id","mainnews")
            
            let div1 = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.urlToImage;
            img.setAttribute("id","newsimg");
            div1.append(img);
    
            let div2 = document.createElement("div");
            div2.setAttribute("id","newsdes");
            let h4 = document.createElement("h4");
            h4.innerText = el.title;
            h4.onclick = function(){
                let obj = {
                    Image:el.urlToImage,
                    Title:el.title,
                    Description:el.description,
                };
    
                localStorage.setItem("news",JSON.stringify(obj));
                window.location.href="news.html";
            }
            let p = document.createElement("p");
            p.innerText = el.description;
    
            div2.append(h4,p);
            
    
            div.append(div1,div2);
            
    
            document.querySelector("#results").append(div);
        })
    }
    
}

document.querySelector("#uk").addEventListener("click",ukfun);

function ukfun(){
    event.preventDefault();

    document.querySelector("#results").innerHTML=null;

    async function searchNews(){
        try{
    
            // const query = document.getElementById("").value;
    
            const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`);
    
            const data = await res.json();
    
            const finaldata = data.articles;
    
            console.log(finaldata);
    
            appendNews(finaldata);
    
        }catch(err){
            console.log(err);
        }
    }
    searchNews();
    
    
    function appendNews(finaldata){
    
        finaldata.forEach(function(el){
            let div = document.createElement("div");
            div.setAttribute("id","mainnews")
            
            let div1 = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.urlToImage;
            img.setAttribute("id","newsimg");
            div1.append(img);
    
            let div2 = document.createElement("div");
            div2.setAttribute("id","newsdes");
            let h4 = document.createElement("h4");
            h4.innerText = el.title;
            h4.onclick = function(){
                let obj = {
                    Image:el.urlToImage,
                    Title:el.title,
                    Description:el.description,
                };
    
                localStorage.setItem("news",JSON.stringify(obj));
                window.location.href="news.html";
            }
            let p = document.createElement("p");
            p.innerText = el.description;
    
            div2.append(h4,p);
            
    
            div.append(div1,div2);
            
    
            document.querySelector("#results").append(div);
        })
    }
    
}

document.querySelector("#nz").addEventListener("click",nzfun);

function nzfun(){
    event.preventDefault();

    document.querySelector("#results").innerHTML=null;

    async function searchNews(){
        try{
    
            // const query = document.getElementById("").value;
    
            const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`);
    
            const data = await res.json();
    
            const finaldata = data.articles;
    
            console.log(finaldata);
    
            appendNews(finaldata);
    
        }catch(err){
            console.log(err);
        }
    }
    searchNews();
    
    
    function appendNews(finaldata){
    
        finaldata.forEach(function(el){
            let div = document.createElement("div");
            div.setAttribute("id","mainnews")
            
            let div1 = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.urlToImage;
            img.setAttribute("id","newsimg");
            div1.append(img);
    
            let div2 = document.createElement("div");
            div2.setAttribute("id","newsdes");
            let h4 = document.createElement("h4");
            h4.innerText = el.title;
            h4.onclick = function(){
                let obj = {
                    Image:el.urlToImage,
                    Title:el.title,
                    Description:el.description,
                };
    
                localStorage.setItem("news",JSON.stringify(obj));
                window.location.href="news.html";
            }
            let p = document.createElement("p");
            p.innerText = el.description;
    
            div2.append(h4,p);
            
    
            div.append(div1,div2);
            
    
            document.querySelector("#results").append(div);
        })
    }
    
}

document.querySelector("#in").addEventListener("click",infun);

function infun(){
    event.preventDefault();

    document.querySelector("#results").innerHTML=null;

    async function searchNews(){
        try{
    
            // const query = document.getElementById("").value;
    
            const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);
    
            const data = await res.json();
    
            const finaldata = data.articles;
    
            console.log(finaldata);
    
            appendNews(finaldata);
    
        }catch(err){
            console.log(err);
        }
    }
    searchNews();
    
    
    function appendNews(finaldata){
    
        finaldata.forEach(function(el){
            let div = document.createElement("div");
            div.setAttribute("id","mainnews")
            
            let div1 = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.urlToImage;
            img.setAttribute("id","newsimg");
            div1.append(img);
    
            let div2 = document.createElement("div");
            div2.setAttribute("id","newsdes");
            let h4 = document.createElement("h4");
            h4.innerText = el.title;
            h4.onclick = function(){
                let obj = {
                    Image:el.urlToImage,
                    Title:el.title,
                    Description:el.description,
                };
    
                localStorage.setItem("news",JSON.stringify(obj));
                window.location.href="news.html";
            }
            let p = document.createElement("p");
            p.innerText = el.description;
    
            div2.append(h4,p);
            
    
            div.append(div1,div2);
            
    
            document.querySelector("#results").append(div);
        })
    }
    
}