/* eslint-disable */
// Write your Color component here
import { useState } from 'react'



const Color = (props) => {
  return <div className={props.color+(props.color===props.selectedColor? " selected": "")}
  onClick={() => props.setSelectedColor(props.color)}>

  </div>
}
const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
      </div>
    </div>
  );
};

export default App;