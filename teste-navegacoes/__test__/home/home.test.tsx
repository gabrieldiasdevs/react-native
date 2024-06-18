import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { Home } from '../../src/home'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../App'

beforeEach(() => {
  jest.clearAllMocks()
})

describe("Test component Home", () => {

  afterEach(() => {
    (global as any).mockedRouteName = 'User'
  })

  it("should render text at home component", () => {
    const { getByText } = render(<Home/>)
    expect(getByText("Página Home")).toBeTruthy();
  })

  it('should navigates to Profile screen when button is pressed', async () => {
    const { getByText } = render(<Home/>)

    const button = getByText('Perfil')
    fireEvent.press(button)

    const { navigate } = useNavigation<NativeStackNavigationProp<StackParamList>>()

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('Profile')
    })
  })

  it('should navigate to user screen when button is pressed', async () => {
    (global as any).mockedRouteName = 'User'
    const { getByText } = render(<Home/>)

    const button = getByText('User')
    fireEvent.press(button)

    const { navigate } = useNavigation<NativeStackNavigationProp<StackParamList>>()

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('User', { name: 'Gabriel Dias' })
    })
  })

  it('should navigate to contato screen when button is pressed', async () => {
    (global as any).mockedRouteName = 'Contato'
    const { getByText } = render(<Home/>)

    const button = getByText('Contato')
    fireEvent.press(button)

    const { navigate } = useNavigation<NativeStackNavigationProp<StackParamList>>()

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('Contato', { telefone: '999599920' })
    })
  })

})