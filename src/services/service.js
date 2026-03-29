import useHttp from "../hooks/http.hook";

export default function useService () {

    const { Loading, error, request, clearError } = useHttp();

    const _API_URL = "https://marvel-server-zeta.vercel.app";
    const _API_KEY = "d4eecb0c66dedbfae4eab45d312fc1df";
    const _LIMIT = 6;


    const getCharactersAll = async (offset = 0) => {
        const res = await request(`${_API_URL}/characters?limit=${_LIMIT}&offset=${offset}&apikey=${_API_KEY}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_API_URL}/characters/${id}/?apikey=${_API_KEY}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }

    }

    return {Loading, error, clearError, getCharactersAll, getCharacter }

}
