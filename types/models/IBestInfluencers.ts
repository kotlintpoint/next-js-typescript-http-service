export interface IBestInfluencersRoot {
    bestInfluencers: BestInfluencer[]
    bestServices: BestService[]
    gigImagesPath: string
    path: string
}

export interface BestInfluencer {
    profile_id: number
    gigType: string
    gigID: number
    gigTitle: string
    generalRank: number
    categoryRank: number
    minPrice: number
    sum_rating: number
    count_rating: number
    gig_count_rating: number
    starpoints: number
    real_count: number
    socialPlatformID: number
    socialPlatformName: string
    username?: string
    first_name?: string
    last_name?: string
    img?: string
    cityName: any
    countryName: any
    stateName: any
    followersCount: number
    platform_icon: string
    saved: number
    is_profile: number
    gigImages: GigImage[]
}

export interface GigImage {
    id: number
    imageName: string
}

export interface BestService {
    profile_id: number
    gigType: string
    gigID: number
    gigTitle: string
    generalRank: number
    categoryRank: number
    minPrice: number
    sum_rating: number
    count_rating: number
    gig_count_rating: number
    starpoints: number
    real_count: number
    socialPlatformID: number
    socialPlatformName: string
    username: string
    first_name: string
    last_name: string
    img: string
    cityName: any
    countryName: any
    stateName: any
    followersCount: number
    platform_icon: string
    saved: number
    is_profile: number
    gigImages: GigImage[]
}
