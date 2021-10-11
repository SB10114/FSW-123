function TodoList(props) {
    const listItems = props.list.map((item, index) => <li key= {index}>
        <input type = "checkbox"></input>
        {item.text}
    </li>)
    
    return (
        <ul>{listItems}</ul>
    );
  };


export default TodoList;