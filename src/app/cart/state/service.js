export function getProducts() {
    return fetch("http://localhost:7070/delayed/api/products")
           .then (response => {
               return response.json();
           })
}
