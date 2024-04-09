function MyComponent(props){
    return(
      <div className>
         {props.name}
         {props.age}
      </div>
    )
}

function Person() {
    return (
        <div>
            <MyComponent name={"Monu"} />
            <MyComponent age={"26"} />
        </div>
    );
}

export default Person;
