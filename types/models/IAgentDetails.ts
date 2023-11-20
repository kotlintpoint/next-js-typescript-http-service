export interface AgentDetailsRoot {
    id: number
    username: string
    first_name: string
    last_name: string
    proUsername: string
    generalRank: number
    categoryRank: number
    working_experience: number
    workbase: string
    pay_rate: number
    referral_code: string
    status: number
    email_confirmation_date: string
    profile_status: ProfileStatus
    trust_rate: TrustRate
    profile_type_id: number
    trust_rate_status: TrustRateStatus
    signup_mode: string
    firebaseLink: any
    block_status: string
    service_category_id: number
    profile_pic: string
    cityName: string
    stateName: string
    countryName: string
    pro_address: any
    headlines: string
    websites: any
    contact_no: string
    email: string
    summaries: string
    sum: any
    count_rating: number
    real_count: any
    fake_count_review: number
    rate: number
    resumes: string
    percentage: Percentage
    expertise: Expertise
    language: Language[]
    profile_publicity: ProfilePublicity
    agent_profile_publicity: AgentProfilePublicity[]
    agent_education: AgentEducation[]
    social_platform: any[]
    store: Store[]
    path: string
    resume_path: string
}

export interface Store {
    id: number
    profile_id: string
    name: string
    url: string
    image_url: string
    status: number
    createdAt: string
    updatedAt: string
    button_title: string
}

export interface ProfileStatus {
    private_info: number
    skill: number
    professional_info: number
    verification: number
    total_percentage: number
}

export interface TrustRate {
    email: number
    phone_number: number
    facebook: number
    payment: number
    Verify_id: number
    total_points: number
    points_needed: number
}

export interface TrustRateStatus {
    email: number
    facebook: number
    payment: number
    phone_number: number
    Verify_id: number
}

export interface Percentage {
    private_info: number
    skill: number
    professional_info: number
    verification: number
    total_percentage: number
}

export interface Expertise {
    name: string
    name_app: string
    length: number
}

export interface Language {
    id: number
    level: number
    name: string
}

export interface ProfilePublicity {}

export interface AgentProfilePublicity {
    id: number
    publicity_type: string
    status: string
}

export interface AgentEducation {
    educ_id: number
    degree: string
    school_name: string
    start_date: string
    end_date: string
    level: number
}
