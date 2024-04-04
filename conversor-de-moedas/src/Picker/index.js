import { View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export function PickerItem() {
  return(
    <View>
      <Picker>
        <Picker.Item value='BTC' key={0} label='BTC' />
      </Picker>
    </View>
  )
}