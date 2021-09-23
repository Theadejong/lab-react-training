function Random (props){
    let random = Math.floor(Math.random()* (props.max - props.min + 1) + props.min)
    return(
        <div>
            <u>Random value between {props.min} and {props.max} = {random}</u>
        </div>
    )
}

export default Random;

