import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Alert } from "react-native";
import {
  createStyleSheet,
  useStyles,
  UnistylesRuntime,
} from "react-native-unistyles";
import { Button, Card } from "./components";
import "./unistyles";

export default function App() {
  const { styles } = useStyles(stylesheet);

  const toggleTheme = () => {
    UnistylesRuntime.setTheme(
      UnistylesRuntime.themeName === "light" ? "dark" : "light"
    );
  };

  const showAlert = (message: string) => {
    Alert.alert("Button Pressed", message);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Karrin Test</Text>
        <Text style={styles.subtitle}>Built with Expo & Unistyles</Text>
      </View>

      <Card title="Theme Controls">
        <Text style={styles.infoText}>
          Current theme: {UnistylesRuntime.themeName}
        </Text>
        <Text style={styles.infoText}>
          Breakpoint: {UnistylesRuntime.breakpoint}
        </Text>
        <Button
          title={`Switch to ${
            UnistylesRuntime.themeName === "light" ? "Dark" : "Light"
          } Theme`}
          onPress={toggleTheme}
          variant="secondary"
        />
      </Card>

      <Card title="Button Variants">
        <Button
          title="Primary Button"
          onPress={() => showAlert("Primary button pressed!")}
          variant="primary"
        />
        <Button
          title="Secondary Button"
          onPress={() => showAlert("Secondary button pressed!")}
          variant="secondary"
        />
        <Button
          title="Danger Button"
          onPress={() => showAlert("Danger button pressed!")}
          variant="danger"
        />
        <Button
          title="Disabled Button"
          onPress={() => showAlert("This should not show")}
          disabled
        />
      </Card>

      <Card title="Button Sizes">
        <Button title="Small Button" size="small" />
        <Button title="Medium Button" size="medium" />
        <Button title="Large Button" size="large" />
      </Card>

      <Card title="About">
        <Text style={styles.bodyText}>
          This is a React Native app created with Expo and styled with
          Unistyles. Unistyles provides a powerful way to create responsive,
          theme-aware styles with TypeScript support.
        </Text>
      </Card>

      <StatusBar
        style={UnistylesRuntime.themeName === "dark" ? "light" : "dark"}
      />
    </ScrollView>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    padding: theme.spacing.md,
    paddingTop: theme.spacing.xxl,
  },
  header: {
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontSize: theme.fontSize.xxl,
    fontWeight: "bold",
    color: theme.colors.text,
    textAlign: "center",
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: "center",
  },
  infoText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  bodyText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    lineHeight: 24,
  },
}));
