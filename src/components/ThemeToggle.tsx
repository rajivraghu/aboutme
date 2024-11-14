import { Sun, Moon, Laptop } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className="flex items-center gap-2 bg-secondary rounded-full p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full ${theme === 'light' ? 'bg-background text-foreground' : 'text-muted-foreground'}`}
        title="Light theme"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full ${theme === 'system' ? 'bg-background text-foreground' : 'text-muted-foreground'}`}
        title="System theme"
      >
        <Laptop size={16} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-background text-foreground' : 'text-muted-foreground'}`}
        title="Dark theme"
      >
        <Moon size={16} />
      </button>
    </div>
  );
}