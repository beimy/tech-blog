
async function searchBarFormHandler(e) {
    e.preventDefault();
    const searchText = e.target.value;
    if(searchText) {
        //console.log(searchText);

        const response = await fetch("/post/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            const body = await response.json();
            //console.log(body);

            var matchedPostIds = [];
            const cleanedSearch = cleanSearch(searchText);
            //console.log(cleanedSearch);

            body.forEach(function (index) {
                for(var i = 0; i < cleanedSearch.length; i++) {
                    let result = index.post_title.includes(cleanedSearch[i]);
                    if(result) {
                        matchedPostIds.push(index.post_id);
                    }
                }
            });

            getAllMatchPosts(matchedPostIds);

            //console.log(matchedPostIds);
        } else {
            alert(response.statusText);
        }
    } else {
        alert('Must enter text to search!');
    }
    
}

async function getAllMatchPosts(matchedPostIds) {

    let postDataArr = [];
    let urlString = `/search/?`;

    for(var i = 0; i < matchedPostIds.length; i++){
        if(i == 0){
            urlString += 'id=' + matchedPostIds[i];
        } else {
            urlString += '&id=' + matchedPostIds[i];
        }
    }

    console.log(urlString);

    document.location.replace(urlString);

    // const response = await fetch (urlString, {
    //     method: "get",
    //     headers: { 'Content-Type': 'application/json' }
    // });

    // if(response.ok) {
    //     return;
    // } else {
    //     alert(response.statusText);
    // }
    
}

function cleanSearch(searchText) {
    let splitArr = searchText.split(" ");

    let upperArr = [];
    let lowerArr = [];

    splitArr.forEach(function (index) {
        upperArr.push(index[0].toUpperCase() + index.substr(1));
        lowerArr.push(index[0].toLowerCase() + index.substr(1));
    })
    
    return upperArr.concat(lowerArr);
}



document.querySelector('#searchBar').addEventListener('change', searchBarFormHandler);