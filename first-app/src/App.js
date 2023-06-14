import './App.css';


function App(){
  const topic = "React";
  const concepts = ["JSX", "Props", "State", "Hook"];
  
  return (
    <div className="App">
      {/* JSX code */}
      <h1 id = "header-id"> {topic} is Awesome </h1>
    
      <h5 >{String(true)} ?</h5>

      {
        true ? <h4> yes it is true</h4> : null
      }

      <h2> Concepts to learn are : </h2>

      {
        concepts.map(concept => <h4 key = {concept}><li>{concept}</li></h4>)
      }
    </div>
  )

}
export default App;
