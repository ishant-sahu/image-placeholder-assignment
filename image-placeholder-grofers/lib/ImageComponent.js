'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageComponent = function (_Component) {
	_inherits(ImageComponent, _Component);

	function ImageComponent(props) {
		_classCallCheck(this, ImageComponent);

		var _this = _possibleConstructorReturn(this, (ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).call(this, props));

		_this.state = {
			imageLoad: false
		};

		return _this;
	}

	_createClass(ImageComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var obj = this.props.obj;

			if (obj != undefined && obj.src != undefined) {
				var img = new Image();
				img.src = obj.src;
				var self = this;
				img.onload = function () {
					self.setState({ imageLoad: true });
				};
			}
		}
	}, {
		key: 'returnImage',
		value: function returnImage() {
			var obj = this.props.obj;

			var returnDiv = _react2.default.createElement('img', obj);
			return _react2.default.createElement(
				'div',
				null,
				returnDiv
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var self = this;
			if (this.state.imageLoad == false) return _react2.default.createElement(
				'div',
				null,
				' Loading ... '
			);else return this.returnImage();
		}
	}]);

	return ImageComponent;
}(_react.Component);

exports.default = ImageComponent;
