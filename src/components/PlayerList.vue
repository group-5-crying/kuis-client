<template>
  <div class="col-7 d-flex flex-column justify-content-center">
    <div class="card rooms-card">
      <div class="card-body d-flex flex-column justify-content-center">
        <div class="align-self-center">
          <h1>Players</h1>
          <div class="player-container scrollable d-flex flex-wrap">
            <div class="card player-card">
              <div class="card-body d-flex flex-column justify-content-center">
                <div class="align-self-center">
                  <h5 class="username-card">Wendy</h5>
                </div>
              </div>
            </div>
          </div>
          <button class="play-btn">Play</button>
          <h5 class="waiting-info text-muted">Current game is running, please wait</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerCard from './PlayerCard.vue'
export default {
  name: 'PlayerList',
  data() {
    return {}
  },
  components: {
    PlayerCard
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  }
}

</script>

<style>

</style>
