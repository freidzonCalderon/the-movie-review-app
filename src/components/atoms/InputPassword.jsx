import React from "react";

const InputPassword = ({ inputLabel }) => {
	return (
		<div className="mb-3">
			<label htmlFor="inputPassword">{inputLabel}</label>
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
