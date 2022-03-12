import ApiService from './ApiService'

const SearchService = (_type, searchValue) => {

    const param = {
        method: `${_type}.search`,
        [_type]: searchValue,
    }
    return (() => {
        return ApiService.get('', param)
    })()
}
 
export default SearchService