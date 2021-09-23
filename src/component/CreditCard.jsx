function CreditCard (props){
    return(
        <div>
            <u>{props.type}</u>
            <u>{props.number}</u>
            <u>{props.expirationMonth}</u>
            <u>{props.expirationYear}</u>
            <u>{props.bank}</u>
            <u>{props.owner}</u>
            <u>{props.bgColor}</u>
            <u>{props.color}</u>
        </div>
    )
}

export default CreditCard;

