$(function() {
    var model = new ListModel([{
            text: 'PHP',
            done: false,
            dateAdded: new Date()
        }, {
            text: 'JavaScript',
            done: true,
            dateAdded: new Date()
        }]),
        view = new ListView(model, {
            'list': $('.app-list'),
            'addButton': $('.app-button'),
            'input': $('.app-input'),
            'message': $('.app-message')
        }, {
            'listItem': 'li',
            'deleteButton': '.app-del',
            'itemDateAdded': '.app-date',
            'itemText': '.app-item'
        }),
        controller = new ListController(model, view);

    view.render('Tasks loaded');
});