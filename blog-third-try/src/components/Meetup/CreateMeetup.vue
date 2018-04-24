<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm2>
        <h2 class="info--text">Create a new meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form>
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
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ]
    }
  }
}
</script>
