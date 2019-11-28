export const heroFooter1 = () => {
  return {
    htmlString: '',

    constructLiquidString: ({
      headText,
      subText,
      buttonText,
      linkUrl,
      bgColor
    }) => {
      return `<div class="${bgColor.class}">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white text-center pt-5">
          ${headText}
        </h2>
        <h3 class="text-2xl mb-8 text-gray-200 text-center">
          ${subText}
        </h3>
        <div class="flex items-center justify-center pb-5">
          <button
            class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:shadow">
            ${buttonText}
          </button>
        </div>
      </div>
    </div>`
    },
    options: [
      {
        name: 'Put heading',
        keyName: 'headText',
        value: '',
        type: 'text'
      },
      {
        name: 'Sub heading text',
        keyName: 'subText',
        value: '',
        type: 'text'
      },
      {
        name: 'button Text',
        keyName: 'buttonText',
        value: '',
        type: 'text'
      },
      {
        name: 'select color',
        keyName: 'bgColor',
        values: [
                  {id: 'blue', class: 'bg-indigo-500'},
                  {id: 'orange', class: 'bg-orange-500'},
                  {id: 'green', class: 'bg-green-500'},
                  {id: 'pink', class: 'bg-pink-500'},
                  {id: 'teal', class: 'bg-teal-500'}
             ],
        type: 'objectDropdown'
      }
    ],

    selectedOptions: {
      headText: 'Sign up for Freshsales today',
      subText: 'Start your 21-day free trial. No credit card required. No strings attached.', // for articles use title,
      buttonText: 'Start free trial',
      linkUrl: 'www.google.com',
      bgColor: {id: 'teal', class: 'bg-teal-500'}
    }
  }
};