const SHOW_GLASS = "SHOW-GLASS";

let initialState = {
  glass: null,
  bidsAmount: null,
  bidsPrise: null,
  bidsTotal: null,
  asksAmount: null,
  asksPrise: null,
  asksTotal: null
};


export function glassCondition(state = initialState, action) {
  switch (action.type) {
    case SHOW_GLASS:
      return {
        ...state,
        bidsAmount: [
          ...action.bids.map((bids, ind) => {
            return bids[0];
          }),
        ],
        bidsPrise: [
          ...action.bids.map((bids, ind) => {
            return bids[1];
          }),
        ],
        bidsTotal: [
          ...action.bids.map((bids, ind) => {
            return bids[1] * bids[0];
          }),
        ],
        asksAmount: [
          ...action.asks.map((ask, ind) => {
            return ask[0];
          }),
        ],
        asksPrise: [
          ...action.asks.map((ask, ind) => {
            return ask[1];
          }),
        ],
        asksTotal: [
          ...action.asks.map((ask, ind) => {
            return ask[1] * ask[0];
          }),
        ],
      };
    default:
      return state;
  }
}

export const getGlassAC = (bids, asks) => ({
  type: SHOW_GLASS,
  bids,
  asks,
});
