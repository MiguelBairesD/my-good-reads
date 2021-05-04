export default interface Book{
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        publisher: string,
        publishedDate?: string,
        imageLinks?: {
            thumbnail: string
        },
        description: string,
    }
}; 