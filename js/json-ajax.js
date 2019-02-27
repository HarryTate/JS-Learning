
let pageCounter = 1;
const animalContainer = document.getElementById('animal-info');
const btn = document.getElementById('btn');
btn.addEventListener("click", () => {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = () => {
        // Stores all data from JSON file into ourData
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    ourRequest.onerror = () => {
        alert("Error. Could not retrieve data");
    }
});

function renderHTML(data){
    let htmlString = "";
    for (var i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " likes ";  
        for(var ii = 0; ii < data[i].foods.likes.length; ii++){
            if(ii == 0){
            htmlString += data[i].foods.likes[ii];

            }else {
                htmlString += " and " + data[i].foods.likes[ii];

            }
        }
        htmlString += " and dislikes ";
        for(var ii = 0; ii < data[i].foods.dislikes.length; ii++){
            if(ii == 0){
            htmlString += data[i].foods.dislikes[ii];

            }else {
                htmlString += " and " + data[i].foods.dislikes[ii];

            }
        }

        htmlString += ".</p>"
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
    if(pageCounter >= 3){
        btn.classList.add("hidden");
    }
    pageCounter++;
}



