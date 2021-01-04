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

    <q-card  class="my-card q-ma-xl" 
      v-for="(technicien, index) in techniciens"
      :key="index"
      :style="{'backround-image' : 'url('+require('../assets/pictures/'+technicien.image[0])+')'}">
      

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
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Programmer une intervention
        </q-btn>
      </q-card-actions>
    </q-card>

  </div>

  </div>
</template>

<style lang="scss">
  .background-header {
   width: 100%;
   margin: 0;
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
  data() {
     return {
      techniciens: [
        {
          name: 'Steven Spielberg',
          location: '1.3 km',
          stars: 5,
          speciality: 'Plombier',
          description: 'Au secours ça coule ! Bon, tant pis..',
          images: '~assets/pictures/avatar1.png'
        },
        {
          name: 'Marlon Brando',
          location: '12.3 km',
          stars: 5,
          speciality: 'Électricien',
          description: '10 ans de coups de jus à son service !',
          images: '~assets/pictures/avatar2.png'
        },
        {
          name: 'Robert De Niro',
          location: '0.3 km',
          stars: 5,
          speciality: 'Carreleur',
          description: 'Ne le laissez pas sur le carreau..',
          images: '~assets/pictures/avatar3.png'
        },
        {
          name: 'Al Pacino',
          location: '27.6 km',
          stars: 5,
          speciality: 'Maçon',
          description: 'Truelle à la main, ne faites pas les malins',
          images: '~assets/pictures/avatar4.png'
        },
        {
          name: 'Margot Robbie',
          location: '5.8 km',
          stars: 5,
          speciality: 'Menuisier',
          description: 'Margot adore collectionner les copeaux de bois',
          images: '~assets/pictures/avatar5.png'
        },
        {
          name: 'Scarlett Johansson',
          location: '4.6 km',
          stars: 5,
          speciality: 'Serrurier métallier',
          description: 'Clic, un coffre de plus ouvert !',
          images: '~assets/pictures/avatar6.png'
        },
        {
          name: 'Keanu Reeves',
          location: '3.2 km',
          stars: 5,
          speciality: 'Géomètre',
          description: 'La géométrie est son ..euh non !',
          images: '~assets/pictures/avatar7.png'
        },
        {
          name: 'Johnny Depp',
          location: '0.2 km',
          stars: 5,
          speciality: 'Charpentier',
          description: 'Maitre du haschi charpentier depuis des lustres...',
          images: '~assets/pictures/avatar8.png'
        },
        {
          name: 'Denzel Washington',
          location: '5.5 km',
          stars: 5,
          speciality: 'Peintre',
          description: 'Professionnel du barbouillage rapide',
          images: '~assets/pictures/avatar9.png'
        },
        {
          name: 'Ray Liotta',
          location: '2.6 km',
          stars: 5,
          speciality: 'Enseigniste',
          description: 'Quand ça clignote, c\'est tout bon !',
          images: '~assets/pictures/avatar10.png'
        },
      ],
      stars
      
    }
  }
}

</script>