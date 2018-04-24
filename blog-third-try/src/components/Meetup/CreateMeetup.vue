<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm2>
        <h2 class="info--text">Create a new meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout>
            <v-flex xs12 sm6 offset-sm2>
              <v-text-field
                name="title"
                label="Title"
                v-model="title"
                :rules="nameRules"
                id="title" 
                required
                ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 sm6 offset-sm2>
              <v-text-field
                name="location"
                label="Location"
                v-model="location"
                :rules="locationRules"
                id="location" 
                required
                ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 sm6 offset-sm2>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                v-model="imageUrl"
                id="imageUrl" 
                required
                ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 sm6 offset-sm2>
              <img :src="imageUrl" height="250px" alt="uploaded file">
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 sm6 offset-sm2>
              <v-text-field
                name="description"
                label="Description"
                v-model="description"
                id="description" 
                required
                multi-line
                rows=3
                ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm2>
              <v-btn 
                class="primary" 
                :disabled="!formIsValid"
                type="submit">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 30 || 'Name must be less than 30 characters'
      ],
      locationRules: [
        v => !!v || 'Location is required',
        v => v.length <= 60 || 'Location must be less than 60 characters'
      ]
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== ''
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
