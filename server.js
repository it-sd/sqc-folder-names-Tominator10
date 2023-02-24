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
const arrTest1 = ['Random Folder', 'Dog Pictures', 'Snowboards']
console.log('New Folder <- Expected')
console.log(newFolderName(arrTest1) + ' <- Result\n')

const arrTest2 = ['Random Folder', 'New Folder', 'Snowboards']
console.log('New Folder (2) <- Expected')
console.log(newFolderName(arrTest2) + ' <- Result\n')

const arrTest3 = ['New Folder (2)', 'New Folder', 'New Folder (4)']
console.log('New Folder (3) <- Expected')
console.log(newFolderName(arrTest3) + ' <- Result')