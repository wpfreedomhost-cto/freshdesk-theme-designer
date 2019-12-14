import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | select-from-previews', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:select-from-previews');
    assert.ok(route);
  });
});
