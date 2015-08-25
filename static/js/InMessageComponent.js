'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    AccountStore = require('./AccountStore'),
    AccountActions = require('./AccountActions');

var InMessageComponent = (function (_React$Component) {
    _inherits(InMessageComponent, _React$Component);

    function InMessageComponent() {
        _classCallCheck(this, InMessageComponent);

        _get(Object.getPrototypeOf(InMessageComponent.prototype), 'constructor', this).call(this);
        this.state = {
            full: false
        };
        this.removeMessage = this.removeMessage.bind(this);
        this.read = this.read.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    _createClass(InMessageComponent, [{
        key: 'getContent',
        value: function getContent() {
            if (!this.state.full && this.props.data.content.length > 70) {
                return this.props.data.content.substr(0, 70) + '...';
            } else {
                return this.props.data.content;
            }
        }
    }, {
        key: 'read',
        value: function read() {
            if (!this.props.data.read) {
                AccountActions.readMessage(this.props.data.id);
            }
            this.setState(function (prevState) {
                return {
                    full: !prevState.full
                };
            });
        }
    }, {
        key: 'removeMessage',
        value: function removeMessage() {
            AccountActions.removeMessage(this.props.data.id, 'incoming');
        }
    }, {
        key: 'render',
        value: function render() {
            var messageClass = 'panel panel-default ' + (this.props.data.read ? '' : ' unread'),
                contentClass = 'message-content' + (this.state.full ? ' full' : ''),
                personUrl = AccountStore.BaseUrl + '/people/' + this.props.data.from_account.id + '/',
                content = this.getContent();
            return React.createElement("div", { className: messageClass }, React.createElement("div", { className: "panel-heading" }, React.createElement("a", { className: "pull-right", onClick: this.removeMessage }, "Remove"), React.createElement("h4", null, "From: ", React.createElement("a", { className: "message-author", href: personUrl }, this.props.data.from_account.short_display_name))), React.createElement("div", { className: "panel-body" }, React.createElement("div", { className: "clearfix" }), React.createElement("div", { className: contentClass }, content), React.createElement("a", { className: "read-link", onClick: this.read }, "Read")));
        }
    }]);

    return InMessageComponent;
})(React.Component);

module.exports = InMessageComponent;