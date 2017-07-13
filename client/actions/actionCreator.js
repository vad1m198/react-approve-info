//increment
function increament( index ) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add comment
function addComment( postId, autor, comment ) {
    return {
        type: 'ADD_COMMNET',
        postId,author,comment
    }
}

//remove comment
function removeComment( postId, i ) {
    return {
        type: 'REMOVE_COMMNET',
        postId, i
    }
}
