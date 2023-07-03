function Child() {
	return <div>This is children content</div>;
  }
  
  function Parent({ children }) {
	return (
	  <div>
		<h3>Parent Component</h3>
		{children}
	  </div>
	);
  }
  
  function App() {
	return (
	  <Parent>
		<Child />
	  </Parent>
	);
  }
  
  //  the Parent component acts as a container for its child components, which in this case is the Child component. 
  // doing this provides a way to create modular, reusable, and easily understandable code. It also allows for passing data or functionality between components using props, which enables dynamic and flexible behavior throughout the application.