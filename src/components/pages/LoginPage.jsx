import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import InputEmail from "../atoms/InputEmail";
import InputPassword from "./../atoms/InputPassword";
import Button from "./../atoms/Button";

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import AlertPasswordMissmatch from "./../templates/AlertPasswordMissmatch";

const LoginPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [error, setError] = useState("");
	const { signIn } = UserAuth();
	const navigate = useNavigate();

	return (
		<div className="h-screen flex items-center bg-[#FAFAFA]">
			{showModal && <AlertPasswordMissmatch setShowModal={setShowModal} />}
			<div className="card p-5 mx-auto shadow-lg col-11 col-md-6 col-lg-3">
				<h1 className="text-center display-2">Log In</h1>
				<Formik
					initialValues={{
						email: "",
						password: "",
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

						return errors;
					}}
					onSubmit={async (values, { resetForm }) => {
						console.log(values);
						try {
							await signIn(values.email, values.password);
							navigate("/home");
						} catch (e) {
							setError(e.message);
							console.error(e.message);
							if (
								e.message === "Firebase: Error (auth/wrong-password)." ||
								e.message === "Firebase: Error (auth/user-not-found)."
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
								value={values.password}
								handleChange={handleChange}
								handleBlur={handleBlur}
								errors={errors}
								touched={touched}
							/>
							<Button buttonText="Log In" />
							<div>
								<p className="text-center mt-3">
									Dont have an account?
									<span>
										{" "}
										<Link to="/signup" className="text-warning">
											sign up
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

export default LoginPage;
