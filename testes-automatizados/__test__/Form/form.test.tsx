import { render, fireEvent } from '@testing-library/react-native'
import { Form } from '../../src/Form'

describe('Component Form', () => {
  
  it('should call handleLogin with username and password when button pressed', () => {
    const { getByText, getByPlaceholderText } = render(<Form/>)

    const emailInput = getByPlaceholderText('Digite seu email')
    const passwordInput = getByPlaceholderText('Digite sua senha')
    const button = getByText('Login')

    fireEvent.changeText(emailInput, 'teste@teste.com')
    fireEvent.changeText(passwordInput, '123123')

    fireEvent.press(button)

    expect(getByText('Login autorizado!')).toBeTruthy()
  })

  it('should check render text user', () => {
    const { getByText, getByPlaceholderText, queryByText } = render(<Form/>)

    const emailInput = getByPlaceholderText('Digite seu email')
    const passwordInput = getByPlaceholderText('Digite sua senha')
    const button = getByText('Login')

    fireEvent.changeText(emailInput, 'gabriel@teste.com')
    fireEvent.changeText(passwordInput, '05092003')

    fireEvent.press(button)

    expect(queryByText('Login autorizado!')).not.toBeTruthy()
  })

})