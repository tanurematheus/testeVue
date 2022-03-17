<template>
  <v-container>
    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
      <v-toolbar-title>
        Campeonato Brasileiro
        <v-btn color="transparent" @click="darkMode"> ⚽ </v-btn>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="green--text text--lighten-2"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title> Início </v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/classificacao">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-soccer</v-icon>
              </v-list-item-icon>
              <v-list-item-title> Classificação </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "AppTopBar",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>