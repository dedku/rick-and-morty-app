export type FetchResponse = {
    data: any;
    isPending: boolean;
    error: any;
}

export type CharacterProps = {
    id: number;
    name: string;
    status: string,
    species: string,
    type: any,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: [string],
    url: string,
    created: string;
}


export type ChapterProps = {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: Array<string>,
    url: string,
    created: string
}

export type Data = {
    name: string,
    url: string
}

export type IconProps = {
    status: string,
}