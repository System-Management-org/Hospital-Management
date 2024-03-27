export function routing(username: string): any {
    const prefix = username.slice(0, 2).toUpperCase(); // Extract the first two characters and convert to uppercase
  
    switch (prefix) {
      case 'DC':
        window.location.href = '/Doctor';
        break;
      case 'NU':
        window.location.href = '/Nurse';
        break;
      case 'FD':
        window.location.href = '/Frontdesk';
        break;
      case 'AD':
        window.location.href = '/Admin';
        break;
      default:
        console.error('USER NOT FOUND');
        
        break;
    }
  };
  