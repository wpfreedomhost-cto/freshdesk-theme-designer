import portalHome from 'portal-builder-ember/portal-themes/default-theme/portal-home';
import components from 'portal-builder-ember/portal-component-generators/default-theme/all'
import stylesheet from 'portal-builder-ember/portal-themes/default-theme/stylesheet';

export default () => {
  return {
    stylesheet,
    header: components.header,
    footer: components.footer,
    pages: {
      portalHome
    }
  };
}