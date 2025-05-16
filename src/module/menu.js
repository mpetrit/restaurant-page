const menuItems = [
    {
      name: "Margherita Pizza",
      description: "Classic wood-fired pizza with fresh tomatoes, mozzarella, and basil.",
      price: "$12.99",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      name: "Spaghetti Carbonara",
      description: "Pasta with creamy egg-based sauce, pancetta, and parmesan.",
      price: "$14.50",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      name: "Grilled Salmon",
      description: "Fresh salmon fillet with lemon-dill butter, served with vegetables.",
      price: "$18.00",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan, croutons, and Caesar dressing.",
      price: "$9.00",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      name: "Beef Burger",
      description: "Juicy grilled beef patty with cheese, lettuce, tomato, and special sauce.",
      price: "$11.75",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      name: "Chicken Tikka Masala",
      description: "Tender chicken in a creamy spiced tomato sauce, served with basmati rice.",
      price: "$15.25",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      name: "Vegan Buddha Bowl",
      description: "A colorful mix of grains, roasted veggies, chickpeas, and tahini dressing.",
      price: "$13.00",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      name: "Sushi Platter",
      description: "An assortment of fresh nigiri and rolls, served with wasabi and soy sauce.",
      price: "$20.00",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      name: "French Onion Soup",
      description: "Rich beef broth with caramelized onions and melted gruyère on toast.",
      price: "$8.50",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
      price: "$7.50",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    }
  ];
  
  function displayDishes(){
    const menuItemsContainer= document.querySelector(".menu-items")
    menuItems.map((dish)=>{
        let div=document.createElement('div')
        let img=document.createElement('img')
        let h2=document.createElement('h2')
        let p=document.createElement('p')
        let span=document.createElement('span')
        
        div.classList.toggle("dish-card")

        img.src= dish.image
        div.appendChild(img)

        h2.textContent=dish.name
        div.appendChild(h2)

        p.textContent=dish.description
        div.appendChild(p)

        span.textContent=dish.price
        div.appendChild(span)

        menuItemsContainer.appendChild(div)
    })
}
function menu(){
    document.querySelector("#content").innerHTML=`
    <div class="menu-main">
    <h1 >Menu</h1> 
    <div class="menu-items">
    </div>
    </div>
    `
    displayDishes()
}

export default menu