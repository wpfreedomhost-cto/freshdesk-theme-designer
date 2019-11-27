import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | builder-page/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:builder-page/new');
    assert.ok(route);
  });
});
