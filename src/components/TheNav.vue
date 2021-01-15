<template>
<div class="click-handle" >
    <nav>
    <a class="brand" @click="sideDrawerToggle"><i class="fa fa-bars"></i></a>
    <div class="width-corrector"><router-link to="/" class="brand">PeopleZone</router-link></div>
    <div class="sidedrawer" v-if="sideDrawer">
        <div class="hamholder"> <a class="side-ham" @click="sideDrawerToggle"><i class="fa fa-times"></i></a>
   </div>
        <router-link to="/" class="side-item">Vue.js</router-link>
        <router-link to="/" class="side-item">Spring Boot</router-link>
        <router-link to="/" class="side-item">CSS</router-link>
        <router-link to="/" class="side-item">Vue.js</router-link>
        <router-link to="/" class="side-item">Spring Boot</router-link>
        <router-link to="/" class="side-item">CSS</router-link>
        <router-link to="/" class="side-item">Vue.js</router-link>
        <router-link to="/" class="side-item">Spring Boot</router-link>
        <router-link to="/" class="side-item">CSS</router-link>
        <router-link to="/" class="side-item">Vue.js</router-link>
        <router-link to="/" class="side-item">Spring Boot</router-link>
        <router-link to="/" class="side-item">CSS</router-link>
        <router-link to="/" class="side-item">Vue.js</router-link>
        <router-link to="/" class="side-item">Spring Boot</router-link>
        <router-link to="/" class="side-item">CSS</router-link>
        <router-link to="/" class="side-item">Vue.js</router-link>
        <router-link to="/" class="side-item">Spring Boot</router-link>
        <router-link to="/" class="side-item">CSS</router-link>
        <router-link to="/" class="side-item">Vue.js</router-link>
        <router-link to="/" class="side-item">Spring Boot</router-link>
        <router-link to="/" class="side-item">CSS</router-link>
        <router-link to="/" class="side-item">Vue.js</router-link>
        <router-link to="/" class="side-item">Spring Boot</router-link>
        <router-link to="/" class="side-item">CSS</router-link>
        <router-link to="/" class="side-item">Vue.js</router-link>
        <router-link to="/" class="side-item">Spring Boot</router-link>
        <router-link to="/" class="side-item">CSS</router-link>
        <router-link to="/" class="side-item">Vue.js</router-link>
        <router-link to="/" class="side-item">Spring Boot</router-link>
        <router-link to="/" class="side-item">CSS</router-link>
    </div>
    <div class="search-group">
        <form @submit.prevent="submitForm">        
        <input type="text" class="searchBox" placeholder="Search for people" v-model="searchText" v-on:keyup.enter="submitForm">
       <!-- <select name="attribute" id="attribute" v-model="attribute" v-on:change="submitForm">
            <option value="all">All Attributes</option>
            <option value="firstName">First Name</option>
            <option value="surName">Surname</option>
            <option value="age">Age</option>
            <option value="desc">Description</option>
            <option value="email">Email Address</option>
            <option value="website">Website</option>
            <option value="gender">Gender</option>
            <option value="phone">Phone</option>
            <option value="homeAddress">Home Address</option> 
            <option value="edu">Education Level</option>
            <option value="occupation">Occupation</option>
            <option value="employer">Employer</option>
            <option value="college">College</option>
            <option value="school">School</option>
            <option value="eye">Eye Color</option>
            <option value="weight">Weight</option>
            <option value="height">Height</option>
            <option value="pps">PPS Number</option>
            <option value="iban">Bank IBAN</option>
        </select>-->
        </form>

    </div>
    <div class="width-corrector">
    <div class="account">
       <!-- <router-link to="/profile" class="link"><i class="fa fa-user"></i></router-link>    
        <router-link to="/login" class="link">Login</router-link>
        <router-link to="/register" class="link">Sign Up</router-link>-->
        <a class="accountbtn link" @click="showAccountMenu()"><i class="fa t" :class="showMenu ? 'fa-times' : 'fa-user'"></i></a>
        <div class="menu" v-if="showMenu" :class="loggedIn ? 'menu' : 'menuout'">
            <router-link to="/login" v-if="!loggedIn" class="menu-item green" @click="closeMenu()">Login</router-link>
            <router-link to="/register" v-if="!loggedIn" class="menu-item green" @click="closeMenu()">Sign up</router-link>
            <router-link to="/" v-if="loggedIn" class="menu-item green" @click="closeMenu()">Home</router-link>
            <router-link to="/pay" v-if="loggedIn" class="menu-item green" @click="closeMenu()">Pay</router-link>
            <router-link to="/search?q=" v-if="loggedIn" class="menu-item green" @click="closeMenu()">All Persons</router-link>
            <router-link to="/register" v-if="loggedIn" class="menu-item red" @click="closeMenu()">Sign Up</router-link>
             <router-link to="/profile" v-if="loggedIn" class="menu-item green" @click="closeMenu()">Profile</router-link>
            <router-link to="/person/add" v-if="loggedIn" class="menu-item green" @click="closeMenu()">Add Person</router-link>
            <router-link to="/upload/file" v-if="loggedIn" class="menu-item green" @click="closeMenu()">Upload File</router-link>
            <router-link to="/logout" v-if="loggedIn" class="menu-item red" @click="closeMenu()">Logout</router-link>
        </div>
    </div>
    </div>
</nav>
</div>
</template>

<script>

export default {
    data(){
        return {
            searchText: '',
            attribute: 'all',
            showMenu: false,
            sideDrawer: false
        };
    },
   computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },

    methods: {
        submitForm(){
            this.$router.push({ path: '/search', query : { q : this.searchText}})
            this.sideDrawer = false;
            this.closeMenu();
        },
        showAccountMenu(){
            this.showMenu = !this.showMenu;
        },
        closeMenu(){
            this.showMenu = false;
        },
        sideDrawerToggle(){
            this.sideDrawer = !this.sideDrawer;
            this.showMenu = false;
        }
    }
}
</script>

<style scoped>
@keyframes example {
  0%   {left: -200px;}
  25%  {left: -150px;}
  50%  {left: -100px;}
  75% {left: -50px;}
  100% {left: 0px;}
}
.sidedrawer{
    width: 200px;
    height: 100vh;
    background-color: #ccc;
    position: fixed;
    left: 0;
    top: 0px;
    overflow-y: scroll;
    animation: bubble 1.0s forwards;
    animation-name: example;
    animation-duration: .2s;
    animation-timing-function: linear;
}

.sidedrawer

.hamholder{
    width: 100%;
    height: 75px;
    top: 0px;
    background-color: darkblue;
}
.side-ham{
    display: block;
    margin-left: 40px;
    text-decoration: none;
    font-size: 14pt;
    font-family: Arial;
    color: white;
    padding: 0;
    line-height: 75px;
}

.sidedrawer::-webkit-scrollbar {
    width: 12px;
}
.sidedrawer::-webkit-scrollbar-track {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);      
}
.sidedrawer::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.side-item{
    display: block;
    width: 100% - 30px;
    height: 40px;
    background-color:cornflowerblue;
    color: white;
    text-decoration: none;
    line-height: 2.5;
    padding-left: 30px;
    border-bottom: 1px solid darkgrey;
}
.side-item:hover{
    background-color: #bbb;
}
.menu{
    height: 320px;
    width: 200px;
    border-radius: 5px;
    background-color: white;
    position: fixed;
    right: 10px;
    top: 80px;
    border: 1px solid darkgray;
}

.menuout{
    height: 80px;
    width: 200px;
    border-radius: 5px;
    background-color: white;
    position: fixed;
    right: 10px;
    top: 80px;
    border: 1px solid darkgray;
}



.accountbtn{
    margin: 6px 35px 10px 0px !important; 
   
}
.t{
 font-size: 24pt;
}
.menu-item{
    text-decoration: none;
    line-height: 2.5;
    width: 100%;
    color: black;
    text-align: center;
    border-radius: 2px; 
    display: block;
}



.menu-item:hover{
    background-color: blue;
    color: white;
}

.menu-item a:hover{
   
}

form{
    width: 100%;
    height: 45px;
}
nav {
    display: flex;
    background-color: darkblue;
    height: 60px;
    padding-top: 15px;
}

.search-group{
    width: 650px;
    display: flex;
    margin: 0 auto;
}

.searchBox{
    width: 100%;
    height: 46px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url('../assets/searchicon.png');
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    vertical-align:middle;
    border-radius: 23px;
}
input.searchBox:focus{
    outline-width: 0;
}

select {
    flex-direction: row;
    width: 30%;
    height: 45px;
    flex-direction: row;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    font-size: 16px;
    background-color: white;
    padding: 12px 20px 12px 20px;
     vertical-align:middle;
}

.width-corrector{
    display: block;
    width: 300px;
    height: 100%;
}


.brand{
    display: block;
    margin: 10px 0px 10px 35px;
    text-decoration: none;
    font-size: 14pt;
    font-family: Arial;
    color: white;
}

.link
{
    display: block;
    margin: 10px 35px 10px 0px;
    text-decoration: none;
    font-size: 14pt;
    color: white;
    float: right;
}

</style>