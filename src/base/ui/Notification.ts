import { showMessage } from 'react-native-flash-message';

export default class Notification {
  static showSuccess = (successMessage: string) => {
    showMessage({
      message: successMessage,
      type: 'success',
      // type: 'default', // FOR custom colors
      // backgroundColor: colors.success, // FOR custom colors
      icon: 'success',
    });
  };

  static showError = (errorMessage: string) => {
    showMessage({
      message: errorMessage,
      type: 'danger',
      // type: 'default', // FOR custom colors
      // backgroundColor: colors.danger, // FOR custom colors
      icon: 'danger',
    });
  };
}
