<template>
   <div class="container">
       <h4>Amount to Pay: 30 euro</h4>
    <form>
       <input type="text" id="fullName" class="form-control" placeholder="Full Name">

       <input type="tel" id="Phone Number" class="form-control" placeholder="Phone Number">
       <textarea name="" id="address" class="form-control" cols="30" rows="10" placeholder="Address"></textarea>
       <input type="text" class="form-control" id="cardNumber" placeholder="Card Number">
       <input type="text" class="form-control" id="expiryMonth" placeholder="Month">
       <input type="text" class="form-control" id="expiryYear" placeholder="Year">
       <input type="text" class="form-control" id="cvv" placeholder="CVV">
       <button type="submit">Pay</button>
    </form>
   </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    width: 600px;
    height: 600px;
    margin: 10px auto;
    display: block;
    background-color: #ccc;
    padding-top: 20px;
    border-radius: 10px;
}
.form-control{
    margin: 8px auto;
    height: 20px;
    border-radius: 10px;
    width: 520px;
}

#address{
    height: 100px;
}

#expiryMonth{
    display: inline-block;
    width: 20%;
    margin-left: 30px;
}

#expiryYear{
    display: inline-block;
    width: 20%;
    margin-left: 10px;
}

form{
    padding: 0;
}

h4{
    text-align: center;
}

button{
    width: 520px;
    background-color: green;
    border-radius: 10px;
    color: white;
    border: none;
    height: 35px;
    display: block;
    margin: 8px auto;
}
</style>