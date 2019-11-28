export const layout = () => {
  return {
    htmlString: '',

    constructLiquidString: () => {
      return `{{ header }}
      <!-- Notification Messages -->
      {{ page_message }}
      {{ content_for_layout }}
    {{ footer }}`
    },
    options: [],

    selectedOptions: {}
  }
};