<template>
  <div class="home">
    <div class="container d-flex justify-content-center main-home">
      <div class="align-self-center">
        <div class="card welcome-card">
          <div class="card-body d-flex flex-column justify-content-center">
            <div class="align-self-center">
              <img class="logo" src="../assets/newlogo.png" alt="logo">
              <h1 class="welcome-title">Selamat Datang !</h1>
              <form @submit.prevent="login">
                <input type="text" placeholder="username">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.justify-content-center {
  background-color: #10ac84;
  border-radius: 5%;
}

.home {
  background-color: #10ac84;
}

.main-home {
  width: 100vw;
  height: 100vh;
}

.welcome-card {
  box-shadow: 0px 3px 15px rgba(0,0,0,0.4);
  border-radius: 25px !important;
  width: 48vw;
  height: 60vh;
  background-color: #10ac84;
}
.welcome-card-body {
  margin: auto;
}
.welcome-title {
  color: #3c5da3;
  margin-bottom: 32px;
}
.logo {
  width: 20vw;
}
form input[type=text] {
  border: 0;
  border-radius: 5px;
  height: 5vh;
  width: 30vw;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3)
}
::placeholder {
  text-align: center;
  font-size: 25px;
  color: #3c5da3;
}
input {
  text-align: center;
  font-size: 25px;
  color: #3c5da3;
}
</style>
