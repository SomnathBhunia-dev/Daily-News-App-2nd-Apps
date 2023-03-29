import React, { createContext, useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { Reducer } from './Component/Reducer'

const DataStore = createContext()
export const Context = ({ children }) => {

    const InitialState = {
        NewsData: '',
        isLoading: false,
        isError: '',
        Topic: '',
        pageSet: 0,
        SearchText: '',
        SearchResult: '',
        Mode: 'light'
    }

    const [state, dispatch] = useReducer(Reducer, InitialState)

    // Daily Top Newses 

    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/',
        params: {
            count: 10,
            offset: state.pageSet,
            category: state.Topic,
            mkt: 'en-IN',
            safeSearch: 'Off',
            textFormat: 'Raw'
        },
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': 'e079a6c65fmsh27223512049bb6ap192507jsn3886476fe222',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };

    const DataFetch = async () => {

        try {
            dispatch({ type: "LOADING", payload: true })
            let response = await axios.request(options)
            let parsedData = response.data
            dispatch({ type: "FETCHING_DATA", payload: parsedData.value })
        } catch (error) {
            console.error(error)
            dispatch({ type: "ERROR", payload: error })
        } finally {
            dispatch({ type: "LOADING", payload: false })
        }
    }

    useEffect(() => {
        DataFetch()
    }, [state.Topic, state.pageSet])

    // Search Newses 

    const SearchOptions = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {
            q: state.SearchText, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'
        },
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': 'e079a6c65fmsh27223512049bb6ap192507jsn3886476fe222',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };

    const Search = (e) => {
        dispatch({ type: "SET_SEARCH_DATA", payload: e })
    }
    const SearchFetch = async () => {
        try {
            if (state.SearchText !== '') {
                dispatch({ type: "LOADING", payload: true })
                let response = await axios.request(SearchOptions)
                let parsedData = response.data
                dispatch({ type: "FETCHING_SEARCH_DATA", payload: parsedData.value })
            }
            else {
                dispatch({ type: "FETCHING_SEARCH_DATA", payload: [] })
            }
        } catch (error) {
            console.error(error)
            dispatch({ type: "ERROR", payload: error })
        } finally {
            dispatch({ type: "LOADING", payload: false })
        }
    }

    useEffect(() => {
        SearchFetch()
    }, [state.SearchText])


    // Navbar Search 

    const chooseTopic = (e) => {
        dispatch({ type: 'CHANGE_TOPIC', payload: e })
    }

    const topics = [
        { name: 'Home', topic: '' },
        { name: 'Business', topic: 'Business' },
        { name: 'Entertainment', topic: 'Entertainment' },
        { name: 'Lifestyle', topic: 'Lifestyle' },
        { name: 'Politics', topic: 'Politics' },
        { name: 'Science & Technology', topic: 'ScienceAndTechnology' },
        { name: 'Sports', topic: 'Sports' },
        { name: 'World', topic: 'World' },
    ];

    const changePage = (e) => {
        dispatch({ type: "CHANGE_PAGE", payload: e })
    }

    useEffect(() => {
        let MainTitle = "Daily News";
        let title = state.Topic ? MainTitle + ` | ${state.Topic}` : MainTitle + ` | Home`
        if (state.Topic === "ScienceAndTechnology") {
            title = MainTitle + `| Science & Technology`;
        }
        document.title = title;
    }, [state.Topic]);

    const ModeChange = () => {
        dispatch({ type: "CHANGE_MODE" })
    }


    useEffect(() => {
        if (state.Mode === 'dark') {
            document.body.style.backgroundColor = '#113468';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
        }
    }, [state.Mode])
    return (
        < >
            <DataStore.Provider value={{ ...state, dispatch, topics, chooseTopic, changePage, Search, ModeChange }}>
                {children}
            </DataStore.Provider>
        </>
    )
}

export const ContextApi = () => {
    return useContext(DataStore)
}

export default Context