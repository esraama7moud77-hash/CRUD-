const form = document.querySelector("section form");
const nameInput = document.querySelector("section form .nameInput");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        name: nameInput.value
    }
    console.log("data");
});

// Selectors
const mobileForm = document.querySelector(".mobile-form"); 
const NameInput = document.querySelector(".mobile-form .nameInput"); 
const priceInput = document.querySelector(".mobile-form .priceInput");
const tBody = document.querySelector("tbody");
const formButton = document.querySelector(".mobile-form button"); 

// Vars
let updatedIndex = null;
const mobiles = [
    { name: "iphone", price: 30000 },
    { name: "relme", price: 10000 }
];

// Function
function displayMobiles() {
    tBody.innerHTML = ""; 
    
    mobiles.forEach((mobile, index) => {
        tBody.innerHTML += `
        <tr>
            <td>${index +1}</td> 
            <td>${mobile.name}</td>
            <td>${mobile.price}</td>
            <td>
                <svg onclick="getData(${index})" xmlns="http://w3.org" width="1em" height="1em" viewBox="0 0 24 24" style="cursor:pointer; margin-right:10px;">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
                        <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                    </g>
                </svg>

                <svg onclick="deleteMobile(${index})" xmlns="http://w3.org" width="1em" height="1em" viewBox="0 0 56 56" style="cursor:pointer;">
                    <path d="M0 0h56v56H0z" fill="none" />
                    <path fill="currentColor" d="M4.106 17.09h47.788c2.649 0 3.985-1.57 3.985-4.195V10.62c0-2.625-1.336-4.195-3.985-4.195H4.106C1.598 6.426.12 7.996.12 10.62v2.274c0 2.625 1.336 4.195 3.985 4.195m11.601 32.484h24.586c4.617 0 6.469-2.437 7.148-6.984l3.352-22.313H5.231L8.558 42.59c.703 4.57 2.53 6.984 7.148 6.984m5.555-7.242c-1.055 0-1.875-.867-1.875-1.898c0-.516.21-.938.562-1.29l5.39-5.437l-5.39-5.46a1.73 1.73 0 0 1-.562-1.29c0-1.008.843-1.828 1.875-1.828c.492 0 .914.21 1.265.539l5.461 5.438l5.485-5.462c.398-.351.797-.562 1.265-.562c1.055 0 1.899.82 1.899 1.875c0 .492-.211.89-.586 1.266l-5.414 5.484l5.39 5.414c.352.375.586.773.586 1.313c0 1.03-.843 1.898-1.875 1.898c-.539 0-.96-.258-1.312-.586l-5.438-5.414l-5.437 5.414c-.328.352-.797.586-1.29.586" />
                </svg>
            </td>
        </tr>`;
    });
}

function handleSubmite() {
    const mobile = {
        name: NameInput.value,
        price: priceInput.value
    };

    if (NameInput.value.trim().length > 0 && priceInput.value.trim().length > 0) {
        if (formButton.textContent === "Create") {
            mobiles.push(mobile);
        } else {
            mobiles.splice(updatedIndex, 1, mobile);
            formButton.textContent = "Create"; 
        }
        displayMobiles();
        clearInputs();
    }
}

function clearInputs() {
    NameInput.value = "";
    priceInput.value = "";
}

function deleteMobile(mobileIndex) {
    mobiles.splice(mobileIndex, 1);
    displayMobiles();
}

function getData(mobileIndex) {
    const mobile = mobiles[mobileIndex];
    NameInput.value = mobile.name;
    priceInput.value = mobile.price;
    formButton.textContent = "Update";
    updatedIndex = mobileIndex;
}

displayMobiles();

// Events 
mobileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmite();
});
