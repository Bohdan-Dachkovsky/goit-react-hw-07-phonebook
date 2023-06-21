export const getTasks = state => state.user.items;
export const getStatusFilter = state => state.user.filter;
export const getLoading = state => state.user.isLoading;
export const errorMessage = state => state.user.error;