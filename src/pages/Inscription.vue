<template>
  
  <div class="form q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="form-input q-gutter-md"
    >

    <div class="connexion-title">
      <h2>Inscription</h2>
    </div>

      <q-input
        v-model="email"
        label="Email *"
        lazy-rules
        :rules="[ val => val && val.length > 0  || 'Entrez votre e-mail']"
      />

      <q-input 
        v-model="password"
        label="Mot de passe *"  
        :type="isPwd ? 'password' : 'text'"
        lazy-rules
        :rules="[ val => val && val.length > 0  || 'Entrez votre mot de passe']"
      >

        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-select 
        v-model="model"
        :options="options" 
        label="Votre status" value="Client"
        lazy-rules:
        :rules="[ val => val && val.length > 0  || 'Veuillez choisir votre status']"
        />

      <div>
        <q-btn label="Valider" type="submit" color="primary"/>
        <q-btn to="/login" label="Connexion à un compte" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<style lang="scss">
  .connexion-title {
    
  }

  .form{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 20%;
  }
  .form-input {
    width: 50%;
    
  }
</style>

<script>
export default {
  data () {
    return {
      email: '',
      isPwd: true,
      password: '',
      model: null,
      options: ['Client', 'Entreprise']
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
    }
  }
}
</script>