let products = document.querySelector(".products");

async function fetchData() {
    try {
        let response = await fetch('https://openapi.programming-hero.com/api/phones?search=13');
        let data = await response.json();
        data = data.data;
        for (let i = 0; i < data.length; i++) {
            let product = data[i];
            let productElement = document.createElement('div');
            productElement.classList.add('product');
            
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.phone_name}">
                <h3>${product.phone_name}</h3>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <button class="btn">SHOW DETAILS</button>
            `;
            products.appendChild(productElement);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchData();

let input_text = document.getElementById(`input_text`);

input_text.addEventListener('input', getData);

function getData() {
    try {
        setTimeout(async function() {
            let searchText = input_text.value;
            let response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
            let data = await response.json();
            data = data.data;

            // Clear existing products
            products.innerHTML = '';

            for (let i = 0; i < data.length; i++) {
                let product = data[i];
                let productElement = document.createElement('div');
                productElement.classList.add('product');
                
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.phone_name}">
                    <h3>${product.phone_name}</h3>
                    <p>There are many variations of passages of available, but the majority have suffered</p>
                    <button class="btn">SHOW DETAILS</button>
                `;
                products.appendChild(productElement);
            }
        }, 1000);
        
    } catch (error) {
        console.log(error);       
    }
}