<template>
  <div class="welcome">
    <img class="welcome__image" :src="pikachu" alt="" />
    <heading class="welcome__heading">Welcome to Pokédex</heading>
    <paragraph class="welcome__description" size="sm"
      >The digital encyclopedia created by Professor Oak is an invaluable tool
      to Trainers in the Pokémon world.</paragraph
    >
    <poke-button class="welcome__button" @click="goToPokedex"
      >Get Started</poke-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import PokeButton from '../../components/Button';

import pikachu from '../../assets/pikachu.png';

export default defineComponent({
  name: 'Welcome',

  components: {
    Paragraph,
    Heading,
    PokeButton,
  },

  setup() {
    const router = useRouter();

    const goToPokedex = async () => {
      await router.push({
        name: 'pokedex',
      });
    };

    return {
      pikachu,
      goToPokedex,
    };
  },
});
</script>

<style scoped>
@import './welcome.css';
</style>
