export type FetchResponse = {
    data: any;
    statusContent: String;
    isPending: Boolean;
    error: any;
}

export type Character = {
    id: number;
    name: String;
    status: String,
    species: String,
    type: any,
    gender: String,
    origin: {
        name: String,
        url: String
    },
    location: {
        name: String,
        url: String
    },
    image: String,
    episode: [String],
    url: String,
    created: String;
}