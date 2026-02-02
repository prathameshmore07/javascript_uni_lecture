const products=[
   { "id": 1,
    "price": 350,
    "name": 'Mouse',
   },
    {
        "id": 2,
        "price": 550,
        "name": 'Mouse-Pad',
    },
     {
        "id": 3,
        "price": 5000,
        "name": 'Gaming-Mouse',
    }
]
products.filter((product)=>(
    product.price>500

))  
console.log(collect(products).where('price', '>',500))