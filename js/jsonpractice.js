let person  = {
    name: "Harry",
    age: "12",
    address: {
        street: "11 Smith Street",
        city: "New York"
    },
    children: ["Phillip", "Graham"]
}

// Converts keys and values to string so they are in a recognised JSON format
person = JSON.stringify(person);
// Returns object in a JSON valid format
// console.log(person);

// Converts JSON values back to an object so they can be accessed in javascript
person = JSON.parse(person);
// Returns value in a valid js object format
// console.log(person);

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
        // console.log(xhttp.responseText);
        let response = JSON.parse(xhttp.responseText);
        // console.log(response.people); 
        let people = response.people;
        let output = '';
        for (let i = 0; i < people.length; i++) {
            // console.log(people[i]);
            output += '<li>' + people[i].name + '</li>';
        }
        
        document.getElementById('people').innerHTML = output;
    }
};



xhttp.open("GET", "./json/people.json",true);
xhttp.send();