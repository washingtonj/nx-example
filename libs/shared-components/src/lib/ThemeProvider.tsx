import './ThemeProvider.css'

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  return (
    <div className="theme-provider">
      {props.children}
    </div>
  );
}
