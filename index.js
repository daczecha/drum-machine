const sounds = [
    {
      key: 'Q',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      key: 'W',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      key: 'E',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      key: 'A',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      key: 'S',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      key: 'D',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      key: 'Z',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      key: 'X',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      key: 'C',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
  ];
  
  const App = () => (
    <div id="display" className="display">
      
      {sounds.map((sound, idx) => (
        <DrumPad text={sound.key} key={idx} audio={sound.mp3} />
      ))}
      <h1></h1>
    </div>
  );
  
  class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      
      this.audio = React.createRef();
    }
    
    componentDidMount() {
      this.audio.current.addEventListener('ended', (e) => {
        const parent = e.target.parentNode;
        parent.classList.remove('active');
      });
    }
    
    playSound = () => {
      this.audio.current.play();
      
      const id = this.audio.current.id;
      
      const parent = this.audio.current.parentNode;
      parent.classList.add('active');
      
      const display = parent.parentNode;
       if(id == 'Q' ){
            display.querySelector('h1').innerText = "Heater_1";
      }else if(id == 'W'){
         display.querySelector('h1').innerText = "Heater_2";
      }else if(id == 'E'){
         display.querySelector('h1').innerText = "Heater_3";
      }else if(id == 'A'){
         display.querySelector('h1').innerText = "Heater_4.1";
      }else if(id == 'S'){
         display.querySelector('h1').innerText = "Heater_6";
      }else if(id == 'D'){
         display.querySelector('h1').innerText = "Dsc_Oh";
      }else if(id == 'Z'){
         display.querySelector('h1').innerText = "Kick_n_Hat";
      }else if(id == 'X'){
         display.querySelector('h1').innerText = "RP4_KICK_1";
      }else if(id == 'C'){
         display.querySelector('h1').innerText = "Cev_H2";
      }else{
        
      }
    }
    
    render() {
      const { name, text, audio } = this.props;
      
      return (
        <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
          {text}
          <audio ref={this.audio} src={audio} className="clip" id={text} />
        </div>
      )
    }
  }
      
  document.addEventListener('keydown', (e) => {
    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);
    
    if(audio) {
      audio.currentTime = 0;
      const parent = audio.parentNode;
      parent.classList.add('active');
      
      const display = parent.parentNode;
      
      if(id == 'Q' ){
            display.querySelector('h1').innerText = "Heater_1";
      }else if(id == 'W'){
         display.querySelector('h1').innerText = "Heater_2";
      }else if(id == 'E'){
         display.querySelector('h1').innerText = "Heater_3";
      }else if(id == 'A'){
         display.querySelector('h1').innerText = "Heater_4.1";
      }else if(id == 'S'){
         display.querySelector('h1').innerText = "Heater_6";
      }else if(id == 'D'){
         display.querySelector('h1').innerText = "Dsc_Oh";
      }else if(id == 'Z'){
         display.querySelector('h1').innerText = "Kick_n_Hat";
      }else if(id == 'X'){
         display.querySelector('h1').innerText = "RP4_KICK_1";
      }else if(id == 'C'){
         display.querySelector('h1').innerText = "Cev_H2";
      }else{
        
      }
  
      audio.play();
    }
  });
  
  ReactDOM.render(<App />, document.getElementById('drum-machine'));