import Controller from '@ember/controller';
import { set, action } from '@ember/object';
import { inject as service } from '@ember/service';
import LiquidRenderer from 'portal-builder-ember/utils/liquid-renderer';

export default class FullPreviewScreenController extends Controller {
  @service portalData

  showSidebar = false

  constructor() {
    super(...arguments);

    this.setupFullPageSource();
  }

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

  get styleSheet() {
    return this.portalData.stylesheet || '';
  }

  async setupFullPageSource() {
    let headerHtml = this.portalData.header.constructLiquidString(this.portalData.header.selectedOptions);
    let footerHtml = this.portalData.footer.constructLiquidString(this.portalData.footer.selectedOptions);
    let currentPage = this.portalData.currentPage;

    let pageComponenets = this.portalData.pages[currentPage] || [];
    let contentForLayout = pageComponenets.map(comp => comp.constructLiquidString(comp.selectedOptions)).join(' ');
    let layoutConstructor = this.portalData.layoutConstructor;

    let liquidLayout = layoutConstructor({
      header: headerHtml,
      contentForLayout,
      footer: footerHtml
    });

    let fullPageSource = await LiquidRenderer(liquidLayout, { portal: this.portalData.portalDataValues });

    this.fullPageSource = fullPageSource;
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
