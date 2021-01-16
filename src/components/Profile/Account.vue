<template>
<div class="container">
    <h4 id="id">ID: {{ getUser.id }}</h4>
    <h4 id="email">Email: {{ getUser.email }}</h4>
    <input type="email" :placeholder="getUser.email" class="text-input">
    <h4>Roles</h4>
    <ol class="roles">
        <li class="role" v-for="role in getRole" :key="role"><h5>{{ role }}</h5></li>
    </ol>
    <a href="" class="link save">Save</a>
    <router-link to="/logout" class="link">Logout</router-link>
</div>

  
</template>

<script>
export default {
    computed: {
        getUser(){
            return this.$store.state.auth.user;
        },
        getRole(){
            let roles = [];
            for(let role of this.$store.state.auth.user.roles){
                if(role == 'ROLE_USER'){
                    roles.push('USER');
                } else if (role == 'ROLE_ADMIN' ){
                    roles.push('ADMINISTRATOR');
                } else if (role == 'ROLE_MODERATOR'){
                    roles.push('MODERATOR');
                }
            }
            return roles;
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
  width: 45%;
  height: 35px;
  line-height: 2;
  border-radius: 5px;
  background-color: red;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  color: white;
  margin-top: 10px;
  margin-right: 2px;
  margin-left: 4px;
}

ul.roles{
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