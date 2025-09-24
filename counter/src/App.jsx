import { useState, useEffect} from "react";
import ColorButton from "./ColorButton";

function App() {
  // const[bgColor , setBgColor] =useState("white");

  // const colors = ["red", "lightgreen", "lightblue"];

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`The count is ${count}`);
  }, [count]);
  



  return (

  //  <div style={{
  //   backgroundColor: bgColor,
  //   height: "100vh",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent:"space-between"
  //  }}>
  //   <h1 style={{textAlign: "center"}}>Background Color Change</h1>
  //   <footer style={{display:"flex", justifyContent: "center", padding: "20px"}}>
  //    {colors.map((color, index) => (
  //      <ColorButton key={index} color={color} onClick={() => setBgColor(color)}/>
  //    ))}
     
  //   </footer>
  //  </div>



  <div>
    <h1> Counter Example</h1>
    <h2>Count: {count} </h2>

    <button onClick={() => setCount(count+1)}>Increase Count</button>
     <button onClick={() => setCount(count-1)}>Decrease Count</button>

  </div>

  )
}

export default App;
