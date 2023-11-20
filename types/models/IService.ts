export interface ServiceRoot {
    data: Service[]
}

export interface Service {
    id: number
    gigTitle: string
    description: string
    deadlineValue: number
    deadlineType: string
    gigType: string
    platformName?: string
    platform_icon?: string
    colorCode?: string
    username?: string
    followersCount?: number
    redirectUrl?: string
    iOSRedirectUrl?: string
    androidRedirectUrl: any
    minPrice: number
    sum_rating: number
    gig_count_rating: number
    starpoints: number
    real_count: number
}
