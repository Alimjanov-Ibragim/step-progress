import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

import { mobTest } from '../../store';
import {
  StepProgressWrap,
  StepProgressWrapLine,
  StepProgressWrapItemsWr,
  StepProgressWrapItems,
  StepProgressWrapItem,
  StepProgressLog,
  StepProgressWrapItemText,
  StepProgressLabelHidden
} from './StepProgressStyle';

const StepProgress = observer(() => {
  const [activeStep, setactiveStep] = useState(0);
  useEffect(() => {
    mobTest.handleSteps([
      { id: 1, active: false, title: 'First' },
      { id: 2, active: false, title: 'Second' },
      { id: 3, active: false, title: 'Third' },
      { id: 4, active: false, title: 'Fourth' },
      { id: 5, active: false, title: 'Fifth' }
    ]);
    return () => {
      mobTest.handleSteps([]);
    };
  }, []);

  const handleClick = index => {
    if (activeStep + 1 < index) {
      return;
    }
    setactiveStep(index);
    const temp = toJS(mobTest.getSteps).map((item, key) =>
      index >= key
        ? // &&
          Object.assign({}, item, {
            active: true
          })
        : Object.assign({}, item, { active: false })
    );
    mobTest.handleSteps(temp);
  };

  const check = mobTest.getSteps.length > 1 && mobTest.getSteps.length < 6;

  return (
    <StepProgressWrap>
      {check ? (
        <StepProgressWrapItemsWr>
          <StepProgressWrapLine width="auto" />
          <StepProgressWrapLine
            bg
            width={
              activeStep
                ? (100 / (mobTest.getSteps.length - 1)) * activeStep
                : 0
            }
          />
          {mobTest.getSteps.map((step, index) => (
            <StepProgressWrapItems
              key={step.id}
              onClick={() => handleClick(index)}
              data-testid={'step' + (index + 1)}
            >
              <StepProgressWrapItemText
                active={step.id === 1 ? true : step.active}
              >
                {step.title}
              </StepProgressWrapItemText>
              <StepProgressWrapItem
                active={step.id === 1 ? true : step.active}
              />
              <StepProgressLabelHidden data-testid={'steps' + (index + 1)}>
                active {activeStep}
              </StepProgressLabelHidden>
            </StepProgressWrapItems>
          ))}
        </StepProgressWrapItemsWr>
      ) : (
        <StepProgressLog>
          There's a minimum step of two and a maximum of five
        </StepProgressLog>
      )}
    </StepProgressWrap>
  );
});

export default StepProgress;
