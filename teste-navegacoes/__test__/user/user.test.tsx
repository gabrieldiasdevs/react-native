import { render } from '@testing-library/react-native'
import { User } from '../../src/user'

describe('User Component Tests', () => {

  it('should check render text', () => {
    const { getByText } = render(<User/>)

    expect(getByText('Página Usuário')).toBeTruthy()
    expect(getByText('Gabriel Dias')).toBeTruthy()
  })
  

})