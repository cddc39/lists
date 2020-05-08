<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      content="initial-scale=1, shrink-to-fit=no, width=device-width"
      name="viewport"
    />

    <!-- Favicon -->
    <link rel="icon" href="assets/favicon.ico" type="image/x-icon" />

    <!-- CSS -->
    <!-- Add Material font (Roboto) and Material icon as needed -->
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i|Roboto+Mono:300,400,700|Roboto+Slab:300,400,700|Material+Icons"
      rel="stylesheet"
    />

    <!-- build:css css/main.css -->
    <!-- Custom styles -->
    <link rel="stylesheet" href="css/lists.css" />
    <!-- endbuild -->

    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />

    <title>Groceries</title>
  </head>

  <body>
    <header>
      <nav class="bg-primary navbar sticky-top">
        <!-- Navbar title -->
        <a class="navbar-toggler" href="index.html">
          <i class="material-icons">arrow_back</i>
        </a>
        <div class="flex-grow-1 navbar-brand">
          Groceries
        </div>

        <!-- Navbar menu -->
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
          <a class="dropdown-item" href="#download">
            <i class="material-icons mr-3">get_app</i>
            Download
          </a>
          <a class="dropdown-item" href="#edit">
            <i class="material-icons mr-3">create</i>
            Edit
          </a>
          <a class="dropdown-item" href="#share">
            <i class="material-icons mr-3">share</i>
            Share
          </a>
          <a class="dropdown-item" href="#sort">
            <i class="material-icons mr-3">sort</i>
            Sort
          </a>
        </div>
      </nav>
    </header>

    <main>
      <!-- Items list -->
      <div class="font-weight-bold list-group list-group-flush">
        <!-- avocadoes -->
        <a class="list-group-item-custom" id="avocadoes-item">
          <span
            class="badge badge-pill badge-secondary pill-sub"
            id="avocadoes-sub"
          >
            <i class="material-icons small">remove</i>
          </span>
          <span
            class="badge badge-pill badge-secondary pill-add"
            id="avocadoes-add"
          >
            <i class="material-icons small">add</i>
          </span>
          <span href="#avocadoes" class="flex-grow-1 mx-3 remove-link"
            ><span id="avocadoes-count">2</span> Hass avocadoes
          </span>
          <span class="fab-inline" id="avocadoes-edit">
            <i class="material-icons">create</i>
          </span>
        </a>
        <!-- tomatoes -->
        <a class="list-group-item-custom" id="tomatoes-item">
          <span
            class="badge badge-pill badge-secondary pill-sub"
            id="tomatoes-sub"
          >
            <i class="material-icons small">remove</i>
          </span>
          <span
            class="badge badge-pill badge-secondary pill-add"
            id="tomatoes-add"
          >
            <i class="material-icons small">add</i>
          </span>
          <span href="#tomatoes" class="flex-grow-1 mx-3 remove-link"
            ><span id="tomatoes-count">3</span> tomatoes
          </span>
          <span class="fab-inline" id="tomatoes-edit">
            <i class="material-icons">create</i>
          </span>
        </a>
        <!-- onions -->
        <a class="list-group-item-custom" id="onions-item">
          <span
            class="badge badge-pill badge-secondary pill-sub"
            id="onions-sub"
          >
            <i class="material-icons small">remove</i>
          </span>
          <span
            class="badge badge-pill badge-secondary pill-add"
            id="onions-add"
          >
            <i class="material-icons small">add</i>
          </span>
          <span href="#onions" class="flex-grow-1 mx-3 remove-link"
            ><span id="onions-count">5</span> medium white onions
          </span>
          <span class="fab-inline" id="onions-edit">
            <i class="material-icons">create</i>
          </span>
        </a>
        <!-- yogurt -->
        <a class="list-group-item-custom" id="yogurt-item">
          <span
            class="badge badge-pill badge-secondary pill-sub"
            id="yogurt-sub"
          >
            <i class="material-icons small">remove</i>
          </span>
          <span
            class="badge badge-pill badge-secondary pill-add"
            id="yogurt-add"
          >
            <i class="material-icons small">add</i>
          </span>
          <span href="#yogurt" class="flex-grow-1 mx-3 remove-link"
            ><span id="yogurt-count">4</span> yogurts
          </span>
          <span class="fab-inline" id="yogurt-edit">
            <i class="material-icons">create</i>
          </span>
        </a>
      </div>

      <!-- Floating action button -->
      <div class="fab-br">
        <button
          class="btn btn-float btn-primary btn-sm"
          data-toggle="tooltip"
          data-placement="top"
          title="Add item"
          type="button"
        >
          <i class="material-icons">add</i>
        </button>
      </div>
    </main>

    <!-- build:js js/main.js -->
    <!-- jQuery, Popper.js, and Bootstrap JS -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Material JavaScript -->
    <script src="node_modules/daemonite-material/js/material.min.js"></script>

    <!-- Custom JS -->
    <script src="js/scripts.js"></script>
    <!-- endbuild -->
  </body>
</html>
