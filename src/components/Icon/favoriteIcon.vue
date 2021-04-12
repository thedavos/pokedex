<template>
  <div :class="['favoriteIcon', !normal && 'favoriteMode']">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 26 26"
      :width="width"
      :height="height"
      :class="{
        '--normal': normal,
        '--disable': isDisabled,
        '--active': active,
      }"
    >
      <path
        d="M11.6052 0.904438L8.43178 7.62704L1.33161 8.70855C0.0583408 8.9015 -0.451939 10.5415 0.471424 11.4809L5.60824 16.7107L4.39329 24.0984C4.1746 25.4338 5.52076 26.4341 6.64824 25.8096L13 22.3213L19.3518 25.8096C20.4792 26.429 21.8254 25.4338 21.6067 24.0984L20.3918 16.7107L25.5286 11.4809C26.4519 10.5415 25.9417 8.9015 24.6684 8.70855L17.5682 7.62704L14.3948 0.904438C13.8262 -0.293851 12.1787 -0.309084 11.6052 0.904438Z"
        fill="inherit"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'FavoriteIcon',

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    normal: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '26px',
    },
    height: {
      type: String,
      default: '26px',
    },
  },

  setup(props) {
    const isDisabled = computed(() => !props.active && !props.normal);

    return {
      isDisabled,
    };
  },
});
</script>

<style scoped>
.favoriteIcon {
  display: flex;
}

.favoriteMode {
  box-sizing: content-box;
  background-color: var(--color-gray-1);
  border-radius: var(--border-radius-full);
  padding: 8px;
}

.--normal {
  color: var(--color-white);
}

.--disable {
  color: var(--color-gray-3);
}

.--active {
  color: var(--color-accent);
}
</style>
