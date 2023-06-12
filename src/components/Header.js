import Button from "./Button";

const Header = ({title}) => {
  return (
    <header className="container">
      <div className="header">
        <h1>{title}</h1>
        <Button color= 'blue' text="Hello" />
      </div>
    </header>
  );
}


//!   CSS in JS
// const titlteStyle = {
//   color: "red",
//   display: "flex",
//     justifyContent: "center"
// };
 
export default Header


