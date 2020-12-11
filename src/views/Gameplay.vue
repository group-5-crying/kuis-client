<template>
  <div class="gameplay">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-7 d-flex flex-column justify-content-center gameboard-side">
          <div class="card shadow gameboard">
            <div class="card-body">
              <!-- Trigger Play Button -->
              <div id="btn-trigger-play">
                <button type="button" class="btn btn-info" @click="setTimer">Play</button>
                <hr>
              </div>
              <div class="card shadow timer">
                <div class="card-body">
                  <div>
                    Timer:
                  </div>
                  <div>
                    10
                  </div>
                </div>
              </div>
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
        <div class="col-3 d-flex flex-column justify-content-center gameboard-side">
          <div class="card shadow gameboard">
            <div class="card-body">
              <div>
                <div class="scoreboard">
                  <div class="card scoreboard-card">
                    <div class="card-body">
                      <h3>Scoreboard</h3>
                      <div class="scoreboard-table">
                        <table class="table table-bordered" style="font-size: 0.8em;">
                          <col style="width: 9em;" />
                          <col style="width: 1em;" />
                          <tr>
                            <td class="align-middle text-left">
                              <span class="username-scoreboard"> avatar</span>
                              <span class="username-scoreboard"> username</span>
                            </td>
                            <td class="align-middle">skor</td>
                          </tr>
                          <tr>
                            <td>Halo</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Halo</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Halo</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Halo</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Halo</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Halo</td>
                            <td>0</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- chat board bisa nih di tambahin disini -->
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'Gameplay',
  data () {
    return {}
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
