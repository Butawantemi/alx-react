import $ from 'jquery';

$(body).append('<p>Holberton Dashboard</p>')
$(body).append('<p>Dashboard data for the students</p>')
$(body).append('<button>Click here to get started</button>')
$(body).append('<p id="count"></p>')
$(body).append('<p>Copyright - Holberton School</p>')

const updateounter = () => {
    counter++;
    $('#count').html(`${count} clicks on the button`)
    
}
