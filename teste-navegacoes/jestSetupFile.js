export const mockNavigate = jest.fn()
export const mockGoBack = jest.fn()

global.mockedRouteName = 'User'

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual("@react-navigation/native")
  return{
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: mockGoBack
    }),
    NavigationContainer: ({ children }) => <>{children}</>,
    useRoute: () => {
      if(global.mockedRouteName === 'User'){
        return{
          params: { name: 'Gabriel Dias' }
        }
      }

      if(global.mockedRouteName === 'Contato'){
        return{
          params: { telefone: '999599920' }
        }
      }
    }
  }
})

jest.mock("@react-navigation/native-stack", () => {
  return{
    createNativeStackNavigator: () => ({
      Navigator: ({ children }) => <>{children}</>,
      Screen: ({ children }) => <>{children}</>
    })
  }
})