<template>
<div>
<div class="main-wrapper">
<div class="selects">
    <h5 class="numr">Number of Results: </h5>
     <select name="numResults" id="numResults" v-model="numResults" v-on:change="changeNumResults">
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
        </select>
        <h5 class="sortby">Sort by: </h5>
        <select name="sortBy" id="sort" v-model="sortBy" v-on:change="changeNumResults">
            <option value="firstName">First Name</option>
            <option value="surName">Surname</option>
            <option value="age">Age</option>
            <option value="description">Description</option>    
            <option value="emailAddress">Email Address</option>
            <option value="websiteAddress">Website</option>
            <option value="gender">Gender</option>
            <option value="phoneNumber">Phone</option>
            <option value="homeAddress">Home Address</option> 
            <option value="highestEducationQualification">Education Level</option>
            <option value="occupation">Occupation</option>
            <option value="employer">Employer</option>
            <option value="college">College</option>
            <option value="school">School</option>
            <option value="eyecolor">Eye Color</option>
            <option value="weight">Weight</option>
            <option value="height">Height</option>
            <option value="PPSnumber">PPS Number</option>
    
            <option value="bankIBAN">Bank IBAN</option>
        </select>
        <label for="asc">Ascending: </label>
        <input type="checkbox" name="ascending" id="asc" v-model="ascending" v-on:change="changeNumResults">
        </div>
        
<div class="grid">
    <div v-for="person in persons" :key="person.id" class="person-wrapper">
        <div class="flex-wrapper">
            <div class="vertical-basic-info">
                <h3 class="firstName">Firstname: {{ person.firstName }}</h3>
                <h3 class="surName">Surname: {{ person.surName }}</h3>
                <h5 class="age">Age: {{ person.age }}</h5>
                <h5 class="gender">Gender: {{ person.gender }}</h5>
                <p class="home-address">Address: {{ person.homeAddress }}</p>
            </div>
            <div class="img-button-container">
                <img :src="person.image" alt="" class="img-person">
                <button class="view-more" @click="viewMore(person.id)">View More Information</button>
            </div>
       
    </div>

    </div>


</div>

     
<div class="pagination" v-if="showPagination">
    <div class="pagination-link-wrapper"> 
        
        <a @click="decreasePage">&laquo;</a>
        <a @click="changePage(getPaginitionIndex - 1 )" :class="getPaginitionIndex == (page + 1) ? 'act' : 'none'">{{ getPaginitionIndex }}</a>
        <a @click="changePage(getPaginitionIndex )" :class="(getPaginitionIndex + 1) == (page + 1) ? 'act' : 'none'">{{ getPaginitionIndex + 1 }}</a>
        <a @click="changePage(getPaginitionIndex + 1 )" :class="(getPaginitionIndex + 2) == (page + 1) ? 'act' : 'none'">{{ getPaginitionIndex + 2 }}</a>
        <a @click="changePage(getPaginitionIndex + 2)" :class="(getPaginitionIndex + 3) == (page + 1) ? 'act' : 'none'">{{ getPaginitionIndex + 3 }}</a>
        <a @click="changePage(getPaginitionIndex + 3)" :class="(getPaginitionIndex + 4) == (page + 1) ? 'act' : 'none'">{{ getPaginitionIndex + 4 }}</a>
        <a @click="increasePage">&raquo;</a></div>
   
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
            persons: null,
            page: 0,
            toSearch: '',
            attr: 'all',
            numResults: 20,
            sortBy: 'firstName',
            ascending: true,
            pageinationIndex: 1,
            showPagination: true
        };
    },
    watch: {
        $route : {
           handler: function(){
             this.getData()
           },
           immediate: true
        }
    },
    methods: {
        changePage(page){
            if(page > 0){
                this.page = page;
                this.pageinationIndex = page;
            } else if(page == 0) {
                this.page = 0;
                this.pageinationIndex = 1;
            }
                

           
            this.getData();
        },
         changeNumResults(){
            this.getData();       
        },
        getData(){
            axios.get("http://localhost:8082/search?q=" + this.$route.query.q+ "&page=" + this.page + "&numResults=" + this.numResults + "&sortBy=" + this.sortBy + "&ascending=" + this.ascending,  { headers: authHeader()}).then(response => {
                this.persons = response.data;
            }).then(() => {
                this.showPaginationCalc();  
            }); 
            
        },
        viewMore(id){
            this.$router.push("/person/" + id);
        }, 
        increasePage(){
            this.page = this.page + 1;
            this.pageinationIndex = this.page;
            this.getData();
        },
        decreasePage(){
            if(this.page > 1){
                this.page = this.page - 1;
                this.pageinationIndex = this.page;
            } else if(this.page == 0) {
                this.pageinationIndex = 1;
                this.page = 0;
            } else if(this.page == 1){
                this.pageinationIndex = 1;
                this.page = 0;
            }
            this.getData();
        },
        showPaginationCalc(){
            if(this.persons.length < this.numResults){
                this.showPagination = false;
            } else {
                this.showPagination = true;
            }
        }
    }, 
    computed: {
        getPaginitionIndex(){
            if(this.page >= 2) {
                return this.pageinationIndex - 1;
            } else if(this.page == 0){
                return this.pageinationIndex 
            } else if(this.page == 1){
                return this.pageinationIndex 
            } else {
                return this.pageinationIndex;
            }
        },

        
    }
}
    </script>

    <style scoped>



    .main-wrapper{
        height: 1250px;
        width: 100%;
    }

#numResults, #sort{
    width: 30%;
    height: 45px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    font-size: 16px;
    background-color: white;
    padding: 12px 20px 12px 20px; 
}

.act{
    background-color: grey !important;
}

#sort{
     margin-right: auto;
}


.sortby{
    color: white;
    margin: auto 5px;  
}
    .pagination {
    display: inline-block;
    margin: 50px auto 0 auto;
    width: 100%;
  }

  .pagination-link-wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px auto 0px auto;
      width: 50%;
      height: 50px;
  }


  
  .pagination a {
    border-radius: 2px;
    color: white;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    border: 1px solid #ddd;
    background-color: blue;
  }

  .people-container{
    width: 800px;
    height: 100%;
    display: block;
    margin: 0 auto;
}

.person-wrapper{
    width: 90%;
    height: 300px;
    border-radius: 5px;
    padding: 0 15px;
}


#pageDisplay{
    text-align: center;
    color: white;
    }


  @media only screen and (max-width: 768px){
      .grid{
    width: 98%;
    height: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    gap: 5px;
    margin: 0 auto;
      }
    .selects{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 25px;
    width: 800px;
    margin-right: auto;
    }

  label{
      color: white;
  }

  #asc{
  }

      .numr{
   color: white;
   margin-right: 5px;
}


}

  

  

  @media only screen and (min-width: 769px){
      .grid{
    width: 98%;
    height: auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    margin: 0 auto;
}
  .selects{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 25px;
    width: 800px;
    margin-right: auto;
    margin-left: auto;
    }


  label{
      color: white;
      margin: auto 5px;
  }
  
    .numr{
   color: white;
   margin-right: 5px;
    margin-left: auto;
}


  #asc{
      margin: auto 5px;
  }
  }

  .grid{
      border-top: 2px solid grey;
  }

    @media only screen and (min-width: 1200px){
      .grid{
    width: 98%;
    height: auto;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 20% 20% 20% 20% 20%;
    gap: 5px;
    margin: 0 auto;
}

  }


.vertical-basic-info{
    width: 50%;
    height: 100%;
    display: inline-flex;   
    justify-content: space-between;
    flex-direction: column;
    color: white;
}

.firstName{

font-size: 14pt;
font-family: 'Lato', sans-serif;
}

.surName{

    font-size: 14pt;
    font-family: 'Lato', sans-serif;
}
.age {
    line-height: normal;
    font-size: 12pt;
    font-family: 'Lato', sans-serif;
}
.gender{
    margin-block-start: 0%;
    margin-block-end: 0%;
    line-height: normal;
    font-size: 12pt;
    font-family: 'Lato', sans-serif;
}
.home-address{
    line-height: normal;
    font-size: 12pt;
    font-family: 'Lato', sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap; 
}

.flex-wrapper{
display: flex;
flex-direction: row;
align-items: flex-end;
height: 300px;
justify-content: flex-end;
}

.img-person{
    margin-top: 10px;
    flex: auto;
    width: 100%;
    height: 250px;
}

.view-more{
    width: 100%;
    height: 28px;
    background-color: darkblue;
    color: white;
    font-family: 'Lato', sans-serif;
    border-radius: 5px;
    border: none;
    padding: 4px;
   margin: 10px 0;
    flex: auto;
}

.img-button-container{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
}

.person-more-modal{
    margin: 100px auto 0 auto;
    background-color: azure;
    width: 800px;
    height: 800px;
}
.bottom-info{
    width: 100%;
    height: 280px;
}

.row-flex{
    display: flex;
    justify-content: left;
}

.left-content 
{
    width: 60%;
}
.right-content{
    width: 40%;
}
</style>