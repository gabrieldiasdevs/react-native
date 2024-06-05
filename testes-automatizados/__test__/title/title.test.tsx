import { render } from '@testing-library/react-native'
import { Title } from '../../src/Title'

describe('Tests title Component', () => {
  
  it('should render title correctly', () => {
    const { getByText } = render(<Title title='Malu Carvalho' />)

    expect(getByText('Malu Carvalho')).toBeTruthy()
  })

  it('should check style', () => {
    const { getByText } = render(<Title title='Gabriel' />)

    const titleElement = getByText('Gabriel')

    expect(titleElement.props.style).toMatchObject({
      fontSize: 28,
      color: 'red',
      marginBottom: 20
    })
  })

})