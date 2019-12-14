import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  portalData: service(),

  tagName: '',
  // classNames: ['w-full', 'h-full'],

  id: computed(function() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }),

  iframeSrc: computed('customSrc', {
   get() {
     if (this.customSrc) {
        return this.customSrc
     } else {
       let html = '';
       return html;
     }
   }
  }),

  headerContent: computed({
    get() {
      let cssLink = document.createElement("link")
      cssLink.href = "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css";
      cssLink .rel = "stylesheet";
      cssLink .type = "text/css";

      return cssLink;
    }
  }),

  componentList: computed({
    get() {
      return [
        {
          id: 'cardList',
          name: 'card list'
        },
        {
          id: 'heroSection1',
          name: 'search hero'
        },
        {
          id: 'heroFooter1',
          name: 'hero footer block'
        }
      ]
    }
  }),

  builderComponentChooser: computed({
    get() {
      return `
        <div class="bg-gray-100 py-5 w-full flex items-center justify-center">
          <div class="p-5 bg-gray-400 flex flex-col rounded">
            <div class="flex flex-col items-center">
                <div class="text-lg"> What Would You Like to Add Next ? </div>
                <div class="text-sm text-gray-900"> Add your next website block. Once you're finished creating you can publish or download your website. </div>
            </div>
            <div class="flex flex-wrap">
              ${this.generateComponentList(this.componentList)}
            </div>

            <div class="mt-5 flex justify-center">
              <button submit-id=true class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded shadow">
                I'm all done
              </button>
            </div>
          </div>
        </div>
      `;
    }
  }),

  generateComponentList(items) {
    let list = [];
    items.forEach(element => {
      let result = `
      <div data-component-id=${element.id} 
          class="bg-white w-40 px-10 py-16 m-5 rounded shadow cursor-pointer flex items-center justify-center text-center
          hover:shadow-lg hover:border-2 hover: hover:border-gray-900">
        ${element.name}
      </div>
      `
      list.push(result);
    });
    return list.join(' ');
  },

  actions: {
    testAction() {
      let iframe = document.querySelector(`#${this.id}`);

      iframe.contentDocument.head.appendChild(this.headerContent);

      if (this.showComponentList) {
        iframe.contentDocument.body.innerHTML += this.builderComponentChooser;

        iframe.contentDocument.body.addEventListener('click', ({ target }) => {
          let targetComponentSelectDom = target.closest('[data-component-id]');
          if (targetComponentSelectDom) {
            let componentId = targetComponentSelectDom.getAttribute('data-component-id')
            this.router.transitionTo('builder-page.new', componentId, this.portalData.currentPage);
          } else if (target.closest('[submit-id]')) {
            this.router.transitionTo('rendered-html');
          }
        });
      }
    }
  }
});
