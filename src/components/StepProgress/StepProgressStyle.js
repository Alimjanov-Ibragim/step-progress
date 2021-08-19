import styled from 'styled-components';

export const StepProgressWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 400px;
  height: 25px;
  margin: 30px auto;
`;

export const StepProgressWrapItemsWr = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;

export const StepProgressWrapItems = styled.div`
  position: relative;
  /* width: 100%; */
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
`;

export const StepProgressWrapItem = styled.div`
  position: absolute;
  top: 0;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  border: 5px solid ${props => (!props.active ? '#dbdbdb' : '#5124da')};
  cursor: pointer;
  /* transition: all 0.3s ease-in; */
`;

export const StepProgressWrapLine = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -4px;
  left: 0;
  right: 0;
  width: ${props => (props.width ? props.width + '%' : '0')};
  height: 5px;
  background: ${props => (props.bg ? '#5124da' : '#dbdbdb')};
  transition: all 0.3s ease-in;
`;

export const StepProgressLog = styled.div``;

export const StepProgressWrapItemText = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  margin-left: -50px;
  width: 100px;
  font-size: 18px;
  color: ${props => (!props.active ? '#dbdbdb' : '#5124da')};
  text-align: center;
`;
