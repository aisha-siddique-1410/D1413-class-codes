

function ColorButton({color, onClick}) {
  return (

      <button 
      style={{
        backgroundColor: color,
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        fontWeight: "bold"
    
      }}
      onClick={onClick}>{color}</button>
   
  );
}

export default ColorButton;


