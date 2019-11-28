export const cardList = () => {
  return {
    htmlString: '',

    constructLiquidString: ({
      title,
      listName,
      bgColorCard,
      bgColorSection
    }) => {
      return `
        <div class="${bgColorSection.class}">
          <div class="flex flex-col">
          <div class="flex items-center justify-center pt-10">
            <span class="text-4xl font-bold">${title}</span></div>
          </div> 
          
        <div class="container mx-auto p-8">
          <div class="flex flex-row flex-wrap -mx-2">       
            {% for result in ${listName} %}
              <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                <div class="relative ${bgColorCard.class} rounded border">
                  <div class="p-4">
                    <h3 class="text-lg font-bold">
                      <a class="stretched-link" href="#" title="Card 1">
                        {{ result.name }}
                      </a>
                    </h3>
                    <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                    <p>
                      {{ result.description }}
                    </p>
                  </div>
                </div>
              </div>
            {% endfor %}

          </div>
        </div>
          </div>
          
        </div>
      `
    },
    options: [
      {
        name: 'Give your title',
        keyName: 'title',
        values: '',
        type: 'text'
      },
      {
        name: 'what do you wanna loop through',
        keyName: 'listName',
        values: ['portal.solution_categories'],
        type: 'dropdown'
      },
      {
        name: 'select section color',
        keyName: 'bgColorSection',
        values: [
                  {id: 'blue', class: 'bg-indigo-700'},
                  {id: 'orange', class: 'bg-orange-700'},
                  {id: 'green', class: 'bg-green-700'},
                  {id: 'pink', class: 'bg-pink-700'},
                  {id: 'teal', class: 'bg-teal-700'}
             ],
        type: 'objectDropdown'
      },
      {
        name: 'select card color',
        keyName: 'bgColorCard',
        values: [
                  {id: 'blue', class: 'bg-indigo-300'},
                  {id: 'orange', class: 'bg-orange-300'},
                  {id: 'green', class: 'bg-green-300'},
                  {id: 'pink', class: 'bg-pink-300'},
                  {id: 'teal', class: 'bg-teal-300'}
             ],
        type: 'objectDropdown'
      }
    ],

    selectedOptions: {
      title: 'sample title',
      listName: 'portal.solution_categories',
      bgColorCard: {id: 'orange', class: 'bg-orange-300'},
      bgColorSection: {id: 'teal', class: 'bg-teal-700'}
    }
  }
};