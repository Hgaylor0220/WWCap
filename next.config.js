module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/river': { page: '/river' },
            '/p/addRiver': { page: '/post', query: { title: 'addRiver' } },
            '/p/recordJournalEntry': { page: '/post', query: { title: 'recordJournalEntry' } },
            '/p/loggin': { page: '/post', query: { title: 'loggin' } },
        }
    },
}