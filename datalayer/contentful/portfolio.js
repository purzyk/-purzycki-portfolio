import { client } from './client'
import { portfolioReducer } from './utils';

export const getPortfolios = async () => {
    const portfolios = await client.getEntries({ content_type: 'portfolio' })
    return portfolios.items
}