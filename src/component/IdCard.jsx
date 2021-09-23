function IdCard (props){
    return(
        <div>
            <u>lastName: {props.lastName}</u>
            <u>firstName: {props.firstName}</u>
            <u>gender: {props.gender}</u>
            <u>height: {props.height}</u>
            <u>birth: {props.birth}</u>
            <u>image: {props.picture}</u>
        </div>
    )
}

export default IdCard;

