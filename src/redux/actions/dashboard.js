export function updateActiveTab(tab) {
    return async (dispatch, getState) => {
        dispatch(updateSubTableLoading(tab));
    }
}