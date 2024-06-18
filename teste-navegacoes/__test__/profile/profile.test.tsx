import { render } from '@testing-library/react-native'
import { Profile } from '../../src/profile'

describe('Test Component Profile', () => {

  it('should render text in screen', () => {
    const { getByText } = render(<Profile/>)

    const text = getByText('Página Profile')

    expect(text).toBeTruthy()
  })

})