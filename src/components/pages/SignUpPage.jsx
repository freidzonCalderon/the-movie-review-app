import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Form as BootstrapForm } from "react-bootstrap";
import InputEmail from "../atoms/InputEmail";
import InputPassword from "./../atoms/InputPassword";
import Button from "./../atoms/Button";

import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
	return (
		<div className="h-screen flex items-center bg-[#FAFAFA]">
			<div className="card p-5 mx-auto shadow-lg col-11 col-md-6 col-lg-3">
				<h1 className="text-center display-2">Sign Up</h1>
				<Formik>
					{() => (
						<form>
							<InputEmail />
							<InputPassword inputLabel="Password" />
							<InputPassword inputLabel="Repeat Password" />
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
