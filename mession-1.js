// submit form and add product
const tableProduct = [];


let nameProduct = document.querySelector('#name-product');
let price = document.querySelector('#price-product');
let category = document.querySelector('#choose-product');
let urlImage = document.querySelector('#url-image');

const form = document.querySelector('form');
let table = document.querySelector('table');
let tbody = table.querySelector('tbody');

listProduct = [nameProduct, price, category];
let counter = 0;

function addProduct(e) {
    e.preventDefault();
    if (nameProduct.value === '' || price.value === '' || category.value === '' || urlImage.value === '') {
        alert('please fill all field')
        return;
    }
    
    tableProduct.push({
        name: nameProduct.value,
        price: price.value,
        category: category.value,
        urlImage: urlImage.value
    });

    // add to table html
    let tr = document.createElement('tr');
    let product = tableProduct[counter];
    console.log(product);

    let keys = Object.keys(product);
    console.log(keys);
    

    for (let i = 0; i < keys.length-1; i++) {
        let td = document.createElement('td');
        td.textContent = product[keys[i]];
        tr.appendChild(td);
    }
    // handle image
    let img = document.createElement('img');
    td = document.createElement('td');
    img.src = product.urlImage;
    td.appendChild(img);
    tr.appendChild(td);

    // handle delete button
    td = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', deleteProduct);
    td.appendChild(button);
    tr.appendChild(td);
    
    tr.id = counter;
    tbody.appendChild(tr);
    table.appendChild(tbody);

    counter++;
    form.reset();
}

function deleteProduct(e) {
    console.log(e.target);
    let index = e.target.parentElement.parentElement.id;
    let tr = document.getElementById(index);
    tr.remove();

}






/// here how to use inner html to display data on safe way 
// function sanitizeInput(input) {
//     return input.replace(/&/g, "&amp;")
//                 .replace(/</g, "&lt;")
//                 .replace(/>/g, "&gt;")
//                 .replace(/"/g, "&quot;")
//                 .replace(/'/g, "&#39;");
// }

// Example:
// let userInput = document.getElementById("check-input").value;
// let safeInput = sanitizeInput(userInput);
// console.log(safeInput);
// document.getElementById("check").innerHTML = safeInput;

// // or use DOMPurify https://cdnjs.cloudflare.com
// function addInput() {
//     let userInput = document.getElementById("check-input").value;
//     console.log(userInput);
//     let safeInput = DOMPurify.sanitize(userInput);
//     console.log(safeInput);
//     document.getElementById("check").innerHTML = safeInput;
// }