import { render, fireEvent } from '@testing-library/react-native'
import App from '../../App'

it('Test exemplo', () => {

  const num1 = 10
  const num2 = 20
  const soma = num1 + num2

  expect(soma).toBe(30)
  expect(soma).toBeGreaterThan(20)
  expect(soma).toBeLessThan(50)

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

    expect(counterText.props.children).toBe(1)
  })

  it('should decrease counter on clicking button', () => {
    const { getByText, getByTestId } = render(<App/>)

    const button = getByText('-')
    fireEvent.press(button)

    const counterText = getByTestId('counter')

    expect(counterText.props.children).toBe(-1)
  })

  it('should render the welcome component', () => {
    const { getByPlaceholderText, getByText } = render(<App/>)

    const input = getByPlaceholderText('Digite seu nome...')
    const loginButton = getByText(/login/i)

    fireEvent.changeText(input, 'Gabriel')
    fireEvent.press(loginButton)

    expect(input).toBeTruthy()
    expect(loginButton).toBeTruthy()
  })
 
})