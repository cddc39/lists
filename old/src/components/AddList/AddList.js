import React, { useState } from "react"
import { connect } from "react-redux"

import MuiButton from "@material-ui/core/Button"
import MuiCard from "@material-ui/core/Card"
import MuiCardActions from "@material-ui/core/CardActions"
import MuiCardContent from "@material-ui/core/CardContent"
import MuiCardMedia from "@material-ui/core/CardMedia"
import MuiGrid from "@material-ui/core/Grid"
import MuiTextField from "@material-ui/core/TextField"
import MuiTypography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import MuiCloseIcon from "@material-ui/icons/Close"
import MuiPhotoIcon from "@material-ui/icons/Photo"
import MuiSearchIcon from "@material-ui/icons/Search"
import MuiTakePhotoIcon from "@material-ui/icons/PhotoCamera"

import Header from "../Header"
import { postList } from "../../redux/ActionCreators"

const mapDispatchToProps = {
  postList: (list) => postList(list),
}

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
})

export default connect(
  null,
  mapDispatchToProps
)(({ postList }) => {
  const classes = useStyles()
  const [error, setError] = useState(false)
  const [nameErr, setNameErr] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    postList({ itemIds: [], name: name, path: name.toLowerCase() })
  }

  const onChange = (e) => {
    if (e.target.value.length === 0) {
      setError(true)
      setNameErr("You must have a name")
    }
  }

  return (
    <div>
      <Header icon={<MuiCloseIcon />} title="Add list" />
      <MuiCard className={classes.root}>
        <MuiCardMedia image="test" title="List image" />
        <MuiCardContent>
          <form id="add-list" onSubmit={handleSubmit}>
            <MuiGrid container direction="column" justify="flex-start" alignItems="flex-start" spacing={3}>
              <MuiGrid item>
                <MuiTextField
                  error={error}
                  helperText={nameErr}
                  id="standard-basic"
                  label="Name"
                  onChange={onChange}
                  onInput={(e) => setName(e.target.value)}
                  value={name}
                />
              </MuiGrid>
              <MuiGrid item>
                <MuiTypography variant="h6">Photo</MuiTypography>
              </MuiGrid>
              <MuiGrid item>
                <MuiCardMedia
                  className={classes.media}
                  image="http://localhost:3000/photo-placeholder.jpg"
                  title="List image"
                />
              </MuiGrid>
              <MuiGrid item>
                <MuiButton color="secondary" startIcon={<MuiTakePhotoIcon />} variant="contained">
                  Take Photo
                </MuiButton>
              </MuiGrid>
              <MuiGrid item>
                <MuiButton color="secondary" startIcon={<MuiPhotoIcon />} variant="contained">
                  Choose Photo
                </MuiButton>
              </MuiGrid>
              <MuiGrid item>
                <MuiButton color="secondary" startIcon={<MuiSearchIcon />} variant="contained">
                  Search for Photo
                </MuiButton>
              </MuiGrid>
            </MuiGrid>
          </form>
        </MuiCardContent>
        <MuiCardActions>
          <MuiButton form="add-list" color="primary" type="submit" variant="contained">
            Save
          </MuiButton>
        </MuiCardActions>
      </MuiCard>
    </div>
  )
})
