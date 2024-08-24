import Swal from 'sweetalert2';
import { ERROR, SUCCESS, WARNING } from '@/constants/message.constant';

const swal = ({ title, text, type, onConfirm, onCancel }) => {
  const baseConfig = {
    background: '#FFF8E8',
    color: '#33322E',
    confirmButtonColor: '#FF8C42',
    cancelButtonColor: '#FFB347',
    confirmButtonText: 'Tamam',
    cancelButtonText: 'İptal',
  };

  let swalConfig = { ...baseConfig, title, text };

  switch (type) {
    case SUCCESS:
      swalConfig = {
        ...swalConfig,
        icon: 'success',
        iconColor: '#FF8C42',
      };
      break;
    case ERROR:
      swalConfig = {
        ...swalConfig,
        icon: 'error',
        iconColor: '#FF5733',
      };
      break;
    case WARNING:
      swalConfig = {
        ...swalConfig,
        icon: 'warning',
        iconColor: '#FFC75F',
        showCancelButton: true,
      };
      break;
    default:
      swalConfig = { ...swalConfig, icon: 'info', iconColor: '#FFB347' };
  }

  return Swal.fire(swalConfig).then((result) => {
    if (result.isConfirmed && onConfirm) {
      onConfirm();
    } else if (result.dismiss === Swal.DismissReason.cancel && onCancel) {
      onCancel();
    }
  });
};

export default swal;
