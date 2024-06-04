import { render } from '@testing-library/react-native'
import App from '../../App'

it("Test exemplo", () => {

  expect(1).toBe(1)

})

it("Test render App component", () => {
  render(<App/>)
})