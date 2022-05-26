function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quote: [
      {
        quote: "Definiteness of purpose is the starting point of all                  achievement.",
        author: "W. Clement Stone" }],


      index: 0 });_defineProperty(this, "getRandomind",












    () => {
      const { quote } = this.state;
      if (quote.length > 0) {
        const index = Math.floor(Math.random() * quote.length);
        this.setState({
          index: index });

      }
    });}componentDidMount() {fetch(API).then(res => res.json()).then(res => {this.setState({ quote: res.quotes }, this.getRandomind);});}
  render() {
    const { quote, index } = this.state;
    const qu = quote[index];
    const tweetURL = `https://twitter.com/intent/tweet?text=${qu.quote}-${qu.author}`;



    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper d-flex justify-content-center p-5 align-items-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-xs-6 box p-5 progress rounded", id: "quote-box" }, /*#__PURE__*/

      React.createElement("div", null,
      qu && /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { id: "text" }, /*#__PURE__*/React.createElement("strong", null, qu.quote)), /*#__PURE__*/
      React.createElement("cite", { id: "author" }, " - ", qu.author)), /*#__PURE__*/




      React.createElement("div", { className: "d-flex", "justify-content-between": true }, /*#__PURE__*/
      React.createElement("a", { className: "btn  ms-5 mt-4 bat", id: "tweet-quote", href: tweetURL, target: "_blank" }, /*#__PURE__*/React.createElement("i", { className: "fab fa-twitter" }), "tweet"), /*#__PURE__*/

      React.createElement("button", { className: "btn btth ms-3 mt-4", id: "new-quote", onClick: this.getRandomind }, "Next quote"))))));







  }}





ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));