// In this example useState is being used to manage the state in this functional component


function Child({ setValue }) {	// Functional component that takes prop named setValue
	return (	// returns an html div with button 
	  <>
		<div>Child</div>
		<button onClick={() => setValue("Parent has been updated!")}>
		  Change Parent Value
		</button>
	  </>
	);
  }
  
  function Parent() {	// Function component that uses useState hook to declare a state variable named value and a function to update it named setValue.
	const [value, setValue] = React.useState(
	  "I need to be updated from my child"
	);
  
	return (
	  <>
		<h3>Update Parent State Challenge (Using Callback)</h3>
		<div className="wrapper">
		  <div>Parent</div>
		  <div className="box-wrapper">{value}</div>
		</div>
  
		<div className="wrapper">
		 <Child setValue={setValue} />		 {/* calls on the Child component to update the setValue */}
		</div>
	  </>
	);
  }
  
  ReactDOM.render(<Parent />, document.getElementById("root"));
  