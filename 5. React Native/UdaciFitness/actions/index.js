export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const ADD_ENTRY = 'ADD_ENTRY';

export function receiveEntries(entries) {
    return {
        type: RECEIVE_ENTRIES,
        entries,
    }
}

export function addEntry(entry) {
    console.log("add entry action")
    return {
        type: ADD_ENTRY,
        entry,
    }
}