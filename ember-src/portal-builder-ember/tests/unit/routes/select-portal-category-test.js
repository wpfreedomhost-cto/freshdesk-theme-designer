import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | select-portal-category', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:select-portal-category');
    assert.ok(route);
  });
});
