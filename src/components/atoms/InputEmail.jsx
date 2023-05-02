import React from "react";

const InputEmail = () => {
	return (
		<div className="mb-3">
			<label htmlFor="inputEmail">E-mail</label>
			<input
				type="email"
				name="email"
				id="inputEmail"
				placeholder="email@email.com"
				className="form-control"
			/>
		</div>
	);
};

export default InputEmail;
