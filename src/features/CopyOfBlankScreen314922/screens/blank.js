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
    CheckBox_2: true,
    CheckBox_3: true,
    TextInput_4: "",
    TextInput_5: "hgfhfhgfhgfhgfhgf",
    TextInput_8: "hghgjhgjgjhgh jhgjghj jhgjhg"
  }

  render = () => (
    <View>
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.CheckBox_2}
        checked={this.state.CheckBox_2}
        onPress={nextChecked => this.setState({ CheckBox_2: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        containerStyle={styles.CheckBox_3}
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        style={styles.TextInput_4}
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <Text style={styles.Text_6}>Sample text content</Text>
      <Button
        title="Press me!"
        style={styles.Button_7}
        onPress={() => alert("Pressed!")}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        style={styles.TextInput_8}
        value={this.state.TextInput_8}
        onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
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
  CheckBox_2: {
    textDecorationLine: "overline",
    textTransform: "uppercase",
    letterSpacing: 11
  },

  CheckBox_3: {
    textDecorationLine: "line-through",
    textTransform: "uppercase",
    lineHeight: 32,
    letterSpacing: 15
  },

  TextInput_4: {
    textDecorationLine: "line-through",
    textTransform: "uppercase"
  },

  TextInput_5: { textDecorationLine: "overline", textTransform: "uppercase" },
  Text_6: {
    textDecorationLine: "underline overline",
    textTransform: "uppercase"
  },

  Button_7: { textTransform: "capitalize" },
  TextInput_8: { textDecorationLine: "underline", textTransform: "uppercase" },
  View_1: {},
  CheckBox_2: {
    textDecorationLine: "overline",
    textTransform: "uppercase",
    letterSpacing: 11
  },
  CheckBox_3: {
    textDecorationLine: "line-through",
    textTransform: "uppercase",
    lineHeight: 32,
    letterSpacing: 15
  },
  TextInput_4: {
    textDecorationLine: "line-through",
    textTransform: "uppercase"
  },
  TextInput_5: {
    textDecorationLine: "overline",
    textTransform: "uppercase",
    letterSpacing: 3
  },
  Text_6: {
    textDecorationLine: "underline overline",
    textTransform: "uppercase",
    lineHeight: 17,
    letterSpacing: 7
  },
  Button_7: { textTransform: "capitalize" },
  TextInput_8: {
    height: 100,
    textDecorationLine: "underline",
    textTransform: "uppercase",
    letterSpacing: 8
  }
})
