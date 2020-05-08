import React from "react";

function NavbarMenu() {
  return (
    <div className="NavbarMenu">
      <button
        aria-expanded="false"
        aria-haspopup="true"
        class="navbar-toggler"
        data-toggle="dropdown"
        id="dropdownMenuButton"
        type="button"
      >
        <i class="material-icons">more_vert</i>
      </button>
      <div
        aria-labelledby="dropdownMenuButton"
        class="dropdown-menu dropdown-menu-right"
      >
        <a class="dropdown-item" href="#account">
          <i class="material-icons mr-3">account_circle</i>
          Account
        </a>
        <a class="dropdown-item" data-toggle="modal" href="#sortModal">
          <i class="material-icons mr-3">sort</i>
          Sort lists
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="about.html">
          <i class="material-icons mr-3">info</i>
          About
        </a>
      </div>
    </div>
  );
}

export default NavbarMenu;
