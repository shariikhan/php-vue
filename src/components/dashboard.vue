<template>
  <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <a class="navbar-brand" href="#">Dashboard</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/dashboard">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/users">User</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="mt-5">
      <router-view></router-view>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>