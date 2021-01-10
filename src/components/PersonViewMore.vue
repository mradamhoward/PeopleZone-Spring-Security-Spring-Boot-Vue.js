<template>

    <div class="container">
        <div class="person-more-wrapper">
            <div class="row-wrapper">
            <div class="left">
                
                <h3 class="firstname">First Name: {{ person.firstName }}</h3>
                <h3 class="surname">Surname: {{ person.surName }} </h3>
                <h5 class="age">Age: {{ person.age }}</h5>
                <h5 class="home">Address: {{ person.homeAddress }}</h5>
                <h5 class="desc">Description: {{ person.description }}</h5>
                <h5 class="gender">Gender: {{ person.gender }}</h5>
                <h5 class="email">Email: {{ person.emailAddress }}</h5>
                <h5 class="phone">Phone: {{ person.phoneNumber }}</h5>
                <h5 class="website">Website: {{ person.websiteAddress }}</h5>
                <h5 class="edu">Qualification: {{ person.highestEducationQualification }}</h5>
                <h5 class="occ">Occupation: {{ person.occupation }}</h5>
                <h5 class="employer">Employer: {{ person.employer }}</h5>
                <h5 class="college">College: {{ person.college }}</h5>
                <h5 class="school">School: {{ person.school }}</h5>
                <h5 class="eyecolor">Eyecolor: {{ person.eyecolor }}</h5>
                <h5 class="weight">Weight: {{ person.weight }}</h5>
                <h5 class="height">Height: {{ person.height }}</h5>
                <h5 class="hasdrivers">Drivers Licence: {{ person.driversLicence }}</h5>
            </div>
             <div class="right">
                
                
                <img :src="person.image" alt="" class="person-img">
             </div>
            </div>
        
       </div>
    </div>
   
</template>

<script>
import axios from 'axios';
import authHeader from '../services/auth-header.js';    

export default {
    
    data(){
        return {
            person: {
                firstName: ''
            }
        };
    },
    methods: {
        getPerson(){
            axios.get("http://localhost:8082/person?id=" + this.$route.params.personId,  { headers: authHeader()}).then(response => {
                this.person = response.data;
            });
        }
    },
    created(){
        this.getPerson();
    },
    

}
</script>

<style scoped>
.row-wrapper{
    display: flex;
    width: 100%;
}

.left{
    display: flex;
    flex-direction: column;
    width: 70%;
    flex-wrap: wrap;
    gap: 0;
}

h5{
    line-height: 0.3;
    margin: 12px 0;
    padding: 0;
}

h3{
    line-height: 0.3;
    margin: 12px 0;
    padding: 0;
}

.right{
    width: 30%;
    height: 100%;
}
.person-img{
    width: 100%;
    height: 100%;
}
.container{
    width: 800px;
    height: 100vh;
    display: block;
    margin: 0 auto;
}

.person-more-wrapper{
    width: 100%;
    height: 500px;
    margin: 10px;
    padding: 15px;
    background-color: #ccc;
    display: block;
}

</style>