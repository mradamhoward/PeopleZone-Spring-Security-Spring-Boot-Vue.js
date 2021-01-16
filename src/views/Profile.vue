<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>

    <ul class="tabs">
      <li class="tab"><router-link class="tab-link" to="/profile/account"><i class="fas fa-users"></i> Account</router-link></li>
      <li class="tab"><router-link class="tab-link" to="/profile/privacy"><i class="fas fa-user-secret"></i> Privacy</router-link></li>
      <li class="tab"><router-link class="tab-link" to="/profile/settings"><i class="fas fa-cog"></i> Settings</router-link></li>
      <li class="tab"><router-link class="tab-link" to="/profile/data"><i class="fas fa-database"></i> Data</router-link></li>
      <li class="tab"><router-link class="tab-link" to="/profile/advanced"><i class="fas fa-plus"></i> Advanced</router-link></li>
    </ul>

    <router-view name="p"></router-view>

    <!--
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>
    -->
    
 
  </div>

</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.container{
  width: 50%;
  height: 100%;
  margin: 0 auto;
  background-color: #ccc;
  border-radius: 3px;
  padding: 10px;
}

.jumbotron{
  background-color: #aaa;
}

h3{
  font-size: 16pt;
  width: 100%;
  text-align: center;
}

p{

}

ul.tabs{
  display: flex;
  margin: 0 auto;
  justify-items:center;
  justify-content: space-between;
  width: 90%;

}

ul.tabs li a {
  text-decoration: none;
  color: black;
  font-size: 16pt;
}

ul {
list-style: none;
}

.link{
  width: 200px;
  height: 35px;
  line-height: 2;
  border-radius: 3px;
  margin: 0 auto;
  background-color: red;
  text-decoration: none;
  text-align: center;
  display: block;
  color: white;
}

ul, p, h3{
  font-family: Arial, Helvetica, sans-serif;
}
</style>