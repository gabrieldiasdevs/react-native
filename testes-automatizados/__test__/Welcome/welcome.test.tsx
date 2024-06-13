import { render, fireEvent } from '@testing-library/react-native'
import { Welcome } from '../../src/Welcome'

describe('Welcome Component Tests', () => {

  it('should display welcome message on login button press', () => {
    const handleGetUserMock = jest.fn()

    const { getByText, getByPlaceholderText } = render(<Welcome handleGetUser={handleGetUserMock} />)

    const input = getByPlaceholderText('Digite seu nome...')
    fireEvent.changeText(input, 'Gabriel')

    const button = getByText(/login/i)

    fireEvent.press(button)

    expect(getByText('Bem vindo Gabriel')).toBeTruthy()
    expect(handleGetUserMock).toHaveBeenCalled()
  })

  it('should not display welcome message when input is empty and login button is pressed', () => {
    const handleGetUserMock = jest.fn()

    const { getByText, queryByText } = render(<Welcome handleGetUser={handleGetUserMock} />)

    const loginButton = getByText(/login/i)
    fireEvent.press(loginButton)

    const message = queryByText(/Bem vindo/)
    expect(message).toBeNull()
    expect(handleGetUserMock).not.toHaveBeenCalled()
  })

})