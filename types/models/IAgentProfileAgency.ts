export interface IAgentProfileAgency {
    data: IProfileAgencyData[]
}

export interface IProfileAgencyData {
    id: number
    profile_id: number
    name: string
    name_public: number
    email: string
    email_public: number
    phone: string
    phone_public: number
    website: string
    website_public: number
    about: string
    about_public: number
    address: string
    note: string
    note_public: number
}