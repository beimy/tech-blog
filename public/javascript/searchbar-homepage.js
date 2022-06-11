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

            if(!matchedPostIds[0]){
                console.log('matched post is empty');
                alert('No search results found!');
                document.location.reload();
                return;
            } else {
                getAllMatchPosts(matchedPostIds);
                
            }

        } else {
            alert(response.statusText);
        }
    } else {
        alert('Must enter text to search!');
    }
    
}

async function getAllMatchPosts(matchedPostIds) {
    console.log(matchedPostIds);

    if(matchedPostIds) {
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
    } else {
        alert('No match found with that search criteria');
    }
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

async function searchByTag(e) {
    try{
        const searchedTag = e.target.value;

        let searchedTagId;
        for(var i = 0; i < $(this).next().children().length; i++) {
            if(searchedTag == $(this).next().children()[i].value) {
                searchedTagId = $(this).next().children()[i].dataset.tag_id;
            }
        }
        
        const response = await fetch(`/search/tag/${searchedTagId}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace(`/search/tag/${searchedTagId}`);
        } else {
            alert(response.statusText);
        }
    } catch(err) {
        response.console.error(err);
    }
    

}


document.querySelector('#tag-dataList').addEventListener('change', searchByTag);
document.querySelector('#searchBar').addEventListener('change', searchBarFormHandler);
// document.querySelector('#tag-dataList').addEventListener('click', searchByTag);
