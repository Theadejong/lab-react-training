function Greetings(props) {
    let message;
    switch (props.lang) {
        case "de":
            message = "Hallo"
            break;

        case "en":
            message = "Hello"
            break;

        case "es":
            message = "Buenas dias"
            break;

        case "fr":
            message = "Bonjour"
            break;

        default:
            message = "Hi there"
            break;
    }
  return (
    <div>
        {message}
        {props.children}
    </div>
  );
}

export default Greetings;