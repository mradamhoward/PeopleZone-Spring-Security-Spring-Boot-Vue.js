<template>
<div class="flex-row">
    <div class="container">
        <div class="person-more-wrapper">
            <div class="row-wrapper">
            <div class="left">
                
                <h3 class="firstname">First Name: {{ person.firstName }}</h3>
                <h3 class="surname">Surname: {{ person.surName }} </h3>
                <h5 class="age">Age: {{ person.age }}</h5>
                <h5 class="age">DOB: {{ dateTime }}</h5>
                <h5 class="home">Address: {{ person.homeAddress }}</h5>
                <p class="desc">Description: {{ person.description }}</p>
                <h5 class="gender">Gender: {{ person.gender }}</h5>
                <h5 class="email">Email: {{ person.emailAddress }}</h5>
                <h5 class="phone">Phone: {{ person.phoneNumber }}</h5>
                <h5>Website: </h5>
                <a class="website" :href="website">{{ person.websiteAddress }}</a>
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
    <div class="container x">
        <div class="person-more-wrapper green">
            <h3 class="center">Edit Details for {{ person.firstName + ' ' + person.surName}}</h3>
            <form @submit.prevent="submitForm">
                <input type="text" class="form-control width" :placeholder="'First name: ' + person.firstName" v-model="person.firstName"/>
                <input type="text" class="form-control width" :placeholder="'Surname: ' + person.surName" v-model="person.surName"/>
                <input type="number" class="form-control width" :placeholder="'Age: ' +person.age" v-model="person.age"/>
                <input type="date" class="form-control width" v-model="dateFormat" />
                <input type="text" class="form-control width" :placeholder="'Address: ' + person.homeAddress" v-model="person.homeAddress"/>
                <input type="text" maxlength="200" class="form-control width" :placeholder="'Description: ' + person.description" v-model="person.description"/>
                <div class="f"><label for="genderB">Gender: </label>
                <input type="checkbox" class="c" id="genderB" name="genderB"  v-model="genderBoolean" />
                 <label for="driver">Drivers Licence: </label>
                <input type="checkbox" class="c" id="driver" :value="person.driversLicence" name="driverCheck" v-model="person.driversLicence"/></div>
                <input type="email" class="form-control width" :placeholder="'Email: ' +person.emailAddress" v-model="person.emailAddress"/>
                <input type="tel" class="form-control width" :placeholder="'Phone: ' +person.phoneNumber" v-model="person.phoneNumber"/>
                <input type="url" class="form-control width" :placeholder="'Website: ' + person.websiteAddress" v-model="person.websiteAddress"/>
                <input type="text" class="form-control width" :placeholder="'Qualification: ' + person.highestEducationQualification" v-model="person.highestEducationQualification"/>
                <input type="text" class="form-control width" :placeholder="'Occupation: ' +person.occupation" v-model="person.occupation"/>
                <input type="text" class="form-control width" :placeholder="'Employer: ' +person.employer" v-model="person.employer"/>
                <input type="text" class="form-control width" :placeholder="'College: ' +person.college" v-model="person.college"/>
                <input type="text" class="form-control width" :placeholder="'School: ' + person.school" v-model="person.school"/>
                <input type="text" class="form-control width" :placeholder="'Eye color: ' + person.eyecolor" v-model="person.eyecolor"/>
                <input type="number" class="form-control width" :placeholder="'Weight (lbs): ' + person.weight" v-model="person.weight"/>
                <input type="number" class="form-control width" :placeholder="'Height (cm): ' + person.height" v-model="person.height"/>
               
                <input type="text" class="form-control width" :placeholder="'Image URL: ' +person.image" v-model="person.image"/>
                <button type="submit" class="btn-block">Update</button>
                <button type="button" class="btn-block red" @click="deletePerson(person.id)">Delete</button>
                <button type="button" class="btn-block" @click="exportPerson(person.id)">Export</button>
            </form>
            
        </div>
    </div>
</div>
    
   
</template>

<script>
import axios from 'axios';
import authHeader from '../services/auth-header.js';    
//import Datepicker from 'vuejs-datepicker';

export default {
    
    data(){
        return {
            person: {
                firstName: '',
                surName: '',
                age: 0,
                description: '',
                occupation: '',
                employer: '',
                college: '',
                school: '',
                homeAddress: '',
                gender: '',
                websiteAddress: '',
                higestEducationQualification: '',
                weight: 0,
                height: 0,
                image: '',
                driverLicence: false,
                eyecolor: '',
                phoneNumber: 0,
                emailAddress: '',
                dob: Date,
                
            },
            dateFormat: '',
            genderBoolean: true
        };
    },
    
    computed: {
        dateTime(){
            var dateString = null;
            try {
                const x = this.person.dob.toISOString();
                const d = x.substring(0, 10);
                console.log(x);
                dateString  = d.substring(0,4) + '/' + d.substring(5,7) + '/' + d.substring(8,10);
            } catch (error){
                console.log(error);
            }
              return dateString;
    
               
        },
        website(){
            const website = this.person.websiteAddress;
            if(website.substring(0,8) !== 'https://' || website.substring(0,7) !== 'http://'){
                const newStr = 'https://' + website;
                return newStr;
            } else {
                return website;
            }
        }
       
    },
    watch:{
        dateFormat(){
            this.person.dob = new Date(this.dateFormat);
            //console.log(this.dateFormat)
        },
        genderBoolean(){
            if(this.genderBoolean){
                this.person.gender = 'M';
            } else {
                this.person.gender = 'F';
            }
            
        }
    },
    methods: {
        getPerson(){
            axios.get("http://localhost:8082/person?id=" + this.$route.params.personId,  { headers: authHeader()}).then(response => {
                this.person = response.data;
                const d = this.person.dob.substring(0, 10);
                this.dateFormat = d.substring(0,4) + '-' + d.substring(5,7) + '-' + d.substring(8,10);
            });
          
        },
        submitForm(){
            this.updatePerson();    
        },
        updatePerson(){
             axios.put("http://localhost:8082/updatePerson?id=" + this.$route.params.personId, this.person, { headers: authHeader(), }).then(response => {
                 if(response.status === 200){
                     alert(this.person.firstName + ' ' + this.person.surName + ' successfully updated');
                 } else{
                     alert('update failed');
                 }
             })
        },
        deletePerson(id){
            console.log(id);
            axios.delete("http://localhost:8082/deletePerson?id=" + this.$route.params.personId, { headers: authHeader(), }).then(response => {
                if(response.status == 200){
                    alert(this.person.firstName + ' ' + this.person.surName + ' successfully deleted');
                    this.$router.push('/')
                } else {
                    alert('failed');
                }
            })
           
        },
        exportPerson(id){
            console.log(id);
            axios.get("http://localhost:8082/exportPerson?id=" + id, { headers: authHeader(), }).then(response => {
                if(response.status == 200){
                    window.location.replace("http://localhost:8082/" + response.data)
                } else {
                    alert('failed');
                }
            })
           
        },
    },
    created(){
        this.getPerson();
    },
    

}
</script>

<style scoped>
p{
    margin: 2px;
}
.center
{
    text-align: center;
    width: 100%;
}
.btn-block{
    display: block;
    width: 345px;
    margin: 2px auto;
    background-color: green;
    color: white;
    border: none;
    border-radius: 3px;
    height: 30px;
}
.c, label{
    display: block;
    margin-left: 25px !important;
    border-radius: 10px;
    margin-bottom: 5px;
    
}

.f{
    display: flex;
}

.red{
    background-color: red;
}
.row-wrapper{
    display: flex;
    width: 100%;
    height: 600px;
}
.flex-row{
    display: flex;
    width: 80%;
    margin: 0 auto;
}
.green{
    background-color: green;

}
.width{
    width: 40%;
    margin-bottom: 5px;
}
.left{
    display: flex;
    flex-direction: column;
    width: 70%;
    flex-wrap: wrap;
    gap: 0;
    max-height: 600px;
    border-radius: 3px;
}

h5{
    line-height: 0.3;
    margin: 11px 0;
    padding: 0;
}

h3{
    line-height: 0.3;
    margin: 12px 0;
    padding: 0;
}

input[type=checkbox]{
    margin-left: 15px;
}
input{
    font-family: 'Lato', sans-serif;
}
.right{
    width: 30%;
    height: 100%;
    border-radius: 3px;
}
.person-img{
    height: 300px;
    width: 100%;
    display: block; 

   
}

.form-control{
    margin-left: auto;
    margin-right: auto;
}
.container{
    width: 800px;
    height: 450px;
    display: block;
    margin: 0 auto 100px auto;
}

.person-more-wrapper{
    width: 100%;
    height: 550px;
    margin: 10px;
    padding: 15px;
    background-color: #ccc;
    display: block;
      border-radius: 3px;
}

form{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
      max-height: 500px;
}
</style>