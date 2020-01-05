import portalHome from 'portal-builder-ember/portal-themes/default-theme/portal-home';
import stylesheet from 'portal-builder-ember/portal-themes/default-theme/stylesheet';
import layoutConstructor from 'portal-builder-ember/portal-themes/default-theme/layout';
import components from 'portal-builder-ember/portal-component-generators/default-theme/all'

export default () => {
  return {
    stylesheet,
    layoutConstructor,
    header: components.header,
    footer: components.footer,
    pages: {
      portalHome
    }
  };
}