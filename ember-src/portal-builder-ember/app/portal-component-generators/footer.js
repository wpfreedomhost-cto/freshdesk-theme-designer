export const footer1 = () => {
  return {
    htmlString: ``,

    constructLiquidString: ({
      headText1,
      headText2,
      headText3,
      headText4,
      link1,
      link1Url,
      link2,
      link2Url,
      link3,
      link3Url,
      legal1,
      legal1Url,
      social1,
      social1Url,
      company1,
      company1Url
    }) => {
        return `
        <section class="bg-gray-200 py-8 w-full">
            <div class="container mx-auto px-8">
                <div class="table w-full">
                    <div class="block sm:table-cell">
                        <p class="uppercase text-grey text-sm sm:mb-6">${headText1}</p>
                        <ul class="list-reset text-xs mb-6">
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href=${link1Url} class="text-grey hover:text-grey-dark">${link1}</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href=${link2Url} class="text-grey hover:text-grey-dark">${link2}</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href=${link3Url} class="text-grey hover:text-grey-dark">${link3}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="block sm:table-cell">
                        <p class="uppercase text-grey text-sm sm:mb-6">${headText2}</p>
                        <ul class="list-reset text-xs mb-6">
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href=${legal1Url} class="text-grey hover:text-grey-dark">${legal1}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="block sm:table-cell">
                        <p class="uppercase text-grey text-sm sm:mb-6">${headText3}</p>
                        <ul class="list-reset text-xs mb-6">
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href=${social1Url} class="text-grey hover:text-grey-dark">${social1}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="block sm:table-cell">
                        <p class="uppercase text-grey text-sm sm:mb-6">${headText4}</p>
                        <ul class="list-reset text-xs mb-6">
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href=${company1Url} class="text-grey hover:text-grey-dark">${company1}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        `
        },

    options: [
      {
        name: 'Put heading 1',
        keyName: 'headText1',
        value: '',
        type: 'text'
      },
      {
        name: 'Put heading 2',
        keyName: 'headText2',
        value: '',
        type: 'text'
      },
      {
        name: 'Put heading 3',
        keyName: 'headText3',
        value: '',
        type: 'text'
      },
      {
        name: 'Put heading 4',
        keyName: 'headText4',
        value: '',
        type: 'text'
      },
      {
        name: 'Link 1',
        keyName: 'link1',
        value: '',
        type: 'text',
      },
      {
        name: 'Link 1 URL',
        keyName: 'link1Url',
        value: '',
        type: 'text',
      },
      {
        name: 'Link 2',
        keyName: 'link2',
        value: '',
        type: 'text',
      },
      {
        name: 'Link 2 URL',
        keyName: 'link2Url',
        value: '',
        type: 'text',
      },
      {
        name: 'Link 3',
        keyName: 'link3',
        value: '',
        type: 'text',
      },
      {
        name: 'Link 3 URL',
        keyName: 'link3Url',
        value: '',
        type: 'text',
      },
      {
        name: 'Legal 1',
        keyName: 'legal1',
        value: '',
        type: 'text',
      },
      {
        name: 'Legal 1 URL',
        keyName: 'legal1Url',
        value: '',
        type: 'text',
      },
      {
        name: 'Social 1',
        keyName: 'social1',
        value: '',
        type: 'text',
      },
      {
        name: 'Social 1 URL',
        keyName: 'social1Url',
        value: '',
        type: 'text',
      },
      {
        name: 'Company 1',
        keyName: 'company1',
        value: '',
        type: 'text',
      },
      {
        name: 'Company 1 URL',
        keyName: 'company1Url',
        value: '',
        type: 'text',
      }
    ],

    selectedOptions: {
      headText1: 'Links',
      headText2: 'Legal',
      headText3: 'Social',
      headText4: 'Company',
      link1: 'FAQ',
      link1Url: '/FAQ',
      link2: 'Help',
      link2Url: '/help',
      link3: 'Support',
      link3Url: '/support',
      legal1: 'Legal',
      legal1Url: '/legal',
      social1: 'Facebook',
      social1Url: '/facebook',
      company1: 'Official blog',
      company1Url: '/official'
    }
  }
};
