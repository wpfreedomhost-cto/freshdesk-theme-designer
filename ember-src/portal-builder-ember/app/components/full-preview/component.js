import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  classNames: ['w-full', 'h-full'],

  iframeSrc: computed({
   get() {
    let html = '<body>Foo</body>';
    return html;
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
          id: 'create-hero-section'
        },
        {
          id: 'create-hero-section2'
        },
        {
          id: 'create-hero-sectio3'
        },
        {
          id: 'create-hero-sectio4'
        }
      ]
    }
  }),

  builderComponentChooser: computed({
    get() {
      return `
        <div class="bg-gray-100 py-10 w-full flex items-center justify-center">
          <div class="p-5 bg-gray-400 flex flex-col rounded">
            <div class="flex flex-col items-center">
                <div class="text-lg"> What Would You Like to Add Next ? </div>
                <div class="text-sm text-gray-900"> Add your next website block. Once you're finished creating you can publish or download your website. </div>
            </div>
            <div class="flex flex-wrap">
              ${this.generateComponentList(this.componentList)}
            </div>

            <div class="mt-5 flex justify-center">
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded shadow">
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
      <div data-component-id=${element.id} class="bg-white px-10 py-16 m-5 rounded shadow cursor-pointer 
          hover:shadow-lg hover:border-2 hover: hover:border-gray-900">
        3 col layout
      </div>
      `
      list.push(result);
    });
    return list.join(' ');
  },

  actions: {
    testAction() {
      let iframe = this.element.querySelector('#test');

      iframe.contentDocument.head.appendChild(this.headerContent);

      iframe.contentDocument.body.innerHTML += this.builderComponentChooser;

      iframe.contentDocument.body.addEventListener('click', ({ target }) => {
        let targetComponentSelectDom = target.closest('[data-component-id]');
        if (targetComponentSelectDom) {
          let componentId = targetComponentSelectDom.getAttribute('data-component-id')
          this.router.transitionTo('builder-page.new', componentId, 'portal-home');
        }
      });
    }
  }
});
