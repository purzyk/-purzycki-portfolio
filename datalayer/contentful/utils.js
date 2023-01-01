
export const portfolioReducer = (rawPortfolio) => {
    let portfolio = { ...rawPortfolio.fleds }

    portfolio.id = rawPortfolio.sys.id
    portfolio.locale = rawPortfolio.sys.locale
}