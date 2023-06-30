import './App.css';


function App(){
  //const topic = "React";
  //const concepts = ["JSX", "Props", "State", "Hook"];
  const menuItems = [
	{
		"title" : "Tiramisu",
    "type" : "Desserts",
		"description" : "Best Tiramisu in Blr",
		"image" : "https://picsum.photos/200/205/?random",
		"price" : "Rs 195",
	},
	{
		"title" : "Litchi Ice Cream",
    "type" : "Desserts",
		"description" : "Cool Muzaffarpur in hot summer",
		"image" : "https://picsum.photos/200/210/?random",
		"price" : "Rs 175",
	},
	{
		"title" : "Death By Chocolate (DBC)",
    "type" : "Desserts",
		"description" : "Enjoy the chocolates",
		"image" : "https://picsum.photos/200/200/?random",
		"price" : "Rs 225",
	},

]

  
  return (
    <div className="App">
      {/* JSX code */}
      <h1 id = "header-id"> Desserts Menu</h1>
      {/*{renderList}*/}
      <ul>
        {
          menuItems.map((menuItems,index) => (
            <li key = {index}>
              <h2>{menuItems.title}</h2>
              <p>{menuItems.description}</p>
              <img src={menuItems.image} alt={menuItems.title}></img>
              <h4>{menuItems.price}</h4>
            </li>
          ))
        }
      </ul>

    </div>
  )

}
export default App;
