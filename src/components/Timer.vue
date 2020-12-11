<template>
  <div class="card shadow timer">
    <div class="card-body">
      <div>
        Timer:
      </div>
      <div>
        {{ countTimer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countTimer: this.timer
    }
  },
  props: {
    timer: Number
  },
  watch: {
    timer: {
      handler (value) {
        if (value > 0) {
          setTimeout(() => {
            this.countTimer--
          }, 1000)
        }
      }
    }
  }
}

</script>

<style>

</style>
