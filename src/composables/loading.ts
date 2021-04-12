import { ref, readonly } from 'vue';

const loading = ref(false);

function useLoading() {
  const setLoading = (value: boolean) => {
    loading.value = value;
  };

  const withLoading = (task: Function, { autocomplete = true } = {}) => {
    return Promise.resolve()
      .then(() => {
        loading.value = true;
        return task();
      })
      .finally(() => {
        if (autocomplete) {
          loading.value = false;
        }
      });
  };

  return {
    loading: readonly(loading),
    setLoading,
    withLoading,
  };
}

export { useLoading };
