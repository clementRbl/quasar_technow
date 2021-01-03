<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated>
      <q-toolbar class="bg-black">
        <q-btn
          flat @click="drawer = !drawer" round dense icon="menu" />
        

        <q-avatar class="logo-technow">
          <img src="~assets/logoTechnow.png" alt="Logo Technow">
        </q-avatar>

        <div class="container-buttons">
          <div class=" buttons q-pa-md q-gutter-sm">
            <q-btn hover-color outline style="color: white;"  label="Connexion" />
          </div>

          <div class=" buttons q-pa-md q-gutter-sm">
            <q-btn outline style="color: white;" label="Inscription" />
          </div>
        </div>

      </q-toolbar>

    </q-header>

   <q-drawer
        v-model="drawer"
        show-if-above
        :width="250"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">

            <q-item to="/techniciens" clickable v-ripple>
              <img class="logo-drawer" src="~assets/logoTechnow.png" alt="Logo Technow">
            </q-item>
            

            <q-item to="/demande" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Demande rapide
              </q-item-section>
            </q-item>

            <q-item to="/techniciens" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Voir les techniciens
              </q-item-section>
            </q-item>

            <q-item to="/login" clickable v-ripple>
              <q-item-section avatar >
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Se connecter
              </q-item-section>
            </q-item>

            <q-item to="/signup" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                S'inscrire
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">

  .logo-technow {
    margin-left: 2%;
    width: 120px;
    height: 100px;
  }
  .container-buttons {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  .container-logo-slide{
    background-color: black;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
  }

  .logo-drawer {
    margin-top: -17%;
  }
  
</style>

<script>


export default {
  name: 'MainLayout',
  data () {
    return {
      drawer: false
    }
  }
}
</script>
