<template>
  <div class="container">
    <header class="jumbotron">
      <h2>To begin, search for someone in the search bar above or create a new user below.</h2>
      <button class="addPerson" @click="addPerson()">Add Person</button>
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  methods: {
    addPerson(){
      this.$router.push('/person/add');
  }
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>

<style scoped>
header{
  width: 80%;
  height: 600px;
  background-color: #ccc;
  display: block;
  margin: 0 auto;
  padding: 15px;
}

h2{
  text-align: center;
}

.addPerson{
  width: 200px;
  height: 30px;
  background-color: blue;
  display: block;
  margin: 0 auto;
  color: white;
  border: none;
  border-radius: 3px;
}
</style>