<template>
  <div class="gameplay">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <Playboard></Playboard>
        <Scoreboard></Scoreboard>
      </div>
    </div>
  </div>
</template>

<script>
import Playboard from '../components/Playboard.vue'
import Scoreboard from '../components/Scoreboard.vue'

export default {
  components: {
    Scoreboard,
    Playboard
  },
  name: 'Gameplay',
  data () {
    return {
    }
  }
}
</script>

<style>
.gameboard-side {
  min-height: 100vh;
}

.gameboard {
  border-radius: 20px !important;
  min-height: 80vh;
}

.gameboard-main {
  height: 50vh;
}

.timer {
  width: 8vw;
  border-radius: 10px !important;
}

.scoreboard-card {
  border-radius: 10px !important;
  height: 40vh;
}

.scoreboard-table {
  height: 30vh;
  overflow-y: auto;
}

.user-avatar-scoreboard {
  width: 2vw;
}

.username-scoreboard {
  font-size: 1rem;
  margin-left: 8px;
}

#message-board {
  margin-top: 16px;
  border-radius: 10px !important;
}
</style>
