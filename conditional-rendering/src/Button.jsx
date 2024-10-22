function Button(){
    const clickManager = () =>{
        alert("This button has been clicked")
    }

    return(
        <div>
            <button onClick={clickManager}>Click to Learn About Events</button>
        </div>
    )
}

export default Button