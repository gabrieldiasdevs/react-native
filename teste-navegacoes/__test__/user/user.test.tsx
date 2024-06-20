import { render, fireEvent } from '@testing-library/react-native'
import { User } from '../../src/user'
import { decrease } from '../../src/utils/math'

jest.mock('../../src/utils/math', () => {
  return{
    decrease: jest.fn()
  }
})

beforeEach(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})

describe('User Component Tests', () => {

  it('should check render text', () => {
    const { getByText } = render(<User/>)

    expect(getByText('Página Usuário')).toBeTruthy()
    expect(getByText('Gabriel Dias')).toBeTruthy()
  })
  
  it('should call handleCalculate function', () => {
    const logSpy = jest.spyOn(console, 'log')

    const { getByText } = render(<User/>)

    const buttonCalcular = getByText('Calcular')
    fireEvent.press(buttonCalcular)

    expect(logSpy).toHaveBeenCalledWith(30)
  })

  it('should call decrease function' , () => {
    const { getByText } = render(<User/>)

    const buttonDiminuir = getByText('Diminuir')
    fireEvent.press(buttonDiminuir)

    expect(decrease).toHaveBeenCalledWith(50, 20)
  })

})