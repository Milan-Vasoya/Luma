

export const GetCountries= ()=>{
    return fetch(
        "https://m241full.digitsoftsol.co/index.php/rest/all/V1/directory/countries?fields=id,full_name_english"
      )
        .then((res) => res.json())
}

export const GetRegion=(id)=>{
  return fetch(
        `https://m241full.digitsoftsol.co/index.php/rest/all/V1/directory/countries/${id}?fields=available_regions`
      )
        .then((res) => res.json())
}