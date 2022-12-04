import './Card.css';

export function Card(props) {
//   const classes = "card " + props.className;
//   return <div className={classes}>{props.children}</div>;
    const classes = 'card ' + props.className; //html elements can have multiple classes, seperated by a whitespace. This returns a div with a class of card and the class passed in from the parent component
    return <div className={classes}>{props.children}</div> //content is passed in as children, children are what is between the opening and closing tags of the component
}