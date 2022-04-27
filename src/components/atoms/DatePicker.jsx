import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DataPicker() {

    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };

    return (

        <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={true}
            // themeVariant="light" USE THEME CONTEXT
            onChange={onChange}
            style={{ width: "50%" }}
        />

    )

}