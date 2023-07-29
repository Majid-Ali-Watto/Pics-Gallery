/** @format */

import "../assets/Login.css";
import "../App.css";
import { useForm } from "react-hook-form";
import { Fragment } from "react";

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("🚀 ~ file: Login.jsx:16 ~ onSubmit ~ data:", data);
		console.log(data);
		console.log(2 + 6);
	};
	/* The code you provided is a React component called "Login". It is a form that allows users to
			input their email and password for login purposes. */
	return (
		<Fragment>
			<form onSubmit={handleSubmit(onSubmit)} className="form">
				<label htmlFor="email">Email</label>
				<input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
				{errors.email && <p>Email is required and must be valid</p>}
				<label htmlFor="password">Password</label>
				<input type="password" {...register("password", { required: true })} />
				{errors.password && <p>Password is required</p>}
				{/* The `<button type="submit">Login</button>` is a button element that is used to submit the form when clicked. When the user clicks
				on this button, the `onSubmit` function will be called, which is responsible for handling the form submission logic.  */}
				<button type="submit">Login</button>
			</form>
		</Fragment>
	);
}

export default Login;
