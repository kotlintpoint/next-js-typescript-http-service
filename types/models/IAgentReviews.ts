export interface AgentReviewRoot {
    data: AgentReview[]
}

export interface AgentReview {
    title: string
    timestamp: string
    rate: number
    comment: string
}