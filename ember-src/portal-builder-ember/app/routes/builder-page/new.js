import Route from '@ember/routing/route';

export default Route.extend({
  model({ component_id: componentId, page_name: pageName }) {
    return {
      componentId,
      pageName
    };
  }
});
