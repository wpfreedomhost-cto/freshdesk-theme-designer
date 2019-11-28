import Controller from '@ember/controller';
// import LiquidEngine from 'portal-builder-ember/utils/liquid-renderer';
// import { set } from '@ember/object';
// import { inject as service } from '@ember/service';

export default Controller.extend({
  // portalData: service(),

  // liquidTemplate: '',

  // renderedHtml: null,

  // async test(property, liquidTemplate = null) {
  //   let test = await LiquidEngine(liquidTemplate, {name: 'ajeet'});
  //   set(this, property, test);
  // },

  actions: {
    // This is used for testing button
    renderHTML() {
      // this.portalData.loadData(this);
      // this.test('renderedHtml', "<div><h2> Hi {{name}}</h2></div>");
    }
  }
});
