<template>
    <aside class="sidebar">
      <!-- Navigasi Utama -->
      <nav class="main-nav">...</nav>
      
      <!-- Fitur Tambahan -->
      <div class="sidebar-features">
        <dark-mode-toggle />
        <user-profile />
      </div>
    </aside>
  </template>
  
  <script>
  import DarkModeToggle from './DarkModeToggle.vue'
  import UserProfile from './UserProfile.vue'
  
  export default {
    components: { DarkModeToggle, UserProfile }
  }
  </script>

  <style>
  
#app.sidebar-collapsed .sidebar {
  transform: translateX(-100%);
}

</style>