import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const ApiURL = 'https://shazam.p.rapidapi.com'
const Headers =  {
    'X-RapidAPI-Key': '22724dd69emshf85f45493b5eca8p10346ajsn8177ceaf1bcb',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
export interface PlayListState {
    list : any,
    favourite : any
    searchResult: any
}

const initialState: PlayListState = {
    list : [],
    favourite : [],
    searchResult : []

}

export const fetchPlayList = createAsyncThunk(
    'playList/fetchPlayList',
    async () => {
      const response = await axios.get(`${ApiURL}/songs/list-recommendations?key=484129036&locale=en-US`,{headers : Headers});
      return response.data;
    }
  );

  interface SearchListParams {
    term: string;
  }
  
export const fetchSearchList = createAsyncThunk(
    'playList/fetchSearchList',
    async (params: SearchListParams) => {
    console.log("🚀 ~ file: playListReducer.tsx:36 ~ params:", params)
      const response = await axios.get(`${ApiURL}/search?term=${params?.term}&locale=en-US&offset=0&limit=5`,{headers : Headers});
      console.log("🚀 ~ file: playListReducer.tsx:39 ~ response:", response)
      return response.data;
    }
)

export const playListSlice = createSlice({
  name: 'playList',
  initialState,
  reducers: {
    clearState: (state) => {
        state.list = []
      },
    addToFavourite: (state, action: PayloadAction<any>) => {
        state.favourite.push(action.payload)
        localStorage.setItem('favourite_music',JSON.stringify(state.favourite))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlayList.pending, (state) => {
        state.list = [];

    });
    builder.addCase(fetchPlayList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(fetchPlayList.rejected, (state, action) => {
    state.list =[];
    });
    builder.addCase(fetchSearchList.fulfilled, (state, action) => {
        state.searchResult = action.payload;
      });
  },

})

export const { clearState, addToFavourite } = playListSlice.actions

export default playListSlice.reducer