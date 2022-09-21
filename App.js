import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [count, setcount] = useState(1);
  const [value1, setvalue1] = useState(true);
  const [title1, settitle1] = useState("");
  const [value2, setvalue2] = useState(true);
  const [title2, settitle2] = useState("");
  const [value3, setvalue3] = useState(true);
  const [title3, settitle3] = useState("");
  const [value4, setvalue4] = useState(true);
  const [title4, settitle4] = useState("");
  const [value5, setvalue5] = useState(true);
  const [title5, settitle5] = useState("");
  const [value6, setvalue6] = useState(true);
  const [title6, settitle6] = useState("");
  const [value7, setvalue7] = useState(true);
  const [title7, settitle7] = useState("");
  const [value8, setvalue8] = useState(true);
  const [title8, settitle8] = useState("");
  const [value9, setvalue9] = useState(true);
  const [title9, settitle9] = useState("");
  const move1 = useState(new Animated.Value(0))[0];

  function F_XO1() {
    setvalue1(true);
    setcount(count + 1);
    if (count % 2 == 1) {
      settitle1("X");
    } else {
      settitle1("O");
    }
    F_RUN();
  }

  function F_XO2() {
    setvalue2(true);
    setcount(count + 1);
    if (count % 2 == 1) {
      settitle2("X");
    } else {
      settitle2("O");
    }
    F_RUN();
  }

  function F_XO3() {
    setvalue3(true);
    setcount(count + 1);
    if (count % 2 == 1) {
      settitle3("X");
    } else {
      settitle3("O");
    }
    F_RUN();
  }

  function F_XO4() {
    setvalue4(true);
    setcount(count + 1);
    if (count % 2 == 1) {
      settitle4("X");
    } else {
      settitle4("O");
    }
    F_RUN();
  }

  function F_XO5() {
    setvalue5(true);
    setcount(count + 1);
    if (count % 2 == 1) {
      settitle5("X");
    } else {
      settitle5("O");
    }
    F_RUN();
  }

  function F_XO6() {
    setvalue6(true);
    setcount(count + 1);
    if (count % 2 == 1) {
      settitle6("X");
    } else {
      settitle6("O");
    }
    F_RUN();
  }

  function F_XO7() {
    setvalue7(true);
    setcount(count + 1);
    if (count % 2 == 1) {
      settitle7("X");
    } else {
      settitle7("O");
    }
  }
  F_RUN();

  function F_XO8() {
    setvalue8(true);
    setcount(count + 1);
    if (count % 2 == 1) {
      settitle8("X");
    } else {
      settitle8("O");
    }
    F_RUN();
  }

  function F_XO9() {
    setvalue9(true);
    setcount(count + 1);
    if (count % 2 == 1) {
      settitle9("X");
    } else {
      settitle9("O");
    }
    F_RUN();
  }

  function F_Start() {
    setvalue1(false);
    setvalue2(false);
    setvalue3(false);
    setvalue4(false);
    setvalue5(false);
    setvalue6(false);
    setvalue7(false);
    setvalue8(false);
    setvalue9(false);
    Animated.timing(move1, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }
  function F_Restart() {
    settitle1("");
    settitle2("");
    settitle3("");
    settitle4("");
    settitle5("");
    settitle6("");
    settitle7("");
    settitle8("");
    settitle9("");
    setvalue1(false);
    setvalue2(false);
    setvalue3(false);
    setvalue4(false);
    setvalue5(false);
    setvalue6(false);
    setvalue7(false);
    setvalue8(false);
    setvalue9(false);
  }
  function F_RUN() {
    var T1 = title1;
    var T2 = title2;
    var T3 = title3;
    var T4 = title4;
    var T5 = title5;
    var T6 = title6;
    var T7 = title7;
    var T8 = title8;
    var T9 = title9;

    if (T1 == T2 && T1 == T3 && T1 != "") {
      if (T1 == "X") {
        alert("Player 1 WON !");
      } else {
        alert("Player 2 WON !");
      }
    } else if (T1 == T4 && T1 == T7 && T1 != "") {
      if (T1 == "X") {
        alert("Player 1 WON !");
      } else {
        alert("Player 2 WON !");
      }
    } else if (T1 == T5 && T1 == T9 && T1 != "") {
      if (T1 == "X") {
        alert("Player 1 WON !");
      } else {
        alert("Player 2 WON !");
      }
    } else if (T5 == T2 && T5 == T8 && T5 != "") {
      if (T2 == "X") {
        alert("Player 1 WON !");
      } else {
        alert("Player 2 WON !");
      }
    } else if (T6 == T9 && T6 == T3 && T6 != "") {
      if (T3 == "X") {
        alert("Player 1 WON !");
      } else {
        alert("Player 2 WON !");
      }
    } else if (T5 == T7 && T5 == T3 && T5 != "") {
      if (T3 == "X") {
        alert("Player 1 WON !");
      } else {
        alert("Player 2 WON !");
      }
    } else if (T5 == T4 && T5 == T6 && T5 != "") {
      if (T5 == "X") {
        alert("Player 1 WON !");
      } else {
        alert("Player 2 WON !");
      }
    } else if (T8 == T7 && T7 == T9 && T7 != "") {
      if (T7 == "X") {
        alert("Player 1 WON !");
      } else {
        alert("Player 2 WON !");
      }
    } else if (
      T1 == "" ||
      T2 == "" ||
      T3 == "" ||
      T4 == "" ||
      T5 == "" ||
      T6 == "" ||
      T7 == "" ||
      T8 == "" ||
      T9 == ""
    ) {
    } else {
      alert("It's a Draw");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.HeaderBox}>
        <Text style={styles.Header}>Tic Tac Toe</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.Player}>Player1 : X</Text>
        <Text style={styles.Player}>Player2 : O</Text>
      </View>
      <Animated.View style={{ opacity: move1 }}>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={F_XO1}
            disabled={value1}
            style={[
              styles.container1,
              { borderTopWidth: 0, borderLeftWidth: 0 },
            ]}
          >
            <Text style={styles.text1}>{title1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={F_XO2}
            disabled={value2}
            style={[styles.container1, { borderTopWidth: 0 }]}
          >
            <Text style={styles.text1}>{title2}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={F_XO3}
            disabled={value3}
            style={[
              styles.container1,
              { borderTopWidth: 0, borderRightWidth: 0 },
            ]}
          >
            <Text style={styles.text1}>{title3}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={F_XO4}
            disabled={value4}
            style={[styles.container1, { borderLeftWidth: 0 }]}
          >
            <Text style={styles.text1}>{title4}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={F_XO5}
            disabled={value5}
            style={styles.container1}
          >
            <Text style={styles.text1}>{title5}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={F_XO6}
            disabled={value6}
            style={[styles.container1, { borderRightWidth: 0 }]}
          >
            <Text style={styles.text1}>{title6}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={F_XO7}
            disabled={value7}
            style={[
              styles.container1,
              { borderBottomWidth: 0, borderLeftWidth: 0 },
            ]}
          >
            <Text style={styles.text1}>{title7}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={F_XO8}
            disabled={value8}
            style={[styles.container1, { borderBottomWidth: 0 }]}
          >
            <Text style={styles.text1}>{title8}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={F_XO9}
            disabled={value9}
            style={[
              styles.container1,
              { borderBottomWidth: 0, borderRightWidth: 0 },
            ]}
          >
            <Text style={styles.text1}>{title9}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View style={styles.text}>
        <TouchableOpacity style={styles.botton} onPress={F_Start}>
          <Text style={styles.Btext}> Start </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botton} onPress={F_Restart}>
          <Text style={styles.Btext}> Restart </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.H}>Rules To Play :-</Text>

        <Text style={styles.T}>
          * The game is played on a grid that's 3 squares by 3 squares.
        </Text>
        <Text style={styles.T}>
          * You are X, your friend (or the computer in this case) is O.
        </Text>
        <Text style={styles.T}>
          * Players take turns putting their marks in empty squares.
        </Text>
        <Text style={styles.T}>
          * The first player to get 3 of her marks in a row (up, down, across,
          or diagonally) is the winner.
        </Text>
        <Text style={styles.T}>
          * When all 9 squares are full, the game is over.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botton: {
    height: 50,
    width: 100,
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#EEA47FFF",
  },
  H: {
    fontSize: 20,
    color: "red",
    margin: 5,
  },
  T: {
    margin: 5,
    marginLeft: 10,
    fontSize: 16,
    color: "#EEA47FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#00539CFF",
  },
  container1: {
    borderWidth: 1,
    borderColor: "#EEA47FFF",
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  HeaderBox: {
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    marginBottom: 10,
  },
  Player: {
    fontSize: 25,
    margin: 20,
    color: "#EEA47FFF",
    alignSelf: "center",
  },
  Header: {
    fontSize: 40,
    color: "#EEA47FFF",
  },
  text1: {
    fontSize: 20,
    color: "#EEA47FFF",
  },
  Btext: {
    fontSize: 20,
    color: "#00539CFF",
  },
});
