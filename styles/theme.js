import { MD3DarkTheme, configureFonts } from 'react-native-paper';

// App color palette
export const COLORS = {
  text: '#f5f5f5',
  accent: '#ddff7d',
  surface: '#2d2d35',
  background: '#1c1c1c',
};

const { text, accent, surface, background } = COLORS;

/** Build theme with optional custom fonts { regular, medium, semiBold }. */
export function getAppTheme(customFonts) {
  const fontConfig =
    customFonts &&
    configureFonts({
      config: {
        bodyLarge: { fontFamily: customFonts.regular },
        bodyMedium: { fontFamily: customFonts.regular },
        bodySmall: { fontFamily: customFonts.regular },
        titleLarge: { fontFamily: customFonts.medium },
        titleMedium: { fontFamily: customFonts.medium },
        titleSmall: { fontFamily: customFonts.medium },
        labelLarge: { fontFamily: customFonts.medium },
        labelMedium: { fontFamily: customFonts.medium },
        labelSmall: { fontFamily: customFonts.medium },
        headlineLarge: { fontFamily: customFonts.semiBold },
        headlineMedium: { fontFamily: customFonts.semiBold },
        headlineSmall: { fontFamily: customFonts.semiBold },
        displayLarge: { fontFamily: customFonts.semiBold },
        displayMedium: { fontFamily: customFonts.semiBold },
        displaySmall: { fontFamily: customFonts.semiBold },
        default: { fontFamily: customFonts.regular },
      },
    });

  return {
    ...MD3DarkTheme,
    roundness: 12,
    colors: {
      ...MD3DarkTheme.colors,
      primary: accent,
      primaryContainer: accent,
      secondary: accent,
      tertiary: accent,
      onPrimary: background,
      onPrimaryContainer: background,
      outline: accent,
      surface,
      surfaceVariant: surface,
      background,
      onSurface: text,
      onSurfaceVariant: text,
      outlineVariant: surface,
    },
    ...(fontConfig && { fonts: fontConfig }),
  };
}

/** Default theme (before custom fonts load). */
export const appTheme = getAppTheme();

export const ACCENT_COLOR = accent;
