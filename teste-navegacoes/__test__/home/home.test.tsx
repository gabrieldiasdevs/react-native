import { render } from '@testing-library/react-native'
import { Home } from '../../src/Home'


describe("Test component Home", () => {

  it("should render text at home component", () => {
    const { getByText } = render(<Home/>)
    expect(getByText("Página home!")).toBeTruthy();

  })

}) 