import { createSlice } from "@reduxjs/toolkit";
import {OFFSET_LIVE_CHAT} from "./uiConstants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [{ id: 1, name: "YouTubeBot", message: "Welcome to live chat 👋", img: "https://i.pravatar.cc/40?img=1" },]
    },
    reducers: {

        addChatMessage: (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT,1);
            state.messages.unshift(action.payload);
        }
    }
});

export const { addChatMessage } = chatSlice.actions;
export default chatSlice.reducer;