export const heroFooter1 = () => {
  return {
    htmlString: '',

    constructLiquidString: ({
      headText,
      subText,
      buttonText,
      linkUrl
    }) => {
      return `<div
      style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white">
          ${headText}
        </h2>
        <h3 class="text-2xl mb-8 text-gray-200">
          ${subText}
        </h3>
        <button
          class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
        >
          ${buttonText}
        </button>
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
      }
    ],

    selectedOptions: {
      headText: 'Sign up for Freshsales today',
      subText: 'Start your 21-day free trial. No credit card required. No strings attached.', // for articles use title,
      buttonText: 'Start free trial',
      linkUrl: 'www.google.com'
    }
  }
};