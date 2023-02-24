import { useEffect } from "react";

console.log('Heading File!');

function Heading() {
	console.log("Heading Component Called!");

	useEffect(() => {
        console.log("Heading Component Did Mount!");
		return () => {
			console.log("Heading Component Unmounted!");
		}
    }, []);

	return (
		<div>Heading Component</div>
	);
}

export default Heading;