const newFolderName = function (folders) {
    const maxSearches = 1000
    if (!folders.includes('New Folder')) {
        return 'New Folder'
    } else {
        for (let i = 2; i < maxSearches + 2; i++) {
            if (!folders.includes(`New Folder (${i})`)) {
                return `New Folder (${i})`
            }
        }
    }
}

// TESTS
module.exports = { newFolderName }