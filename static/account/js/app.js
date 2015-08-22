var React = require('react'),
    FollowButtonComponent = require('./FollowButtonComponent'),
    AccountStore = require('./AccountStore');

AccountStore.fetchFollowingData();
accountId = AccountStore.getAccountId();

React.render(
    React.createElement(FollowButtonComponent, {accountId: accountId}),
    document.getElementById('follow-button-container')
);
