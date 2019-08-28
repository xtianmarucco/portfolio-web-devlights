<template>
  <div>
    <v-sheet height="400" class="overflow-hidden">
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-btn color="pink" dark @click.stop="drawer = !drawer">T</v-btn>
        </v-row>
      </v-container>

      <v-navigation-drawer v-model="drawer" absolute temporary></v-navigation-drawer>
    </v-sheet>
  </div>
</template>

<script>
</script>


<style>
</style>
