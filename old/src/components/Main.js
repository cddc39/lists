import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import About from "./About/"
import Account from "./Account/"
import AddList from "./AddList/"
import List from "./List/"
import Lists from "./Lists/"

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Lists} />
        <Route path="/list/:listPath" render={({ match }) => <List path={match.params.listPath} />} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/add-list" component={AddList} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}
