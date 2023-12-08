

function Main  ()  {
  return(
    <main>
      <h1>Fun Facts About React</h1>
      <ul className="main-facts">
        <li>It's composable</li>
        <li>It's declarative </li>
        <li>Was First Released in 2015</li>
        <li>It's actively maintained by skilled people</li>
      </ul>
    </main>
  );
}
// console.log(Main); //in jsx the above nav is a js object
export default Main;
  
// ReactDOM.render(nav,document.getElementById('root'));//the nav should have a parent wrapper and can have children
// ReactDOM.render(body,document.getElementById('root'));
 
  