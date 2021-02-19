<template>
  <v-card>
    <v-card-title>
      Items
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        style="max-width: 400px"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script lang="ts">
import { BaseItem } from "@/types";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DataTableHeader } from "vuetify";

@Component({
  name: "ItemTable"
})
export default class ItemTable extends Vue {
  @Prop({ required: true })
  private items!: BaseItem[];
  private search = "";
  private headers: DataTableHeader[] = [
    {
      text: "Name",
      value: "name",
      width: 250
    },
    {
      text: "Description",
      value: "description"
    }
  ];
}
</script>
