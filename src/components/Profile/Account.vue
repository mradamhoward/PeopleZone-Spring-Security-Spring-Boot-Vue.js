<template>
<div class="container">
  <h1 class="title">Account</h1>
    <h4 id="id">ID: {{ getUser.id }}</h4>
    <h4 id="email">Email: {{ getUser.email }}</h4>
    <input type="email" :placeholder="getUser.email" class="text-input">
    <h4>Roles</h4>
    <ul class="roles">
        <li class="role" v-for="role in getUser.roles" :key="role"><h5>{{ role }}</h5></li>
    </ul>
    <a href="" class="link save">Save</a>
    <router-link to="/logout" class="link">Logout</router-link>
</div>

  
</template>

<script>
export default {
    computed: {
        getUser(){
            return this.$store.state.auth.user;
        }
    }
}
</script>

<style scoped>
.container{
    width: 60%;
    height: 100%;
    display: block;
    margin: 0 auto;
}

.link{
  width: 50%;
  height: 35px;
  line-height: 2;
  border-radius: 3px;
  background-color: red;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  color: white;
  margin-top: 10px;
}

ul.roles{
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
}

.save{
    background-color: green;
}

.title{
    display: block;
    margin: 0 auto;
    text-align: center;
}

#email{
    margin-top: 10px;
    line-height: 0.5;

}

.text-input{
    border-radius: 3px;
    border: none;
    margin: 5px 0;
    width: 100%;
    height: 25px;
    padding-left: 10px;
}
</style>