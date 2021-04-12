<template>
  <div class="pokeListEmpty">
    <heading class="pokeListEmpty__heading" size="xl">Uh-oh!</heading>
    <paragraph class="pokeListEmpty__paragraph"
      >You look lost on your journey!</paragraph
    >
    <poke-button @click="$router.push('/')">Go back home</poke-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Heading from '../Heading';
import Paragraph from '../Paragraph';
import PokeButton from '../Button';

export default defineComponent({
  name: 'PokeListEmpty',

  components: {
    Heading,
    Paragraph,
    PokeButton,
  },
});
</script>

<style scoped>
.pokeListEmpty__heading {
  margin-bottom: 10px;
}

.pokeListEmpty__paragraph {
  text-align: center;
  margin-bottom: 25px;
}
</style>
