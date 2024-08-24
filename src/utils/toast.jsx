import { ERROR, SUCCESS, WARNING } from '@/constants/message.constant';
import toast from 'react-hot-toast';
import { FaExclamationTriangle } from 'react-icons/fa';

const showToast = (type, message, duration = 1000, width = '300px') => {
  const commonStyle = {
    minWidth: width,
    maxWidth: '100%',
  };

  switch (type) {
    case SUCCESS:
      toast.success(message, {
        position: 'top-right',
        duration: duration,
        style: {
          ...commonStyle,
          background: '#10B981', // Yeşil arka plan
          color: 'white',
        },
      });
      break;
    case ERROR:
      toast.error(message, {
        position: 'top-right',
        duration: duration,
        style: {
          ...commonStyle,
          background: '#EF4444', // Kırmızı arka plan
          color: 'white',
        },
      });
      break;
    case WARNING:
      toast(
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaExclamationTriangle style={{ marginRight: '8px' }} />
          {message}
        </div>,
        {
          position: 'top-right',
          duration,
          style: {
            ...commonStyle,
            background: '#F59E0B', // Turuncu arka plan
            color: 'white',
          },
        }
      );
      break;
    default:
      toast(message, {
        position: 'top-right',
        duration: duration,
        style: commonStyle,
      });
      break;
  }
};

export default showToast;
