import Controller from '@ember/controller';
import { computed, set, action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FullPreviewScreenController extends Controller {
  @service portalData

  showSidebar = false

  get portalPages() {
    return [
      {
        name: "Portal home",
        key: "portalHome"
      },
      {
        name: "Solutions home",
        key: "solutionsHome"
      },
      {
        name: "Discussions home",
        key: "discussionsHome"
      }
    ];
  }

  @computed('portalData.currentPage')
  get fullPageSource() {
    let headerHtml = this.portalData.header.constructLiquidString(this.portalData.header.selectedOptions);
    let footerHtml = this.portalData.footer.constructLiquidString(this.portalData.footer.selectedOptions);
    let currentPage = this.portalData.currentPage;

    let pageComponenets = this.portalData.pages[currentPage] || [];
    return headerHtml + pageComponenets.map(comp => comp.constructLiquidString(comp.selectedOptions)).join(' ') + footerHtml;
  }

  get styleSheet() {
    return this.portalData.stylesheet;
  }

  @action
  toggleSidebar() {
    set(this, 'showSidebar', !this.showSidebar)
  }

  @action
  transitionToCurrentPage(currentPage) {
    set(this, 'portalData.currentPage', currentPage);
  }

  @action
  foo() {
  }
}
