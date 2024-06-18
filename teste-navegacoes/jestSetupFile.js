export const mockNavigate = jest.fn()
export const mockGoBack = jest.fn()

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual("@react-navigation/native")
  return{
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: mockGoBack
    }),
    NavigationContainer: ({ children }) => <>{children}</>,
    useRoute: () => ({
      params: { name: 'Gabriel Dias' }
    })
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