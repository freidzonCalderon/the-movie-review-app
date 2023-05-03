import React from "react";

const InputEmail = ({ value, handleChange, handleBlur, errors, touched }) => {
	return (
		<div className="mb-3">
			<label htmlFor="inputEmail">E-mail</label>
			<input
				type="email"
				name="email"
				id="inputEmail"
				placeholder="email@email.com"
				className={`form-control ${
					touched.email && errors.email ? "border border-danger" : ""
				}`}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			{touched.email && errors.email && (
				<div className="text-red-500">{errors.email}</div>
			)}
		</div>
	);
};

export default InputEmail;
