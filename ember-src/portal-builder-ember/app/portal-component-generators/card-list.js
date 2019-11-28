export const cardList = () => {
  return {
    htmlString: '',

    constructLiquidString: ({
      title,
      listName
    }) => {
      return `
        <div class="container">
          <div class="flex flex-col">
          <div class="flex items-center justify-center pt-10">
            <span class="text-4xl font-bold">${title}</div>
          </div> 
          
        <div class="container mx-auto p-8">
          <div class="flex flex-row flex-wrap -mx-2">       
            {% for result in ${listName} %}
              <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                <div class="relative bg-white rounded border">
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
      }
    ],

    selectedOptions: {
      title: 'sample title',
      listName: 'portal.solution_categories'
    }
  }
};