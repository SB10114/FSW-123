function TodoList(props) {
    const listItems = props.list.map((item, index) => <li key= {index}>
        <input type = "checkbox"></input>cd 
        {item.text}
    </li>)
    
    return (
        <ul>{listItems}</ul>
    );
  };


export default TodoList;