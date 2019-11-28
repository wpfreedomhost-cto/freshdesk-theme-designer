import { helper } from '@ember/component/helper';

export default helper(function selectFromObject([selectedOptions, keyName]) {
  return selectedOptions[keyName];
});
