import defaultSettings from '../settings.json';

const defaultTheme = localStorage.getItem('arco-theme') || 'light';

function changeTheme(newTheme?: 'string') {
  if ((newTheme || defaultTheme) === 'dark') {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
}

// init page theme
changeTheme();

export interface GlobalState {
  theme?: string;
  settings?: typeof defaultSettings;
  userInfo?: {
    name?: string;
    avatar?: string;
    job?: string;
    organization?: string;
    location?: string;
    email?: string;
  };
  drawerVisible: {
    status: boolean;
    title?: string;
    children: React.FC | null;
    componentData: any;
  };
  modalConfirm: {
    status: boolean;
    title?: string;
    children: React.FC | null;
  };
}

const initialState: GlobalState = {
  theme: defaultTheme,
  settings: defaultSettings,
  userInfo: null,
  drawerVisible: {
    status: false,
    title: '',
    children: null,
    componentData: {},
  },
  modalConfirm: {
    status: false,
    title: '',
    children: null,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'toggle-theme': {
      const { theme } = action.payload;
      if (theme === 'light' || theme === 'dark') {
        localStorage.setItem('arco-theme', theme);
        changeTheme(theme);
      }

      return {
        ...state,
        theme,
      };
    }
    case 'update-settings': {
      const { settings } = action.payload;
      return {
        ...state,
        settings,
      };
    }
    case 'update-userInfo': {
      const { userInfo } = action.payload;
      return {
        ...state,
        userInfo,
      };
    }
    case 'update-drawerVisible': {
      const { drawerVisible } = action.payload;
      return {
        ...state,
        drawerVisible,
      };
    }
    case 'update-modalConfirm': {
      const { modalConfirm } = action.payload;
      return {
        ...state,
        modalConfirm,
      };
    }
    default:
      return state;
  }
}
