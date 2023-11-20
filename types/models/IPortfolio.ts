export interface PortfolioRoot {
    portfolio: Portfolio[]
    path: string
}

export interface Portfolio {
    id: number
    profile_id: number
    title: string
    description?: string
    last_update: string
    status: number
    portfolio_files: PortfolioFile[]
}

export interface PortfolioFile {
    id: number
    path: string
    type: number
    sort: number
    timestamp: string
}
