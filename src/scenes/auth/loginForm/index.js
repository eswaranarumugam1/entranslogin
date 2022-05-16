import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { FormInput } from "../../../components/formInput/TextField";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/actions";
import { CircularProgress } from "@mui/material";

export default function LoginForm() {
  const auth = useSelector((state) => state.auth);
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmitt = (data) => {
    let formData = new URLSearchParams();
    formData.append("email", data.email);
    formData.append("password", data.password);
    let payload = { formData };
    dispatch(authActions.logInProgress(payload));
  };
  return (
    <Grid xs={12} sm={12} lg={12}>
      <Box
        sx={{
          my: 0,
          mx: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ marginTop: "100px" }}>
          Sign in
        </Typography>
        {auth?.error && (
          <span style={{ color: "red" }} className="text-danger">
            Invalid user name or password!
          </span>
        )}
        <Box>
          <form onSubmit={handleSubmit(onSubmitt)} noValidate>
            <Controller
              name="email"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Email is a required value.",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <FormInput
                  {...field}
                  helperText={error?.message}
                  error={Boolean(error)}
                  label={"Email"}
                  type={"text"}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password is a required value.",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <FormInput
                  {...field}
                  helperText={error?.message}
                  error={Boolean(error)}
                  label={"Password"}
                  type={"password"}
                />
              )}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {!auth.inProgress ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            ) : (
              <CircularProgress>
                <span className="visually-hidden"></span>
              </CircularProgress>
            )}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <br />
          </form>
        </Box>
      </Box>
    </Grid>
  );
}
