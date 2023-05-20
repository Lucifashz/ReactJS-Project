class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex:'',
      rnmColor:''
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 15),
      rnmColor: "#" + Math.floor(Math.random()*16777215).toString(16)
    });
  }
  render() {
    const quoteAnswers = [
    'Teach thy tongue to say, “I do not know,” and thous shalt progress.', 
    'Your time is limited, so don’t waste it living someone else’s life.', 
    'The most common way people give up their power is by thinking they don’t have any.',
    'Either write something worth reading or do something worth writing.',
    'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
    "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    'Education costs money. But then so does ignorance.',
    "Nothing is impossible, the word itself says, \"I’m possible!\"",
    'You become what you believe.',
    'Change your thoughts and you change your world',
    'It does not matter how slowly you go as long as you do not stop.',
    'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.',
    'The best time to plant a tree was 20 years ago. The second best time is now.',
    'Teach thy tongue to say, “I do not know,” and thous shalt progress.',
    'Challenges are what make life interesting and overcoming them is what makes life meaningful.'];
    const quotePublish = [
    'Maimonides',
    'Steve Jobs', 
    'Alice Walker',
    'Benjamin Franklin',
    'Jamie Paolinetti',
    'Michael Jordan',
    'Sir Clause Moser',
    'Audrey Hepburn',
    'Oprah Winfrey',
    'Norman Vincent Peale',
    'Confucius',
    'Marie Curie',
    'Chinese Proverb',
    'Maimonides',
    'Joshua J. Marine'];
    const quote = quoteAnswers[this.state.randomIndex];
    const quotee = quoteAnswers[(Math.floor(Math.random() * 15))];
    const byquote = quotePublish[this.state.randomIndex];
    const byquotee = quotePublish[(Math.floor(Math.random() * 15))];
    const StyleObj = {
      color: this.state.rnmColor
    } 
    const StyleBgObj = {
      backgroundColor: this.state.rnmColor
    }
    const StyleBorderObj = {
      borderColor: this.state.rnmColor,
      color: this.state.rnmColor,
      border: '2px solid',
      width:50,
      height:50,
    }
    const StyleBtnObj = {
      backgroundColor: this.state.rnmColor
    }
    function handleSound() {  
      let msg = [quotee, ' ', ' ', 'by' , byquotee]
      const utterance = new SpeechSynthesisUtterance(msg);
      utterance.volume = 1;
      utterance.pitch = 1;
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
      }
      function copyClipboard() {
        navigator.clipboard.writeText(quotee);
        } 
    return (
    <div id='wrapper' style={StyleBgObj}>
      <div className='container' id='drum'>
        <span className='fa-quote-left'></span>
      </div>
      <div className='container2'>
        <span className='fa-quote-right'></span>
      </div>
      <div id='quote-box'>
        <div className='header-text'>
          <p id='h-text'>QUOTE</p>
        </div>
        <div className='quote-text'>
          <p style={StyleObj} id='text'>{quotee}</p>
        </div>
        <div className='quote-author'>
          <p style={StyleObj} id='author'>{byquotee}</p>
        </div>
        <div className='buttons'>
          <ul>
            <li onClick={handleSound} className='item-1'>
              <a style={StyleBorderObj} className='button icon' href='#'><i></i></a>
            </li>
            <li onClick={copyClipboard} className='item-2'>
              <a style={StyleBorderObj} className='button icon' href='#'><i></i></a>
            </li>
            <li className='item-3'>
              <a id='tweet-quote' style={StyleBorderObj} href={"https://twitter.com/intent/tweet?url=" + quotee} className='button icon' target='_top'><i></i></a>
            </li>
            <li className='item-4'>
              <button style={StyleBtnObj} id='new-quote' className='button click' onClick={this.handleClick}>New Quote</button>
            </li>
          </ul>
        </div>
        <div id='footer'><a href="https://codepen.io/MadRang/" target="_blank">MadRang</a></div>
      </div>
    </div>
    );
  }
};

ReactDOM.render(<MyComponent/>, document.getElementById('root'))