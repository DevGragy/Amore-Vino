import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
        margin: '120px',
	},
	avatar: {
		margin: theme.spacing(2),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(2),
		color: "white",
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
	checkbox: {
		color: "white",
	},
}));

const FormInicia = () => {
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

	const handleSubmitSignIn = (e) => {
		e.preventDefault();
		if (validateEmail(email)) {
			if (password) {
				axios
					.post(
						"https://smlogin.herokuapp.com/signin",
						{
							email: email,
							password: password,
						},
						{ withCredentials: true }
					)
					.then(
						(response) => {
							history.push("/");
						},
						(error) => {
							if (error.response && error.response.data) {
								alert(error.response.data.message);
							}
						}
					);
			} else {
				alert("Ingresa el password");
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
					Inicia Sesion
				</Typography>{" "}
				<form
					className={classes.form}
					onSubmit={handleSubmitSignIn}
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
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Inicia Sesion{" "}
					</Button>{" "}
					<Grid container display="flex" justify="center">
						<Grid item>
							<Link to="/sign-up">
								{" "}
								{"No tienes una cuenta? Registrate"}{" "}
							</Link>{" "}
						</Grid>{" "}
					</Grid>{" "}
				</form>{" "}
			</div>{" "}
		</Container>
	);
};

export default FormInicia;
