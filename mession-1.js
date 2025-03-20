// submit form and add product
const tableProduct = {};

tableProduct.name =  new Array();
tableProduct.price = new Array();
tableProduct.category = new Array();
tableProduct.urlImage = new Array();


let nameProduct = document.querySelector('#name-product');
let price = document.querySelector('#price-product');
let category = document.querySelector('#choose-product');
let urlImage = document.querySelector('#url-image');

listProduct = [nameProduct, price, category];
let table = document.querySelector('table');

function addProduct(e) {
    e.preventDefault();
    if (nameProduct.value === '' || price.value === '' || category.value === '' || urlImage.value === '') {
        alert('please fill all field')
        return;
    }
    // console.log('add product check');
    // console.log(tableProduct);
    console.log(e);
    
    tableProduct.name.push(nameProduct.value);
    tableProduct.price.push(price.value);
    tableProduct.category.push(category.value);
    tableProduct.urlImage.push(urlImage.value);

    // add to table html
    let tbody = table.querySelector('tbody');
    let tr = document.createElement('tr');
    for (let i = 0; i < listProduct.length; i++) {
        let td = document.createElement('td');
        td.textContent = listProduct[i].value;
        tr.appendChild(td);
    }
    let img = document.createElement('img');
    td = document.createElement('td');
    img.src = urlImage.value;
    td.appendChild(img);
    tr.appendChild(td);

    td = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', deleteProduct);
    td.appendChild(button);
    tr.appendChild(td);

    tbody.appendChild(tr);
    table.appendChild(tbody);


    nameProduct.value = '';
    price.value = '';
    category.value = '';
    urlImage.value = '';
    
}

function deleteProduct(e) {
    console.log(e);
    
}