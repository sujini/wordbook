import {createSelector} from 'reselect';

const selectWord = state=>state.word;

export const selectCollections = createSelector(
    [selectWord],
    word=>word.collections
)
export const selectIsCollectionFetching = createSelector(
    [selectWord],
    word=>word.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectWord],
    word => !!word.collections
)
export const selectLimit = createSelector(
    [selectWord],
    word=>word.limit
)
export const selectSearchCollections = createSelector(
    [selectWord],
    word=>word.searchCollections
)
export const selectIsSearchCollectionsLoaded = createSelector(
    [selectWord],
    word => !!word.searchCollections
)
