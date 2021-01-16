<template>
<div class="con">
 <vue-particles color="#dedede"
 :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push" style="width: 100%; height: 100vh;"></vue-particles>

        <div class="intro">  
            <h3>The people's database</h3>
            <p>Find out more about people</p>
        </div>
      </div>
</template>

<script>
import UserService from '../services/user.service';


export default {
  name: 'Home',
  data() {
    return {
      content: '',
    };
    },
  methods: {
    addPerson(){
      this.$router.push('/person/add');
  },uploadFile(){ 
      this.$router.push('/upload/file');
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
body{
  background-color: black;
}
h2{
  text-align: center;
}
.intro{
  display: block;
  width: 25%;
  height: 10%;
  position: absolute;
  left: 37.5%;
  top: 45%;
}
h3{
  font-size: 30pt;
  color: white;
  text-align: center;
}
p{
  color: white;
  text-align: center;
}
.addPerson{
  width: 200px;
  height: 30px;
  background-color: blue;
  display: block;
  margin: 8px auto;
  color: white;
  border: none;
  border-radius: 3px;
  
}
</style>