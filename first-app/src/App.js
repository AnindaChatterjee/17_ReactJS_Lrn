import './App.css';

/*function App() {
  return (
    <div className="App">
      <h1>Hello World !!! </h1>
      <h2> Learning Ract JS</h2>
    </div>
  );
}*/

function App(){
  const topic = "React";
  const concepts = ["JSX", "Props", "State", "Hook"];
  // Add array index as the key
  /*const renderList = concepts.map((item, index) => 
    <li key={index}>{item}</li>
    );*/
  return (
    <div className="App">
      {/* JSX code */}
      <h1 id = "header-id"> {topic} is Awesome </h1>
      {/*{renderList}*/}
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
