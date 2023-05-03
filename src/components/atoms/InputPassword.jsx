import React from "react";

const InputPassword = ({
	inputLabel,
	value,
	handleChange,
	handleBlur,
	errors,
	touched,
}) => {
	return (
		<div className="mb-3">
			<label htmlFor="inputPassword">{inputLabel}</label>
			<input
				type="password"
				name="password"
				id="inputPassword"
				placeholder="*******"
				className={`form-control ${
					touched.password && errors.password ? "border border-danger" : ""
				}`}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			{touched.password && errors.password && (
				<div className="text-red-500">{errors.password}</div>
			)}
		</div>
	);
};

export default InputPassword;
