<template>
  <div class="col-7 d-flex flex-column justify-content-center gameboard-side">
    <div class="card shadow gameboard">
      <div class="card-body">
        <!-- Trigger Play Button -->
        <div id="btn-trigger-play">
          <button type="button" class="btn btn-info" @click="setTimer" >Play</button>
          <hr>
        </div>
        <Timer :timer="timer"></Timer>
        <div class="gameboard-main">
          <!-- Question -->
          <div id="question">
            <p>Question:</p>
            <h3>pertanyaanya</h3>
            <hr>
          </div>
          <!-- Answer list -->
          <div class="" id="answer">
            <table class="table table-bordered" style="margin: auto; width: 50%;">
              <col style="width: 8em;" />
              <col style="width: 1em;" />
              <thead>
                <tr>
                  <th colspan="2">Answers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>jawaban</td>
                  <td>poin</td>
                </tr>
              </tbody>
            </table>
            <hr>
          </div>
        </div>
        <!-- Answer Input -->
        <div class="input-group mb-3">
          <input>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from './Timer.vue'

export default {
  data () {
    return {
      timer: 0
    }
  },
  methods: {
    setTimer () {
      this.timer = 10
    }
  },
  components: {
    Timer
  }
}

</script>

<style>

</style>
