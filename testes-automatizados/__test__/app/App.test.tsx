import { render, fireEvent } from '@testing-library/react-native'
import App from '../../App'

it('Test exemplo', () => {

  const num1 = 10
  const num2 = 20
  const soma = num1 + num2

  expect(soma).toBe(30)

})

describe('App Component Test', () => {

  it('should Test render App component', () => {
    const { getByText } = render(<App/>)

    expect(getByText('App Contador')).toBeTruthy()
  })

  it('should change counter on press button', () => {
    const { getByText, getByTestId } = render(<App/>)

    const button = getByText('+')
    fireEvent.press(button)

    const counterText = getByTestId('counter')

    expect(counterText.props.children).toBe('')
  })

})