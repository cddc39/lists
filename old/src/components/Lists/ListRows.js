import React from "react"

import MuiList from "@material-ui/core/List"

import ListRow from "./ListRow"

export default ({ lists }) => {
  if (!lists) {
    return <div />
  }

  return (
    <main>
      <MuiList component="nav">
        {lists.map((list) => {
          return <ListRow list={list} key={list.id} />
        })}
      </MuiList>
    </main>
  )
}
