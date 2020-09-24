module.exports = {
    //Checks if search results are empty
    search_not_null: function(artists, events) {
        return artists.length > 0 || events.length > 0
    },

    //Date format for printing text (MONTH FULL-DAY-YEAR)
    date_format: function(date) {
        return date.toLocaleString('default', { month: 'long' }) + " " + date.getDate() + " " + date.getFullYear();
    },

    //format for artist name
    artist_name: function(name) {
        return '<span class="green-font">' + name.slice(0, 1).toUpperCase() + '</span>' + name.slice(1).toUpperCase();
    }
}