<template>
 <div>
    <p>Componente de Mensagem</p>  
    <div>
      <form id="burguer-form">
        <div class="input-container">
         <label for="nome">Nome do cliente</label>
           <input type="text" id="nome" name="name" v-model="nome" placeholder="Digite o seu nome">
           <br>
        <div class="input-container">
         <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao">
          <option value="">Selecione o seu pão</option>
          <option value="frances">frances</option>
        </select>
      </div>
      <div class="input-container">
        <label for="carne">Escolha a carne do seu Burger:</label>
        <select name="carne" id="carne" v-model="carne">
          <option value="">Selecione o tipo de carne</option>
          <option value="maminha">Maminha</option>
        </select>
      </div>
      <div id="opcionais-container" class="input-container">
        <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
        <div class="checkbox-container">
          <input type="checkbox" name="opcionais" v-model="opcionais" :value="salame">
          <span>salame</span>
        </div>
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Burger!">
      </div>            
    </div>    
      </form>  
   
    </div>    
 </div>  
</template>

<script>
import Banner from "../components/Banner.vue";
import BurguerForm from "../components/BurguerForm.vue"; 

export default{
    name: "BurguerForm",
    components: {
      Banner
    }
}
</script>

<style scoped>
   #burguer-form{
     max-width: 400px;
     margin: 0 auto;
   }

   .input-container{
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;      
   }

   label{
     font-weight: bold;
     margin-bottom: 15px;
     color: #222;
     padding: 5px 10px;
     border-left: 4px solid #FCBA03
   } 

   input, select{
      padding: 5px 10px;
      width: 300px;
   }

   #opcionais-container{
      flex-direction: row;
      flex-wrap: wrap;
   }

   #opcionais-title{
     width: 100%;
   }

   .checkbox-container{
     display: flex;
     align-items: flex-start;
     width: 50%;
     margin-bottom: 20px;     
   }
     
   .checkbox-container span{
      margin-left: 6px;
      font-weight: bold;
   }
   .submit-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }
  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
   
</style>