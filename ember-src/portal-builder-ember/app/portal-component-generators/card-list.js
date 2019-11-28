export const cardList = () => {
  return {
    htmlString: '',

    constructLiquidString: ({
    }) => {
      return `
        <div class="container">
          <div class="flex flex-col">
          <div class="flex items-center justify-center pt-10">
            <span class="text-4xl font-bold">header text</div>
          </div> 
          
        <div class="container mx-auto p-8">
          <div class="flex flex-row flex-wrap -mx-2">       
            <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
              <div class="relative bg-white rounded border">
                <div class="p-4">
                  <h3 class="text-lg font-bold">
                    <a class="stretched-link" href="#" title="Card 1">
                      Card 1
                    </a>
                  </h3>
                  <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
                            
            <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
              <div class="relative bg-white rounded border">
                <div class="p-4">
                  <h3 class="text-lg font-bold">
                    <a class="stretched-link" href="#" title="Card 2">
                      Card 2
                    </a>
                  </h3>
                  <time class="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
          
        </div>
      `
    },
    options: [
      {
        name: 'loop through',
        keyName: 'listName',
        values: ['portal.solution_categories'],
        type: 'dropdown'
      },
      {
        name: 'and show value',
        keyName: 'listItemPath',
        values: ['name', 'description'],
        type: 'dropdown'
      }
    ],

    selectedOptions: {
      listName: 'portal.solution_categories',
      listItemPath: 'name' // for articles use title
    }
  }
};