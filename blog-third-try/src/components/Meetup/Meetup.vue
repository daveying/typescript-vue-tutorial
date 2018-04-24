<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
				<v-card>
					<v-card-title class="primary--text">
						<h2>
							{{ meetup.title }}
						</h2>
					</v-card-title>
					<v-card-media 
						:src="meetup.imageUrl" 
						height="300px"
          	></v-card-media>
					<v-card-text>
						<div class="info--text">{{ meetup.date }} - Where it takes place</div>
						<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit debitis exercitationem quod, tempora harum beatae itaque dolorem? Numquam facilis sequi esse qui, totam possimus reiciendis, saepe eligendi atque, omnis nostrum?</div>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn class="primary">Register</v-btn>
					</v-card-actions>
				</v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

