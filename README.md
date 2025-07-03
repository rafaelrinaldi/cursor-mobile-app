# React Native Mobile App

A modern React Native application built with Expo and styled with Unistyles.

## Features

- 🎨 **Unistyles Integration** - Advanced styling system with theme support
- 🌙 **Dark/Light Theme** - Toggle between themes with runtime support
- 📱 **Responsive Design** - Breakpoint-based responsive layouts
- ⚡ **Expo SDK** - Latest Expo SDK with TypeScript
- 🧩 **Reusable Components** - Custom Button and Card components
- 🎯 **Type Safety** - Full TypeScript support throughout

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cursor-mobile-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator (macOS only)
- `npm run web` - Run in web browser

## Project Structure

```
├── App.tsx                 # Main application component
├── unistyles.ts            # Unistyles configuration and themes
├── components/             # Reusable UI components
│   ├── Button.tsx          # Custom button component
│   ├── Card.tsx            # Card container component
│   └── index.ts            # Component exports
├── assets/                 # Static assets (images, fonts, etc.)
└── package.json           # Project dependencies
```

## Styling with Unistyles

This project uses [react-native-unistyles](https://github.com/jpudysz/react-native-unistyles) for styling, which provides:

- **Theme Support**: Easy switching between light and dark themes
- **Responsive Design**: Breakpoint-based responsive layouts
- **TypeScript Integration**: Full type safety for themes and breakpoints
- **Runtime Theme Changes**: Dynamic theme switching without app restart

### Theme Configuration

The theme configuration is defined in `unistyles.ts` and includes:

- Color palettes for light and dark themes
- Spacing scale (xs, sm, md, lg, xl, xxl)
- Border radius values
- Font sizes
- Responsive breakpoints

### Usage Example

```tsx
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const MyComponent = () => {
  const { styles, theme } = useStyles(stylesheet);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
  },
}));
```

## Components

### Button Component

A flexible button component with multiple variants and sizes:

```tsx
<Button 
  title="Primary Button" 
  variant="primary" 
  size="medium" 
  onPress={() => console.log('Pressed')} 
/>
```

**Props:**
- `title`: Button text
- `variant`: 'primary' | 'secondary' | 'danger'
- `size`: 'small' | 'medium' | 'large'
- `onPress`: Callback function
- `disabled`: Boolean to disable the button

### Card Component

A container component with consistent styling:

```tsx
<Card title="Card Title">
  <Text>Card content goes here</Text>
</Card>
```

**Props:**
- `title`: Optional card title
- `children`: Card content

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Unistyles Documentation](https://github.com/jpudysz/react-native-unistyles)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
