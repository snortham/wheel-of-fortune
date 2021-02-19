<template>
  <v-container fluid>
    <v-row justify="center" class="my-2">
      <div class="text-h3">Borderlands</div>
    </v-row>
    <v-row justify="center" class="my-6">
      <v-col sm="1" alignSelf="center">
        <v-btn
          color="secondary"
          fab
          style="margin-left: 40%;"
          @click="numWheels--"
          :disabled="numWheels === 1"
        >
          <v-icon dark>
            mdi-minus
          </v-icon>
        </v-btn>
      </v-col>
      <v-col md="3" sm="6" v-for="index in numWheels" :key="index">
        <wheel-of-fortune :items="items"></wheel-of-fortune>
      </v-col>
      <v-col sm="1" alignSelf="center">
        <v-btn
          fab
          style="margin-left: 10%;"
          @click="numWheels++"
          color="secondary"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <item-table :items="items"></item-table>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WheelOfFortune from "@/components/WheelOfFortune.vue";
import ItemTable from "@/components/ItemTable.vue";
import { BaseItem } from "@/types";

@Component({
  name: "Borderlands",
  components: {
    WheelOfFortune,
    ItemTable
  }
})
export default class Borderlands extends Vue {
  private numWheels = 1;
  private items: BaseItem[] = [
    {
      name: "Shotgun Superiority",
      description:
        "Only allowed to use Shotguns. (or melee if no weapon of this type is available)"
    },
    {
      name: "SMG Superiority",
      description:
        "Only allowed to use SMGs. (or melee if no weapon of this type is available)"
    },
    {
      name: "Pistol Superiority",
      description:
        "Only allowed to use Pistols. (or melee if no weapon of this type is available)"
    },
    {
      name: "Sniper Superiority",
      description:
        "Only allowed to use Snipers. (or melee if no weapon of this type is available)"
    },
    {
      name: "Assault Rifle Superiority",
      description:
        "Only allowed to use Assault Rifles. (or melee if no weapon of this type is available)"
    },
    {
      name: "Rocket Launcher Superiority",
      description:
        "Only allowed to use Rocket Launchers. (or melee if no weapon of this type is available)"
    },
    {
      name: "Grenade Superiority",
      description:
        "Only allowed to use Grenades. (or melee if no weapon of this type is available)"
    },
    {
      name: "Melee Superiority",
      description:
        "Only allowed to use Melee attacks. (Weapons with melee attachments are fine to equip and use but you are not allowed to fire them)"
    },
    {
      name: "Containers only",
      description:
        "If a weapon/item does not come from some type of container, you are not allowed to pick it up. (You are not allowed to BUY equipment from shops but you can sell) (Items from slot machines are allowed so money has a point)"
    },
    {
      name: "No containers",
      description:
        "Can not pick up any weapon/item that comes from some type of container."
    },
    {
      name: "Boss loot only",
      description:
        "Only allowed to use loot dropped from uniquely named monsters. (Could go a step farther and say only bosses with a health bar at the top of the screen, but there is not very many at the start of the game so it seems kind difficult to the point of being not fun)"
    },
    {
      name: "Shops only",
      description:
        "Can only use gear that you buy from shops. (Picking up weapons from other sources is allowed but only to sell)"
    },
    {
      name: "No skills",
      description: "Not allowed to allocate any skill points."
    },
    {
      name: "No shields",
      description: "Not allowed to equip a shield."
    },
    {
      name: "No shops",
      description:
        "You can not use shops to buy or sell items. (You can use money you pick up at the slot machines inside sanctuary) (This also means you can not buy ammo) (The Eridium store is allowed so that it is not extremely annoying dealing with low ammo capacity)"
    },
    {
      name: "No aiming down sights",
      description:
        "No aiming down sights of any weapon type. (Hyperion weapons are recommended)"
    },
    {
      name: "No elements",
      description:
        "No using any elemental weapons or grenades. (This includes E-Techs,Corrosive,Slag,Shock and Fire weapons and grenades) (Torgue weapons and Explosive Rocket launchers are allowed)"
    },
    {
      name: "No backpack",
      description:
        "You are not allowed to hold items except the items you have equipped"
    },
    {
      name: "Explosives only",
      description:
        "Only allowed to use explosive weapons to deal damage. (You can pick up other weapons to sell) (Torgue weapons, normal rocket launchers and grenades are allowed) (Any guns that do NOT deal explosive damage or deal any kind of elemental damage are not allowed)"
    },
    {
      name: "Elemental only",
      description:
        "Only allowed to use weapons that deal elemental damage. (Weapons and grenades that deal either Slag, Incendiary, Shock or Corrosive damage are allowed) (Torgue weapons and weapons that do NOT deal elemental damage are not allowed)"
    },
    {
      name: "Blank slate",
      description:
        "Not allowed to equip any item whatsoever. (Can go a step further and say no putting in any skill points as well)"
    },
    {
      name: "No reloads",
      description:
        "Not allowed to reload weapons, if a weapon runs out of ammo you must sell it/throw it on the ground and use a new weapon. (This seems quite hard but could be a fun and hilarious challenge)"
    },
    {
      name: "Slot machines only",
      description:
        "Can only use weapons received from slot machines. (There is Eridium slot machines in the Tiny Tina DLC you can use your Eridium on)"
    },
    {
      name: "Non-Uniques only",
      description:
        "Only allowed to equip Non-Unique items. (This includes all Legendary, Seraph, Pearlescent, Unique, Effervescent items) (You are allowed to pick up these items to sell but not allowed to equip them)"
    },
    {
      name: "Allegiance Runs Bandit",
      description: 'Can only use "Bandit" manufactured items.'
    },
    {
      name: "Allegiance Runs Dahl",
      description: 'Can only use "Dahl" manufactured items.'
    },
    {
      name: "Allegiance Runs Hyperion",
      description: 'Can only use "Hyperion" manufactured items.'
    },
    {
      name: "Allegiance Runs Jakobs",
      description: 'Can only use "Jakobs" manufactured items.'
    },
    {
      name: "Allegiance Runs Maliwan",
      description: 'Can only use "Maliwan" manufactured items.'
    },
    {
      name: "Allegiance Runs Tediore",
      description: 'Can only use "Tediore" manufactured items.'
    },
    {
      name: "Allegiance Runs Torgue",
      description: 'Can only use "Torgue" manufactured items.'
    },
    {
      name: "Allegiance Runs Vladof",
      description: 'Can only use "Vladof" manufactured items.'
    },
    {
      name: "White is the new Orange",
      description:
        'Only allowed to equip "White" rarity items. (You are allowed to pick up other items to sell)'
    },
    {
      name: "Go Green!",
      description:
        'Only allowed to equip "Green" rarity items. (You are allowed to pick up other items to sell)'
    },
    {
      name: "Feeling Blue",
      description:
        'Only allowed to equip "Blue" rarity items. (You are allowed to pick up other items to sell)'
    },
    {
      name: "Purple",
      description:
        'Only allowed to equip "Purple" rarity items. (You are allowed to pick up other items to sell)'
    },
    {
      name: "Legendary",
      description:
        'Only allowed to equip "Legendary" rarity items. (You are allowed to pick up other items to sell)'
    },
    {
      name: "E-Tech",
      description:
        'Only allowed to equip "E-Tech" rarity items. (You are allowed to pick up other items to sell)'
    },
    {
      name: "Rebirth",
      description:
        "When you die you have to drop all items you have equipped and in your backpack. (Can also do the ruleset of only dropping items you have equipped)"
    },
    {
      name: "Random Build",
      description:
        "Must roll a number generator everytime you have to put in a skill point to see where it goes."
    }
  ];
}
</script>
