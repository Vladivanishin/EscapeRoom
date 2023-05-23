import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (text: string) => toast(text);

export const formatTime = (time: string): string => {
  const arr = time.split(':');

  return `${arr[0]}h${arr[1]}m`;
};
