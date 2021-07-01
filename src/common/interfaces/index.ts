export interface ICommentsListDataArray {
    id: number
    name: string
    text: string
    visible: number
    product_id: number
    created_at: Date
    updated_at: Date
}

export interface ICommentsListLinksArray {
    url: string
    label: number
    active: boolean
}

export interface ICommentsList {
    current_page: number
    data: ICommentsListDataArray[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: ICommentsListLinksArray[]
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: string
    to: number
    total: number

}