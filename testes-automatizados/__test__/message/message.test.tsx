import { render, screen, fireEvent } from '@testing-library/react-native'
import { Message } from '../../src/Message'

describe('Component Message', () => {
  
  it('should render text message', () => {
    render(<Message/>)

    //expect(getByTestId('message').props.children).toBe('Aguardando...')
    expect(screen.getByTestId('message').props.children).toBe('Aguardando...')
  })

  it('should change message on click button', async () => {
    render(<Message/>)

    expect(screen.getByTestId('message').props.children).toBe('Aguardando...')

    fireEvent.press(screen.getByText('Acessar'))

    //expect(screen.getByTestId('message').props.children).toBe('Bem vindo Gabriel')

    const text = await screen.findByText('Bem vindo Gabriel')
    expect(text.props.children).toBe('Bem vindo Gabriel')
  })

})