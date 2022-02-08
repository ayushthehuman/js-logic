const Array = [];

function products() {
    var product = fetch();
    display(product)

}

function display(product) {
    if (checkData(product.productId, product.productName, product.productPrice) == 0) {
        Array.push(product);
        var table = document.getElementById('mytable');
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        for (var i = 0; i < Array.length; i++) {
            cell1.innerHTML = Array[i].productId;
            cell2.innerHTML = Array[i].productName;
            cell3.innerHTML = Array[i].productPrice;

        }
    }
}

function fetch() {
    var a = document.getElementById("productId").value;
    product_id = parseInt(a)
    console.log("hhh")
    console.log(product_id)
    var product_name = document.getElementById("productName").value;
    var v = document.getElementById("productPrice").value;
    product_price = parseInt(v)
    fl = unique(productId, productName, productPrice)
    if (fl == 0) {
        console.log("try another time ")
    } else {
        return {
            "productId": product_id,
            "productName": product_name,
            "productPrice": product_price
        };
    }
}

function unique(id, name, price) {
    for (var i = 0; i < Array.length; i++) {
        if (Array[i].productId == product_id) {
            alert("Id should be unique")
            return 0

        }

    }
}

function checkData(productId, productName, productPrice) {
    var flag = 0;
    if (isNaN(productId) || productId == NaN) {
        flag = 1;
        alert("Product Id should be integer");
    }
    console.log(typeof(productName))
    if (!isNaN(productName)) {
        flag = 1;
        alert("Product Name should be String")
    }
    if (isNaN(productPrice) || product_price == NaN) {
        flag = 1;
        alert("Product Price should be Number")
    }
    console.log(flag);
    return flag;

}