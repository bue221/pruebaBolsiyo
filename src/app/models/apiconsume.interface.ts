export interface Loadable {
  loading: boolean;
  success: boolean;
  error: any;
}

export function createDefaultLoadable() {
  return {
    loading: false,
    success: false,
    error: null,
  };
}

export function onLoadableLoad() {
  return {
    loading: true,
    success: false,
    error: null,
  };
}
export function onLoadableSuccess() {
  return {
    loading: false,
    success: true,
    error: null,
  };
}
export function onLoadableError(error: string) {
  return {
    loading: false,
    success: false,
    error: error,
  };
}
