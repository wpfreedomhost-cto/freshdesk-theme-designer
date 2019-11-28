import { helper } from '@ember/component/helper';

export default helper(function equals([first, second]) {
  return first === second;
});
