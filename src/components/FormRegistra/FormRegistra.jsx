import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: '60px',
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	textfield: {
		backgroundColor: "white",
		borderRadius: 5,
	},
	title: {
		color: "black",
	},
	info: {
		fontSize: 14,
		color: "#999",
		textAlign: 'justify',
	},
}));

const FormRegistra = () => {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	function onChangeEmail(event) {
		setEmail(event.target.value);
	}

	function onChangePassword(event) {
		setPassword(event.target.value);
	}

	function validateEmail(email) {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	function validatePassword(password) {
		const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$/;
		return re.test(String(password));
	}

	const handleSubmitSignUp = (e) => {
		e.preventDefault();

		if (validateEmail(email)) {
			if (validatePassword(password)) {
				axios
					.post(
						"https://smlogin.herokuapp.com/sign-up",
						{
							email: email,
							password: password,
						},
						{ withCredentials: true }
					)
					.then(
						(response) => {
							alert(response.data.message);
							history.push("/sign-in");
						},
						(error) => {
							if (error.response && error.response.data) {
								alert(error.response.data.message);
							}
						}
					);
			} else {
				alert("Ingresa un password valido!");
			}
		} else {
			alert("Ingresa un email valido!");
		}
	};

	return (
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>{" "}
				<Typography
					component="h1"
					variant="h5"
					className={classes.title}
				>
					Registrate
				</Typography>{" "}
				<form
					className={classes.form}
					onSubmit={handleSubmitSignUp}
					noValidate
				>
					<TextField
						className={classes.textfield}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={onChangeEmail}
					/>
					<TextField
						className={classes.textfield}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={onChangePassword}
					/>
					<p className={classes.info}>
						* El password debe contener al menos 6 caracteres de largo y debe contener al menos una letra mayuscula, minuscula y un numero{" "}
					</p>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Registrate{" "}
					</Button>{" "}
				</form>{" "}
			</div>{" "}
		</Container>
	);
};

export default FormRegistra;
