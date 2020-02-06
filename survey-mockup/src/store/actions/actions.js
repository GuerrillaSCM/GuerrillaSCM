export const SWITCH_PAGE = 'SWITCH_PAGE';

export const switchPage = (value) => {
    return {
        type: SWITCH_PAGE,
        page_index: value
    }
}