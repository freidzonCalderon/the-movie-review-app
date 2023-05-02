import React from "react";

const InputPassword = () => {
	return (
		<div className="mb-3">
			<label htmlFor="inputPassword">Password</label>
			<input
				type="password"
				name="password"
				className="form-control"
				id="inputPassword"
				placeholder="*******"
			/>
		</div>
	);
};

export default InputPassword;
