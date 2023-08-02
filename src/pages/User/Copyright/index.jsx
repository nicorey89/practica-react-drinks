import { Typography } from "@mui/material";
import { Link } from "react-router-dom"

export default function Copyright(props) {
    return (
      <Typography variant="body2" color="white" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" to="https://nicolas-rey.vercel.app/">
          Nico Rey
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }