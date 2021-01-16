<template>
    <div class="contain">
        <div class="person-more-wrapper green">
            <h3 class="center">Add Person</h3>
            <form @submit.prevent="createPerson">
                <div class="left">
                    
                 <input type="text" class="form-control width" :placeholder="'First name: ' + person.firstName" v-model="person.firstName"/>
                <input type="text" class="form-control width" :placeholder="'Surname: ' + person.surName" v-model="person.surName"/>
                <input type="number" class="form-control width" :placeholder="'Age: ' +person.age" v-model="person.age"/>
                <input type="date" class="form-control width" v-model="dateFormat" />
                <input type="text" class="form-control width" :placeholder="'Address: ' + person.homeAddress" v-model="person.homeAddress"/>
                <input type="text" maxlength="200" class="form-control width" :placeholder="'Description: ' + person.description" v-model="person.description"/>
                
                
                <input type="email" class="form-control width" :placeholder="'Email: ' +person.emailAddress" v-model="person.emailAddress"/>
                <input type="tel" class="form-control width" :placeholder="'Phone: ' +person.phoneNumber" v-model="person.phoneNumber"/>
                <input type="url" class="form-control width" :placeholder="'Website: ' + person.websiteAddress" v-model="person.websiteAddress"/>
                <label for="genderB" class="check">Gender: </label>
                <input type="checkbox" class="check" id="genderB" name="genderB"  v-model="genderBoolean" />
                 <label for="driver" class="check">Drivers Licence: </label>
                 <input type="checkbox" class="check" id="driver" :value="person.driversLicence" name="driverCheck" v-model="person.driversLicence"/>
                </div>
                <div class="right">
                
                <input type="text" class="form-control width" :placeholder="'Qualification: ' + person.highestEducationQualification" v-model="person.highestEducationQualification"/>
                <input type="text" class="form-control width" :placeholder="'Occupation: ' +person.occupation" v-model="person.occupation"/>
                <input type="text" class="form-control width" :placeholder="'Employer: ' +person.employer" v-model="person.employer"/>
                <input type="text" class="form-control width" :placeholder="'College: ' +person.college" v-model="person.college"/>
                <input type="text" class="form-control width" :placeholder="'School: ' + person.school" v-model="person.school"/>
                <input type="text" class="form-control width" :placeholder="'Eye color: ' + person.eyecolor" v-model="person.eyecolor"/>
                <input type="number" class="form-control width" :placeholder="'Weight (lbs): ' + person.weight" v-model="person.weight"/>
                <input type="number" class="form-control width" :placeholder="'Height (cm): ' + person.height" v-model="person.height"/>
               
                <input type="text" class="form-control width" :placeholder="'Image URL: ' +person.image" v-model="person.image"/>
                <button type="submit" class="btn-block">Create</button>
                </div>
               
               
            </form>
            
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
                firstName: '',
                surName: '',
                age: 0,
                description: '',
                occupation: '',
                employer: '',
                college: '',
                school: '',
                homeAddress: '',
                gender: 'M',
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
         createPerson(){
             axios.post("http://localhost:8082/createPerson", this.person, { headers: authHeader(), }).then(response => {
                 if(response.status === 200){
                     alert(this.person.firstName + ' ' + this.person.surName + ' successfully updated');
                 } else{
                     alert('update failed');
                 }
             })
        },
    }
}
</script>

<style scoped>
form{
    display: flex;
    width: 100%;
    margin: 0 auto;
}
.person-more-wrapper{
    width: 800px;
    height: 600px;
    margin: 0 auto;
    padding: 15px;
    display: block; 
    background-color: #ccc;
}
.right{
    width: 48%;
    height: 600px;
    margin-right: auto;
}

input[type=text]:focus, input[type=date]:focus, input[type=url]:focus,input[type=number]:focus,input[type=email]:focus,input[type=tel]:focus{
    outline-width: 0;
      border: 2px solid purple;
}


.left{
    margin-left:auto;
    width: 48%;
    height: 700px;
}

.form-control{
    width: 90%;
    display: block;
    margin: 5px auto;
}
.check{
    display: inline-block;
    margin-left: 20px;
}
.btn-block{
    display: block;
    width: 90%;
    margin: 2px auto;
    background-color: green;
    color: white;
    border: none;
    border-radius: 3px;
    height: 30px;
}


label{
    text-align: center;
    color: black;
}
h3{
    text-align: center;
    color: black;
}
</style>