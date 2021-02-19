<template>
  <v-card style="min-height: 250px" class="pa-2">
    <v-row>
      <v-col class="d-flex justify-center">
        <div class="text-h5">
          {{ selectedItem ? selectedItem.name : "No Item Selected" }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn color="primary" @click="spinWheel" :loading="isSpinning">
          Spin
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <div class="text-body-1">
          <template v-if="isSpinning">
            loading...
          </template>
          <template v-else>
            {{ selectedItem ? selectedItem.description : "No Description" }}
          </template>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { BaseItem } from "@/types";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "WheelOfFortune"
})
export default class WheelOfFortune extends Vue {
  @Prop({ required: true })
  private items!: BaseItem[];
  private selectedItem: BaseItem | null = null;
  private isSpinning = false;

  private spinWheel() {
    const totalNumSpins = 25;
    let currentNumSpins = 1;

    this.isSpinning = true;
    const interval = setInterval(() => {
      if (currentNumSpins <= totalNumSpins) {
        this.selectedItem = this.getRandomItem();
        currentNumSpins++;
      } else {
        clearInterval(interval);
        this.isSpinning = false;
      }
    }, 200);
  }

  private getRandomItem() {
    let pickableItems = this.items;
    if (this.selectedItem !== null) {
      pickableItems = pickableItems.filter(
        items => items.name !== this.selectedItem?.name
      );
    }
    const numItems = pickableItems.length;
    const randomIndex = Math.floor(Math.random() * numItems);
    return pickableItems[randomIndex];
  }
}
</script>
