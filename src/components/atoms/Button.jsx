import React from "react";

const Button = ({ buttonText }) => {
	return (
		<div>
			<button type="submit" className="btn btn-dark container-fluid">
				{buttonText}
			</button>
		</div>
	);
};

export default Button;
