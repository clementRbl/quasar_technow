<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

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
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white-1"
    >
      <q-list>
        <div class="container-logo-slide">
          <q-avatar  header class="logo-technow">
         <img src="~assets/logoTechnow.png" alt="" >
        </q-avatar>
        </div>
    

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      
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
  
</style>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Demandez un devis',
    caption: 'devis',
    icon: 'comment',
    link: '/devis',
    separator: true
  },
  {
    title: 'Voir les techniciens',
    caption: 'techniciens',
    icon: 'engineering',
    link: '/techniciens'
  },
  {
    title: 'Demande express',
    caption: 'demande',
    icon: 'send',
    link: '/demande'
  },
  {
    title: 'Se connecter',
    caption: 'signin',
    icon: 'login',
    link: '/signin'
  },
  {
    title: `S'inscrire`,
    caption: 'signup',
    icon: 'source',
    link: '/signup'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
