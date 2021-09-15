function Card(prop) {
    return (
        <div style = {{backgroundColor: prop.background, width: prop.width}}>
            <h1>{prop.title}</h1>
            <h3>{prop.subtitle}</h3>
            <p>{prop.description}</p>
        </div>
    );
  };


export default Card;