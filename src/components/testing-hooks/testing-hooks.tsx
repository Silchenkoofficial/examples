import { FC } from 'react';
import { observer } from 'mobx-react-lite';

export const TestingHooks: FC = observer(() => {
  console.log('render');

  return <div>TestingHooks</div>;
});
