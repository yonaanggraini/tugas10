<template>
  <div class="about">
    <h1>About Us</h1>

    <div class="team-section">
      <h2>Our Team</h2>
      <div class="team-grid">
        <div v-for="member in team" :key="member.id" class="team-member">
          <img :src="member.avatar">
          <h3>{{ member.name }}</h3>
          <p>{{ member.position }}</p>
          <button @click="contactMember(member)">Contact</button>
        </div>
      </div>
    </div>

    <div class="social-share">
      <p>Share this page:</p>
      <button class="social-btn twitter">Twitter</button>
      <button class="social-btn facebook">Facebook</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { id: 1, name: "John Doe", position: "CEO", avatar: "https://i.pravatar.cc/150?img=1" },
        { id: 2, name: "Jane Smith", position: "CTO", avatar: "https://i.pravatar.cc/150?img=2" }
      ]
    }
  },
  methods: {
    contactMember(member) {
      // Logika kontak anggota tim
    }
  }
}
</script>