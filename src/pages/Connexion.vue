<template>
  
  <div class="form q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="form-input q-gutter-md"
    >

    <div class="connexion-title">
      <h2>Connexion</h2>
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

      <div>
        <q-btn label="Connexion" type="submit" color="primary"/>
        <q-btn to="/signup" label="Pas encore de compte ?" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<style lang="scss">

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
      password: ''
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