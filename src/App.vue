<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <div class="app-container">
      <!-- Enhanced E-commerce Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="store-brand">
            <div class="store-logo">🌿</div>
            <h3 class="store-name">Toko Kita</h3>
          </div>

          <div class="user-info" v-if="isLoggedIn">
            <div class="user-avatar">
              <span>{{ getUserInitials() }}</span>
            </div>
            <div class="user-details">
              <span class="user-name">{{ userName }}</span>
              <span class="user-balance">Saldo: Rp {{ formatBalance(userBalance) }}</span>
            </div>
          </div>
        </div>

        <nav>
          <!-- Main Menu -->
          <router-link to="/Home" class="nav-link">
            <span class="icon">🏠</span>
            <span class="text">Home</span>
          </router-link>

          <!-- Shopping Categories -->
          <router-link to="/products" class="nav-link">
            <span class="icon">🛍️</span>
            <span class="text">products</span>
          </router-link>

          <!-- Customer Features -->
          <router-link to="/cart" class="nav-link">
            <span class="icon">🛒</span>
            <span class="text">cart</span>
          </router-link>
          <router-link to="/wishlist" class="nav-link">
            <span class="icon">❤️</span>
            <span class="text">Wishlist</span>
          </router-link>
          <router-link to="/orders" class="nav-link">
            <span class="icon">📦</span>
            <span class="text">orders</span>
          </router-link>

          <!-- Settings -->
          <router-link to="/settings" class="nav-link">
            <span class="icon">⚙️</span>
            <span class="text">Setting</span>
          </router-link>
        </nav>

        <!-- Sidebar Footer -->
        <div class="sidebar-footer">
          <button v-if="isLoggedIn" @click="logout" class="logout-btn">
            <router-link to="/Keluar" class="nav-link">
              <span class="icon">🚪</span>
              <span class="text">Keluar</span>
            </router-link>
          </button>
          <router-link v-else to="/login" class="login-btn">
            <span class="icon">🔑</span>
            <span class="text">Masuk/Daftar</span>
          </router-link>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <div class="content-header">
          <button class="menu-toggle" @click="toggleSidebar">
            <span class="icon">☰</span>
          </button>

        </div>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: true,
      userName: "Tri Yonata Anggraini",
      userBalance: 1250000,
      cartItems: 3,
      wishlistItems: 5,
      isDarkMode: false
    }
  },
  methods: {
    formatBalance(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    getUserInitials() {
      return this.userName.split(' ').map(name => name[0]).join('')
    },
    toggleSidebar() {
      document.querySelector('.sidebar').classList.toggle('visible')
    },
    logout() {
      console.log("User  logged out")
    },
    showCart() {
      this.$router.push('/cart')
    },
    showWishlist() {
      this.$router.push('/wishlist')
    }
  }
}
</script>

<style>
:root {
  --primary-color: #42b983;
  --secondary-color: #35495e;
  --accent-color: #ff7e33;
  --light-color: #f8f9fa;
  --dark-color: #2c3e50;
  --success-color: #28a745;
  --warning-color: #ffc107;
  --danger-color: #dc3545;
  --info-color: #17a2b8;
  --text-color: #333;
  --text-light: #6c757d;
  --border-color: #dee2e6;
  --sidebar-width: 280px;
  --transition-speed: 0.3s;
}

.dark-mode {
  --primary-color: #4fd1c5;
  --secondary-color: #2d3748;
  --light-color: #1a202c;
  --dark-color: #f8f9fa;
  --text-color: #f8f9fa;
  --text-light: #a0aec0;
  --border-color: #4a5568;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--light-color);
  color: var(--text-color);
  transition: background-color var(--transition-speed);
}

#app {
  display: flex;
  min-height: 100vh;
}

.app-container {
  display: flex;
  width: 100%;
}


.sidebar {
  width: 280px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #35495e;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
}

.sidebar.visible {
  transform: translateX(0);
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.store-brand {
  margin-bottom: 15px;
}

.store-logo {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.store-name {
  color: var(--primary-color);
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.user-info {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
}

.user-details {
  flex-grow: 1;
}

.user-name {
  font-weight: bold;
  display: block;
}

.user-balance {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  display: block;
  margin: 3px 0;
}

/* Navigation Styles */
nav {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
  transition: background var(--transition-speed);
  position: relative;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-exact-active {
  background: rgba(66, 185, 131, 0.2);
  border-left: 3px solid var(--primary-color);
}

.nav-link .icon {
  margin-right: 10px;
  font-size: 1.1rem;
}

.nav-link .text {
  flex-grow: 1;
}

/* Sidebar Footer */
.sidebar-footer {
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
}

.logout-btn,
.login-btn {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--transition-speed);
  margin-bottom: 10px;
}

.logout-btn:hover,
.login-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.logout-btn .icon,
.login-btn .icon {
  margin-right: 10px;
}

/* Main Content */
.main-content {
  flex-grow: 1;
  background-color: var(--light-color);
  transition: margin-left var;
  display: flex;
  flex-direction: column;
  margin-left: 0 !important;
}

.content-header {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 15px;
  color: var(--text-color);
  display: none;
}

.search-bar {
  flex-grow: 1;
  display: flex;
  max-width: 600px;
}

.search-bar input {
  flex-grow: 1;
  padding: 10px 15px;
  border: 1px solid var(--border-color);
  border-radius: 20px 0 0 20px;
  outline: none;
}

.search-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
}

.header-actions {
  display: flex;
  margin-left: 15px;
}

.action-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  margin-left: 15px;
  cursor: pointer;
  color: var(--text-color);
  position: relative;
}

.action-btn .badge {
  position: absolute;
  top: -5px;
  right: -5px;
}

/* Responsive Design */
@media (max-width: 992px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: transform var(--transition-speed);
  }

  .sidebar.visible {
    transform: translateX(0);
  }

  .main-content {
    margin-left: 0 !important;
  }

  .menu-toggle {
    display: block;
  }

  .content-header {
    justify-content: space-between;
  }

  .search-bar {
    margin: 0 15px;
  }
}

@media (max-width: 768px) {
  .search-bar {
    display: none;
  }

}
</style>
