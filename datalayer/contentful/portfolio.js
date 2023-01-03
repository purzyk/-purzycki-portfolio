import { client } from './client'

export const getPortfolios = async () => {
    const portfolios = await client.getEntries({ content_type: 'portfolio', order: "-fields.dateCreated", })
    return portfolios.items
}