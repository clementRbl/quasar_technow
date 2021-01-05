<template>
  <div class="q-pl-md row items-start q-gutter-md">
    
    <div class="background-header">
      <div class="background-header-title text-h2">
        Choisissez le meilleur technicien
      </div>

      <div class=" q-mt-lg background-header-text text-h5">
         Selectionnez le technicien le plus proche de votre entreprise et demandez une intervention tout de suite !
      </div>

    </div>

      <div class="container-technicien-title text-h3">
        Nos techniciens
      </div>
    
  <div class="container-card">

    <q-card 
      v-for="technicien in techniciens"
      :key="technicien.id"
      class="my-card q-ma-xl" 
      >
      <q-img :src="technicien.images" /> 


      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ technicien.name }}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            {{ technicien.location }}
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{ technicien.speciality }}
        </div>
        <div class="text-caption text-grey">
          {{ technicien.description }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat @click="calendar = true" round icon="event" />
        <q-btn flat  color="primary">
          Programmer une intervention
        </q-btn>
      </q-card-actions>
    </q-card>

  <q-dialog v-model="calendar" persistent>
    <q-date v-model="proxyDate">
      <div class="row items-center justify-end q-gutter-sm">
        <q-btn label="Cancel" color="primary" flat v-close-popup />
        <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
      </div>
    </q-date>
</q-dialog>

  </div>

  </div>
</template>

<style lang="scss">
  .background-header {
   width: 100%;
   margin: 0%;
   background-color: rgb(236, 231, 231);
   height: 30vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }
  .container-technicien-title {
    margin-left: 0%;
    margin-top: 3%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .container-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
</style>

<script>
export default {
    name: 'Techniciens',
    data() {
     return {
      techniciens: [
        {
          id: 1,
          name: 'Steven Spielberg',
          location: '1.3 km',
          stars: 5,
          speciality: 'Plombier',
          description: 'Au secours ça coule ! Bon, tant pis..',
          images: 'https://nsa40.casimages.com/img/2021/01/05/mini_210105032430360383.png'
        },
         {
          id: 2,
          name: 'Marlon Brando',
          location: '12.3 km',
          stars: 5,
          speciality: 'Électricien',
          description: '10 ans de coups de jus à son service !',
          images: 'https://nsa40.casimages.com/img/2021/01/05/mini_210105032430428847.png'
        },
        {
          id: 3,
          name: 'Robert De Niro',
          location: '0.3 km',
          stars: 5,
          speciality: 'Carreleur',
          description: 'Ne le laissez pas sur le carreau..',
          images: 'https://nsa40.casimages.com/img/2021/01/05/mini_210105032430690936.png'
        },
        {
          id: 4,
          name: 'Al Pacino',
          location: '27.6 km',
          stars: 5,
          speciality: 'Maçon',
          description: 'Truelle à la main, ne faites pas les malins',
          images: 'https://nsa40.casimages.com/img/2021/01/05/mini_210105032430943151.png'
        },
        {
          id: 5,
          name: 'Margot Robbie',
          location: '5.8 km',
          stars: 5,
          speciality: 'Menuisier',
          description: 'Margot adore collectionner les copeaux de bois',
          images: 'https://nsa40.casimages.com/img/2021/01/05/mini_210105032431200255.png'
        },
        {
          id: 6,
          name: 'Scarlett Johansson',
          location: '4.6 km',
          stars: 5,
          speciality: 'Serrurier métallier',
          description: 'Clic, un coffre de plus ouvert !',
          images: 'https://nsa40.casimages.com/img/2021/01/05/mini_210105032431451308.png'
        },
        {
          id: 7,
          name: 'Keanu Reeves',
          location: '3.2 km',
          stars: 5,
          speciality: 'Géomètre',
          description: 'La géométrie est son ..euh non !',
          images: 'https://nsa40.casimages.com/img/2021/01/05/mini_210105032431705434.png'
        },
        {
          id: 8,
          name: 'Johnny Depp',
          location: '0.2 km',
          stars: 5,
          speciality: 'Charpentier',
          description: 'Maitre du haschi charpentier depuis des lustres...',
          images: 'https://nsa40.casimages.com/img/2021/01/05/mini_210105032431966916.png'
        },
        {
          id: 9,
          name: 'Denzel Washington',
          location: '5.5 km',
          stars: 5,
          speciality: 'Peintre',
          description: 'Professionnel du barbouillage rapide',
          images: 'https://nsa40.casimages.com/img/2021/01/05/mini_210105032432249324.png'
        },
        {
          id: 10,
          name: 'Ray Liotta',
          location: '2.6 km',
          stars: 5,
          speciality: 'Enseigniste',
          description: 'Quand ça clignote, c\'est tout bon !',
          images: 'https://nsa40.casimages.com/img/2021/01/05/mini_210105032432513306.png'
        }, 
      ],
      model1: 'Sunday, Apr 28, 2019',
      calendar: false,
      date: '2019/03/01',
      proxyDate: '2019/03/01'
      
    }
  },
  methods: {
    updateProxy () {
      this.proxyDate = this.date
    },

    save () {
      this.date = this.proxyDate
    }
  }
}

</script>