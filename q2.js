function formDate(date) {		//  function named formDate that takes a parameter date
	return date.toLocalDateString();		// returns the date in a string
}

function Comment(props) {	// component named Comment that takes a single parameter props.
	return (	// this html/jsx will be rendered when called
		<div className="Comment">
			<div className="UserInfo">
				<img className="Avatar"
					src="{props.author.avatarUrl}"
					alt="{props.author.name}" />
				<div className="User-Info-name">
					{props.author.name}
				</div>
			</div>
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	);
}

const comment = {	// comment is a variable that holds and object
	date: new Date(),
	text: 'I Hope ypu enjoy learning React!',
	author: {
		name: 'Hello Kitty',
		avatarUrl: 'http://placekitten.com/g/64/64'
	}
};

const root = ReactDOM.createRoot(document.getElementById('root')); 	// render inside of the div with the id of "root"
root.render (
	<Comment 
		date={comment.date}
		text={comment.text}
		author={comment.author} />
);

// Props are properties of objects, we can set the values of these properties when we call on the component we want to render