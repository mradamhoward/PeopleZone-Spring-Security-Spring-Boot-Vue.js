<template>
    <nav>
    <div class="width-corrector"><router-link to="/" class="brand">PeopleZone</router-link></div>
    
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
        <router-link to="/profile" class="link"><i class="fa fa-user"></i></router-link>
        <router-link to="/login" class="link">Login</router-link>
        <router-link to="/register" class="link">Sign Up</router-link>
    </div>
    </div>
</nav>
</template>

<script>

export default {
    data(){
        return {
            searchText: '',
            attribute: 'all'
        };
    },
   

    methods: {
        submitForm(){
            this.$router.push({ path: '/search', query : { q : this.searchText}})
        }
    }
}
</script>

<style scoped>

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
    height: 45px;
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