import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import MuiBackIcon from "@material-ui/icons/ArrowBack"

import AddItem from "./AddItem"
import Header from "../Header"
import HeaderMenu from "./HeaderMenu/"
import ItemRows from "./ItemRows"
import { Loading } from "../Loading"
import { fetchItems, fetchLists } from "../../redux/ActionCreators"

const mapDispatchToProps = {
  fetchItems: () => fetchItems(),
  fetchLists: () => fetchLists(),
}

const mapStateToProps = (state) => ({
  error: state.lists.error,
  lists: state.lists.lists,
  loading: state.lists.loading,
})

const List = ({ list }) => {
  return (
    <div>
      <Header icon={<MuiBackIcon />} menu={<HeaderMenu />} title={list.name} />
      <ItemRows itemIds={list.itemIds} />
      <AddItem />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ error, fetchItems, fetchLists, loading, lists, path }) => {
  useEffect(() => {
    fetchItems()
    fetchLists()
  }, [fetchItems, fetchLists])

  const list = lists.filter((list) => list.path === path)[0]
  useEffect(() => {
    if (!list) {
      return
    }
    document.title = list.name
  })

  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{error}</h4>
          </div>
        </div>
      </div>
    )
  }

  if (!lists) {
    return <Redirect to="/" />
  }

  if (!list) {
    return <Redirect to="/" />
  }

  return <List list={list} />
})
