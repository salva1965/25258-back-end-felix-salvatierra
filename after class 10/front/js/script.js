// fetch("http://localhost:3000/products")
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));

const products = [];

const getProducts = async () => {
    try {
        const response = await fetch("http://localhost:3000/products");
        const data =await response.json();
        products.push(...data);

        const productList = document.getElementById("product-list");
        products.forEach((product) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${product.name} - $${product.precio}`;
            productList.appendChild(listItem);
        });
    } catch (error) {
        console.error("error al traer products",error);
    }
};

getProducts();

const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const productName = document.getElementById("product-name").value;
    const productPrecio = document.getElementById("product-price").value;

    const newProduct = {
        name: productName,
        precio: parseFloat(productPrecio),
    };

    try {
        const response = await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        if (response.ok) {
            const addedProduct = await response.json();
            products.push(addedProduct);
            const productList = document.getElementById("product-list");
            const listItem = document.createElement("li");
            listItem.textContent = `${addedProduct.name} - $${addedProduct.precio}`;
            productList.appendChild(listItem);

            productForm.reset();

        } else {
            console.error("Error sumando producto", response.statusText);
        }

    } catch (error) {
        console.error("Error sumando producto",error);
    }
});