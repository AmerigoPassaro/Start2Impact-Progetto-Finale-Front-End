function search(){
    fetch('https://api.v2.emissions-api.org/api/v2/countries.json', {
        method: "GET",
        headers: {
            'accept': 'application/json'
        }})
    .then(response => response.json())
    .then(commits => alert(commits[0]));
}