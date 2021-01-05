<template>
  <div class="q-pl-md row items-start q-gutter-md">
    
    <div class="background-header">
      <div class="background-header-title text-h2">
        Choisissez le meilleur technicien
      </div>

      <div class=" q-mt-lg background-header-text text-h5">
         Selectionnez le technicien le plus proche de votre entreprise !
      </div>

    </div>

      <div class="container-technicien-title text-h3">
        Nos techniciens
      </div>
    
  <div class="container-card">

    <q-card class="my-card q-ma-xl">
      <q-img src="~assets/pictures/avatar1.png" />

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
            Steven Spielberg
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            1.3 km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Plombier
        </div>
        <div class="text-caption text-grey">
          Au secours ça coule ! Bon, tant pis..
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

    <q-card class="my-card q-ma-xl">
      <q-img src="~assets/pictures/avatar2.png" />

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
            Marlon Brando
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            12.3 km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Électricien
        </div>
        <div class="text-caption text-grey">
          10 ans de coups de jus à son service !
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

    <q-card class="my-card q-ma-xl">
      <q-img src="~assets/pictures/avatar3.png" />

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
            Robert De Niro
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            0.3 km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Carreleur
        </div>
        <div class="text-caption text-grey">
          Ne le laissez pas sur le carreau..
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

    <q-card class="my-card q-ma-xl">
      <q-img src="~assets/pictures/avatar4.png" />

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
            Al Pacino
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            27.6 km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Maçon
        </div>
        <div class="text-caption text-grey">
          Truelle à la main, ne faites pas les malins
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

    <q-card class="my-card q-ma-xl">
      <q-img src="~assets/pictures/avatar5.png" />

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
            Margot Robbie
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            5.8 km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Menuisier
        </div>
        <div class="text-caption text-grey">
          Margot adore collectionner les copeaux de bois
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

    <q-card class="my-card q-ma-xl">
      <q-img src="~assets/pictures/avatar6.png" />

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
            Scarlett Johansson
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            4.6 km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Serrurier métallier
        </div>
        <div class="text-caption text-grey">
          Clic, un coffre de plus ouvert !
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

    <q-card class="my-card q-ma-xl">
      <q-img src="~assets/pictures/avatar7.png" />

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
            Keanu Reeves
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            3.2 km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Géomètre
        </div>
        <div class="text-caption text-grey">
          La géométrie est son ..euh non !
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

    <q-card class="my-card q-ma-xl">
      <q-img src="~assets/pictures/avatar9.png" />

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
            Johnny Depp
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            0.2 km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Charpentier
        </div>
        <div class="text-caption text-grey">
          Maitre du haschi charpentier depuis des lustres...
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

    <q-card class="my-card q-ma-xl">
      <q-img src="~assets/pictures/avatar10.png" />

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
             Denzel Washington
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            5.5 km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Peintre
        </div>
        <div class="text-caption text-grey">
          Professionnel du barbouillage rapide
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

    <q-card class="my-card q-ma-xl">
      <q-img src="~assets/pictures/avatar8.png" />

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
             Ray Liotta
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            2.6 km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Enseigniste
        </div>
        <div class="text-caption text-grey">
          Quand ça clignote, c'est tout bon !
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
  data () {
    return {
      stars: 4
    }
  }
}
</script>