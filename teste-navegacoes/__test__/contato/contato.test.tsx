import { render, waitFor } from '@testing-library/react-native'
import { Contato } from '../../src/contato'

describe('Component Contato Tests', () => {

  afterEach(() => {
    (global as any).mockedRouteName = 'User'
  })

  it('should check phone text', async () => {
    (global as any).mockedRouteName = 'Contato'

    const { getByText } = render(<Contato/>)

    await waitFor(() => {
      expect(getByText('999599920')).toBeTruthy()
    })
  })

})