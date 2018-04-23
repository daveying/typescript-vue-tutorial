<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="/meetup/new" class="primary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout xs12 class="mt-2">
      <v-carousel>
        <v-carousel-item 
          v-for="meetup in meetups" 
          :src="meetup.imageUrl" 
          :key="meetup.id">
          <v-flex xs12 class="text-xs-center">
            <div class="title">
              {{meetup.title}}
            </div>
          </v-flex>
        </v-carousel-item>
      </v-carousel>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awsome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        { imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
          id: 'adsdweadwed',
          title: 'Meetup in New York'
        },
        { imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f4/db/9e/paris-in-one-day-sightseeing.jpg',
          id: 'sdafwewswda',
          title: 'Meetup in Paris'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 2em;
    padding: 20px;
  }
</style>

