'use strict';

var AppDispatcher = require('./AppDispatcher'),
    AccountConstants = require('./AccountConstants');

var AccountActions = {

    follow(id) {
        AppDispatcher.dispatch({
            actionType: AccountConstants.FOLLOW,
            id: id
        });
    },

    stop_following(id) {
        AppDispatcher.dispatch({
            actionType: AccountConstants.STOP_FOLLOWING,
            id: id
        });
    },

    removeMessage(id, box) {
        AppDispatcher.dispatch({
            actionType: AccountConstants.REMOVE_MESSAGE,
            box: box,
            id: id
        });
    },

    readMessage(id) {
        AppDispatcher.dispatch({
            actionType: AccountConstants.READ_MESSAGE,
            id: id
        });
    },

    sendMessage(toAccountId, content) {
        AppDispatcher.dispatch({
            actionType: AccountConstants.SEND_MESSAGE,
            toAccountId: toAccountId,
            content: content
        });
    }

};

module.exports = AccountActions;
