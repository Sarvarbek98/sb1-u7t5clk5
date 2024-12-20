import { useEffect } from 'react';
import { TelegramUser } from '@/types/telegram';

interface Props {
  onAuth: (user: TelegramUser) => void;
}

export default function TelegramAuth({ onAuth }: Props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-login', process.env.NEXT_PUBLIC_BOT_NAME || '');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.async = true;

    const container = document.getElementById('telegram-login');
    if (container) {
      container.appendChild(script);
    }

    // Add global callback
    (window as any).onTelegramAuth = (user: TelegramUser) => {
      onAuth(user);
    };

    return () => {
      if (container && script) {
        container.removeChild(script);
      }
    };
  }, [onAuth]);

  return <div id="telegram-login" className="flex justify-center my-4" />;
}