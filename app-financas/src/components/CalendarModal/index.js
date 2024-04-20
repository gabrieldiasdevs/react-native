import React, { useState } from 'react'
import { 
  Container, 
  ButtonFilterText,
  ModalContent,
  ButtonFilter
} from './styles'
import { TouchableWithoutFeedback, View } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { ptBR } from './localeCalendar'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export default function CalendarModal({ setVisible, handleFilter }){
  const [dateNow, setDateNow] = useState(new Date())
  const [markeddates, setMarkedDates] = useState({})

  function handleOnDayPress(date){
    
    setDateNow(new Date(date.dateString))

    let markedDay = {}

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3B3DBF',
      textColor: '#FFF'
    }

    setMarkedDates(markedDay)

  }

  function handleFilterDate(){
    handleFilter(dateNow)
    setVisible()
  }

  return(
    <Container>
      <TouchableWithoutFeedback onPress={setVisible} >
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <ModalContent>

        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markeddates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#FF0000',
            selectedDayBackgroundColor: '#00ADF5',
            selectedDayTextColor: '#FFF'
          }}
        />

        <ButtonFilter onPress={handleFilterDate} >
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  )
}