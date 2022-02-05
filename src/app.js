const xhr = new XMLHttpRequest();
let links;

xhr.onreadystatechange = (event) =>{
    event = event.currentTarget;
    if(event.readyState == 4 && event.status == 200){
        links = JSON.parse(event.responseText);
        result = links.filter((link) => new RegExp(link.replace("?", "\\?")).test(window.location.href) && !window.location.href.includes("#rickroll-allowed"));
        
        if(result.length > 0){
            console.log("--- Rickrolled detected ! ---");
            window.location.replace(`${chrome.runtime.getURL("page.html")}?fullURL=${window.location.href}#${window.location.host}`);
        }
    }
};

xhr.open("GET", "https://raw.githubusercontent.com/Micorksen/Never-Get-Rickrolled/main/src/links.json");
xhr.send();
