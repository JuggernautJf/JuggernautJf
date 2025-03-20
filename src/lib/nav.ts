export function getQueryParams (url:string) {
    const queryParams :{[index:string]:string} = {}
  
    url.replace(/(?:[?&])([^=]+)=([^&]*)/g, (_, key, value)=> {queryParams[key] = decodeURIComponent(value);return''})
    return queryParams
}