<template>
  <div id="main-banner">
    <h1>Make Your Burguer</h1>
  </div>  
</template>

<script>
export default{
   name: "Banner"
}
</script>

<style>
  #main-banner{
     background-image: url('/img/burguer.jpg');
     background-position: 0 -250px;
     background-size: cover;
     height: 500px;
     display: flex;
     align-items: center;
     justify-content: flex-start;
  }

  #main-banner h1{
    color: #FFF;
    text-align: center;
    font-size: 60px;    
    padding: 20px 40px;
  }
</style>