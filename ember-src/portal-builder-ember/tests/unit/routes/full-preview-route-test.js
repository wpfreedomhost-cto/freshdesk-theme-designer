import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | full-preview-route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:full-preview-route');
    assert.ok(route);
  });
});
