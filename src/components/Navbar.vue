<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <a class="navbar-brand" href="#">Mini E-commerce</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/checkout" class="nav-link">Checkout</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product-management" class="nav-link">Management</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
