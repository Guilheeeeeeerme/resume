import type { ThemeMode } from '../hooks/useTheme'

const LABELS: Record<ThemeMode, string> = {
  system: 'Theme: System',
  light: 'Theme: Light',
  dark: 'Theme: Dark',
}

type Props = {
  mode: ThemeMode
  onCycle: () => void
}

export function ThemeToggle({ mode, onCycle }: Props) {
  return (
    <button
      type="button"
      className="toolbar-btn"
      onClick={onCycle}
      aria-label={`${LABELS[mode]}. Click to change theme.`}
      title={LABELS[mode]}
    >
      {mode === 'dark' ? 'Dark' : mode === 'light' ? 'Light' : 'System'}
    </button>
  )
}
