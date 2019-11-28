export const head = () => {
  return {
    htmlString: '',

    constructLiquidString: () => {
      return `<!-- Title for the page -->
      <title> {{ meta.title }} : {{ portal.name }} </title>
      
      <!-- Meta information -->
      {{ meta | default_meta }}
      
      <!-- Responsive setting -->
      {{ portal | default_responsive_settings }}
      
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>`
    },
    options: [],

    selectedOptions: {}
  }
};