const DogApiUrl = "https://dog.ceo/api/breeds/image/random";

const TargetDiv = document.getElementById("Target");

async function AddNewDog(){
    const PromiseRequest = await fetch(DogApiUrl);
    const PromiseResponse = await PromiseRequest.json();
    const img = document.createElement("img");
    img.src =  PromiseResponse.message;
    img.alt = "Cute doggo";
    TargetDiv.appendChild(img);
    
}   

function ButtonClicked(){
    document.getElementById("DogButton").addEventListener("click" ,AddNewDog());    
}
