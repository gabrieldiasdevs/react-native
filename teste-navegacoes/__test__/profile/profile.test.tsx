import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { Profile } from '../../src/profile'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../App'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Test Component Profile', () => {

  it('should check render text', () => {
    const { getByText } = render(<Profile/>)

    const text = getByText('Página Profile')
    expect(text).toBeTruthy()
  })

  it('should navigate home when click back button', async () => {
    const { getByText } = render (<Profile/>)

    const backButton = getByText('Voltar')
    fireEvent.press(backButton)

    const { goBack } = useNavigation<NativeStackNavigationProp<StackParamList>>()

    await waitFor(() => {
      expect(goBack).toHaveBeenCalledTimes(1)
    })
  }) 

})