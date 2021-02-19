<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left>
      <router-link to="/" style="color: inherit; text-decoration: none">
        <div class="d-flex align-center">
          <span class="text-h4">
            Wheel Of Fortune
          </span>
        </div>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer app expand-on-hover clipped permanent>
      <v-list nav dense>
        <v-list-item to="/borderlands">
          <v-list-item-icon>
            <v-icon>mdi-alpha-b-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Borderlands</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App"
})
export default class App extends Vue {}
</script>
