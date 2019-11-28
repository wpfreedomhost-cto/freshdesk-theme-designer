import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  fontList: computed({
    get() {
      return [
        {
          id: 'elegant',
          link: 'https://i.ibb.co/yP8SP4F/font6.png'
        },
        {
          id: 'hacker',
          link: 'https://i.ibb.co/YkWF3y3/font5.png'
        },
        {
          id: 'modern',
          link: 'https://i.ibb.co/hgD0xzp/font4.png'
        },
        {
          id: 'serous',
          link: 'https://i.ibb.co/TMm1Htf/font3.png'
        },
        {
          id: 'neutral',
          link: 'https://i.ibb.co/dtBrsH1/font2.png'
        },
        {
          id: 'friendly',
          link: 'https://i.ibb.co/xFLM70x/font1.png'
        }
      ]
    }
  }),

  actions: {
    handleFontClick() {
      this.router.transitionTo('header');
    }
  }
});
