import DateTimePicker from '@react-native-community/datetimepicker';

export default function DataPicker({ state, setState }) {

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setState(currentDate);
    };

    return (

        <DateTimePicker
            testID="dateTimePicker"
            value={state}
            mode="time"
            is24Hour={true}
            // themeVariant="light" USE THEME CONTEXT
            onChange={onChange}
            style={{ width: "50%" }}
        />

    )

}