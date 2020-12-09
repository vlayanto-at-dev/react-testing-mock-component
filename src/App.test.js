import React from 'react'
import { render, screen } from '@testing-library/react';
// import SampleComponent from './components/sample-component/SampleComponent';
import App from './App';
import userEvent from '@testing-library/user-event';

// const mockComponent = ({ handleAction1, handleAction2, value1, value2 }) => {
//   const invokeHandleAction1 = () => {
//     handleAction1(value1);
//   }

//   const invokeHandleAction2 = () => {
//     handleAction2(value2);
//   }

//   return (
//     <>
//       <div data-testid='action1' onClick={invokeHandleAction1} />
//       <div data-testid='action2' onClick={invokeHandleAction2} />
//     </>
//   );
// };

jest.mock('./components/sample-component/SampleComponent', () => ({ handleAction1, handleAction2, value1, value2 }) => {
  const invokeHandleAction1 = () => {
    handleAction1(value1);
  }

  const invokeHandleAction2 = () => {
    handleAction2(value2);
  }

  return (
    <>
      <div data-testid='action1' onClick={invokeHandleAction1} />
      <div data-testid='action2' onClick={invokeHandleAction2} />
    </>
  );
});

// jest.mock('./components/sample-component/SampleComponent', () => {
//   return {
//     __esModule: true,
//     default: jest.fn(),
//   }
// });
// jest.mock('./components/sample-component/SampleComponent', () => mockComponent);
// SampleComponent.mockImplementation(mockComponent);
// console.log('MockSampleComponent: ', SampleComponent);
// console.log('Initialize MockSampleComponent: ', SampleComponent({ value1: 1, value2: 2 }));

test('renders learn react link', () => {
  const consoleLogSpy = jest.spyOn(console, 'log');

  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const action1 = screen.getByTestId('action1');
  const action2 = screen.getByTestId('action2');
  userEvent.click(action1);
  userEvent.click(action2);
  expect(consoleLogSpy).toBeCalledTimes(2);
  // expect(linkElement).toBeInTheDocument();
});
