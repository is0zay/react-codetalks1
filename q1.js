import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
	const [isOnline, setIsOnline] = useState(null);	// Define state variable isOnline and its tracker/updater setIsOnline using useState

	function handleStatusChange(staus) {	// This function updates isOnline state when there based on the status received
		setIsOnline(status.isOnline);
	}

	useEffect(() => {
		ChatAPI.suscribeToFriendStatus(props.friend.id, handleStatusChange);	// Subscribe to friend's status change using ChatAPI
		return () => {
			ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);	//Unsubscribe from friend's status change when component stops or when status change
		};
	});

	if (isOnline === null) {	 // If isOnline state is null, render 'Loading...'
		return 'Loading...';	
	}
	return isOnline ? 'Online' : 'Offline';	  // Render 'Online' if isOnline state is true, otherwise render 'Offline'

}

// In this example useEffect is being used to subscribe or unsubscribe to a friend's staus using ChatAPI.
//