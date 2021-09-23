function BoxColor (props){
    
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`
    
    return (
        <div style={{width: "800px", height: "200px", backgroundColor: color}}>
          {color}
        </div>
    );
  }

export default BoxColor;

