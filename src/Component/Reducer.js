export const Reducer = (state, action) => {

    switch (action.type) {
        case "FETCHING_DATA":
            return {
                ...state,
                NewsData: action.payload
            }
        case "FETCHING_SEARCH_DATA":
            return {
                ...state,
                SearchResult: action.payload
            }
        case "FETCHING_TRENDING_DATA":
            return {
                ...state,
                TrendingData: action.payload
            }
        case "SET_SEARCH_DATA":
            return {
                ...state,
                SearchText: action.payload
            }
        case "CHANGE_TOPIC":
            return {
                ...state,
                Topic: action.payload,
                pageSet: 0
            }

        case "CHANGE_PAGE":
            return {
                ...state,
                pageSet: action.payload
            }
        case "CHANGE_MODE":
            const newMode = state.Mode === "light" ? "dark" : "light";
            return {
                ...state,
                Mode: newMode
            }
        case "LOADING":
            return {
                ...state,
                isLoading: action.payload
            }
        case "ERROR":
            return {
                ...state,
                isError: action.payload
            }
        default: return state;
    }
}