import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StepProgress from './StepProgress';
import { Provider } from 'mobx-react';
// import { observable } from 'mobx';
import { mobTest } from '../../store/index';
// import mobTestStore from '../../store/index';

afterEach(cleanup);

it('state changed in steps', () => {
  const stepStore = mobTest;

  const { getByTestId } = render(
    <Provider mobTestStore={stepStore}>
      <StepProgress />
    </Provider>
  );

  const btn2 = getByTestId('step2');
  const btn3 = getByTestId('step3');
  const btn4 = getByTestId('step4');
  const btn5 = getByTestId('step5');

  expect(getByTestId('steps1')).toHaveTextContent('active 0');

  fireEvent.click(btn2);
  expect(getByTestId('steps2')).toHaveTextContent('active 1');

  fireEvent.click(btn3);
  expect(getByTestId('steps3')).toHaveTextContent('active 2');

  fireEvent.click(btn4);
  expect(getByTestId('steps4')).toHaveTextContent('active 3');

  fireEvent.click(btn5);
  expect(getByTestId('steps5')).toHaveTextContent('active 4');
});
