import React from "react";

import MuiButton from "@material-ui/core/Button";
import MuiCard from "@material-ui/core/Card";
import MuiCardActions from "@material-ui/core/CardActions";
import MuiCardContent from "@material-ui/core/CardContent";
import MuiCardMedia from "@material-ui/core/CardMedia";
import MuiFormControl from "@material-ui/core/FormControl";
import MuiGrid from "@material-ui/core/Grid";
import MuiTextField from "@material-ui/core/TextField";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import MuiCloseIcon from "@material-ui/icons/Close";
import MuiPhotoIcon from "@material-ui/icons/Photo";
import MuiSearchIcon from "@material-ui/icons/Search";
import MuiTakePhotoIcon from "@material-ui/icons/PhotoCamera";

import Header from "../Header";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  media: {
    height: 128,
    width: 128,
    // paddingTop: "56.25%", // 16:9
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default () => {
  const classes = useStyles();

  return (
    <div>
      <Header icon={<MuiCloseIcon />} title="Add list" />
      <MuiCard className={classes.root}>
        <MuiCardMedia image="test" title="List image" />
        <MuiCardContent>
          <MuiFormControl>
            <MuiGrid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              spacing={3}
            >
              <MuiGrid item>
                <form noValidate autoComplete="off">
                  <MuiTextField id="standard-basic" label="Name" />
                </form>
              </MuiGrid>
              <MuiGrid item>
                <MuiTypography variant="h6">Photo</MuiTypography>
              </MuiGrid>
              <MuiGrid item>
                <MuiCardMedia
                  className={classes.media}
                  image="http://192.168.86.21:3000/photo-placeholder.jpg"
                  title="List image"
                />
              </MuiGrid>
              <MuiGrid item>
                <MuiButton
                  color="secondary"
                  startIcon={<MuiTakePhotoIcon />}
                  variant="contained"
                >
                  Take Photo
                </MuiButton>
              </MuiGrid>
              <MuiGrid item>
                <MuiButton
                  color="secondary"
                  startIcon={<MuiPhotoIcon />}
                  variant="contained"
                >
                  Choose Photo
                </MuiButton>
              </MuiGrid>
              <MuiGrid item>
                <MuiButton
                  color="secondary"
                  startIcon={<MuiSearchIcon />}
                  variant="contained"
                >
                  Search for Photo
                </MuiButton>
              </MuiGrid>
            </MuiGrid>
          </MuiFormControl>
        </MuiCardContent>
        <MuiCardActions>
          <MuiButton color="primary" variant="contained">
            Save
          </MuiButton>
        </MuiCardActions>
      </MuiCard>
    </div>
  );
};
