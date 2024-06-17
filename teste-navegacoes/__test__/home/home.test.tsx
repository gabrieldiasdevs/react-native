import { render } from '@testing-library/react-native'
import { Home } from '../../src/home'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../App'


describe("Test component Home", () => {

  it("should render text at home component", () => {
    const { getByText } = render(<Home/>)
    expect(getByText("Página Home")).toBeTruthy();
  })

  it('should navigaa')

}) 