<template>
  <v-toolbar color="indigo" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link to="/">
      <v-toolbar-title class="white--text">Xingpeng (David) Da</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn flat>About</v-btn>
      <v-btn flat>Contact</v-btn>
      <router-link to="/login">
        <v-btn flat>Login</v-btn>
      </router-link>
    </div>
  </v-toolbar>
</template>