import React, { useState } from "react";
import { Formik } from "formik";
import InputEmail from "../atoms/InputEmail";
import InputPassword from "./../atoms/InputPassword";
import Button from "./../atoms/Button";

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import AlertsMismatch from "../templates/AlertsMismatch";

const SignUpPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [error, setError] = useState("");
	const { createUser } = UserAuth();
	const navigate = useNavigate();

	return (
		<div className="h-screen flex items-center bg-[#FAFAFA]">
			{showModal && (
				<AlertsMismatch
					setShowModal={setShowModal}
					messageAlert="Email already in use, try a to log in or use a different one"
				/>
			)}
			<div className="card p-5 mx-auto shadow-lg col-11 col-md-6 col-lg-3">
				<h1 className="text-center display-2">Sign Up</h1>
				<Formik
					initialValues={{
						email: "",
						password: "",
						password2: "",
					}}
					validate={(values) => {
						let errors = {};

						if (!values.email) {
							errors.email = "Field required";
						} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
							errors.email = "Invalid Email";
						}
						if (!values.password) {
							errors.password = "Field required";
						}

						if (values.password.length < 6) {
							errors.password = "Minimun 6 characters";
						}

						if (values.password != values.password2) {
							errors.password = "Passwords must match";
						}

						return errors;
					}}
					onSubmit={async (values, { resetForm }) => {
						console.log(values);
						try {
							await createUser(values.email, values.password);
							navigate("/home");
						} catch (e) {
							setError(e.message);
							console.error(e.message);
							if (
								e.message === "Firebase: Error (auth/email-already-in-use)."
							) {
								setShowModal(true);
							}
						}
						resetForm();
					}}
				>
					{({
						touched,
						errors,
						handleBlur,
						handleChange,
						values,
						handleSubmit,
					}) => (
						<form onSubmit={handleSubmit}>
							<InputEmail
								value={values.email}
								handleChange={handleChange}
								handleBlur={handleBlur}
								errors={errors}
								touched={touched}
							/>
							<InputPassword
								inputLabel="Password"
								passwordName="password"
								value={values.password}
								handleChange={handleChange}
								handleBlur={handleBlur}
								errors={errors}
								touched={touched}
							/>
							<InputPassword
								inputLabel="Repeat Password"
								passwordName="password2"
								value={values.password2}
								handleChange={handleChange}
								handleBlur={handleBlur}
								errors={errors}
								touched={touched}
							/>
							<Button buttonText="Sign Up" />
							<div>
								<p className="text-center mt-3">
									Already have an account?
									<span>
										{" "}
										<Link to="/" className="text-warning">
											log in
										</Link>
									</span>
								</p>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default SignUpPage;
