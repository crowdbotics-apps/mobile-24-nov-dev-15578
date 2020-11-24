import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    Switch_2: true,
    DateTimePicker_3: new Date(""),
    CheckBox_4: true,
    CheckBox_5: false,
    CheckBox_6: false,
    CheckBox_7: true
  }

  render = () => (
    <View>
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_2}
        value={this.state.Switch_2}
        onValueChange={nextChecked => this.setState({ Switch_2: nextChecked })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_3}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_3: selectedDate })
        }
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        containerStyle={styles.CheckBox_6}
        checked={this.state.CheckBox_6}
        onPress={nextChecked => this.setState({ CheckBox_6: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        containerStyle={styles.CheckBox_7}
        checked={this.state.CheckBox_7}
        onPress={nextChecked => this.setState({ CheckBox_7: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Switch_2: { alignSelf: "flex-start" },
  DateTimePicker_3: {},
  CheckBox_4: {},
  CheckBox_5: {},
  View_1: {},
  Switch_2: { alignSelf: "flex-start" },
  DateTimePicker_3: {},
  CheckBox_4: {},
  CheckBox_5: {},
  CheckBox_6: {
    borderLeftWidth: 3,
    borderRightWidth: 4,
    borderTopWidth: 2,
    borderBottomWidth: 5,
    borderRadius: 7,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "underline overline",
    textTransform: "uppercase",
    lineHeight: 12,
    letterSpacing: 1
  },
  CheckBox_7: {
    textDecorationLine: "underline overline",
    textTransform: "uppercase"
  }
})
