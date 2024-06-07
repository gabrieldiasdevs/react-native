import { render, waitFor } from '@testing-library/react-native'
import AxiosMockAdapter from 'axios-mock-adapter'
import api from '../../src/services/api'
import { Game } from '../../src/Game'

const mock = new AxiosMockAdapter(api)

describe('Game Component Tests', () => {
  afterEach(() => {
    mock.reset()
  })

  it('renders game data correctly on Api call', async () => {
    mock.onGet('/next-api/?api=game&id=15').reply(200, {
      title: 'Jogo teste 1',
      image_url: 'https://sujeitoprogramador.com/next-api/foto15.png'
    })

    const { getByText, getByTestId } = render(<Game/>)

    await waitFor(() => {
      expect(getByText('Jogo teste 1')).toBeTruthy()
      expect(getByTestId('avatarGame').props.source.uri).toBe('https://sujeitoprogramador.com/next-api/foto15.png')
    })
  })

  it('should display an error message when the api call fails', async () => {
    mock.onGet('/next-api/?api=game&id=15').networkError()

    const { findByText } = render(<Game/>)

    const erroMessage = await findByText('Erro ao buscar dados')

    expect(erroMessage).toBeTruthy()
  })

})