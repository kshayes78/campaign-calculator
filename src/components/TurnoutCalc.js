import React from 'react';

class TurnoutCalc extends React.Component {
  // // Midterm Voter Turnout Count (integer)
  // const [midtermTurnout1, setMidTermTurnout1] = useState(0);
  // const [midtermTurnout2, setMidTermTurnout2] = useState(0);
  // const [midtermTurnout3, setMidTermTurnout3] = useState(0);
  // //Midterm Total registered Voters
  // const [totalVoters1, setTotalVoters1] = useState(0);
  // const [totalVoters2, setTotalVoters2] = useState(0);
  // const [totalVoters3, setTotalVoters3] = useState(0);
  // //Midterm Voter Turnout Percentages
  // const [voterTurnoutPercent1, setVoterTurnoutPercent1] = useState(0);
  // const [voterTurnoutPercent2, setVoterTurnoutPercent2] = useState(0);
  // const [voterTurnoutPercent3, setVoterTurnoutPercent3] = useState(0);
  // //Midterm Turnout Average
  // const [averageTurnout, setAverageTurnout] = useState(0);
  //Set state for each input
  constructor() {
    super();
    this.state = {
      midtermTurnout1: 0,
      midtermTurnout2: 0,
      midtermTurnout3: 0,
      totalVoters1: 0,
      totalVoters2: 0,
      totalVoters3: 0,
      currentRegVoters: 0,
    };
  }

  handleTurnout(e) {
    // setMidTermTurnout1(e.target.value);
    // console.log(midtermTurnout1);
    this.setState({ midtermTurnout1: parseInt(e.target.value) });
  }
  handleTurnout2(e) {
    // setMidTermTurnout1(e.target.value);
    // console.log(midtermTurnout1);
    this.setState({ midtermTurnout2: parseInt(e.target.value) });
  }
  handleTurnout3(e) {
    // setMidTermTurnout1(e.target.value);
    // console.log(midtermTurnout1);
    this.setState({ midtermTurnout3: parseInt(e.target.value) });
  }
  handleVoters(e) {
    this.setState({ totalVoters1: parseInt(e.target.value) });
  }
  handleVoters2(e) {
    this.setState({ totalVoters2: parseInt(e.target.value) });
  }
  handleVoters3(e) {
    this.setState({ totalVoters3: parseInt(e.target.value) });
  }
  handleCurrentVoters(e) {
    this.setState({ currentRegVoters: parseInt(e.target.value) });
  }


  //Calculate Turnout Percentage
  calculatePercentage(num, den) {
    if (!den) {
      return 0;
    }
    return (num / den) * 100;
  }
  
  //Calculate Projected Voter Turnout
  calculateTurnout(num1, num2) {
    return (num1 * num2) / 100;
  }

  //Calculate Vote Goal
  calculateVoteGoal(num1) {
    return num1 * 0.52;
  }

  calculateYearMinus12(){
    const currentYear = new Date().getFullYear();
    const currentYearMinus12 = currentYear-12
    return currentYearMinus12
  }

  render() {
    return (
      <div className='container'>
        <h2>Turnout Calculator</h2>
        <form className='turnout'>
          <label htmlFor='turnout'>
            Please enter Total Voter Turnout Count for 2010:
          </label>
          <input
            onChange={this.handleTurnout.bind(this)}
            type='number'
            id='turnout1'
            name='turnout1'
            required
            minLength='1'
          ></input>
          <br />
          <label htmlFor='regVoters'>
            Please enter Total Registered Voters for 2010:
          </label>
          <input
            onChange={this.handleVoters.bind(this)}
            type='number'
            id='voter1'
            name='voter1'
            required
            minLength='1'
          ></input>
          <br />
          <label htmlFor='turnout'>
            Please enter Total Voter Turnout Count for 2014:
          </label>
          <input
            onChange={this.handleTurnout2.bind(this)}
            type='number'
            id='turnout2'
            name='turnout2'
            required
            minLength='1'
          ></input>
          <br />
          <label htmlFor='regVoters'>
            Please enter Total Registered Voters for 2014:
          </label>
          <input
            onChange={this.handleVoters2.bind(this)}
            type='number'
            id='voter2'
            name='voter2'
            required
            minLength='1'
          ></input>
          <br />
          <label htmlFor='turnout'>
            Please enter Total Voter Turnout Count for 2018:
          </label>
          <input
            onChange={this.handleTurnout3.bind(this)}
            type='number'
            id='turnout3'
            name='turnout3'
            required
            minLength='1'
          ></input>
          <br />
          <label htmlFor='regVoters'>
            Please enter Total Registered Voters for 2018:
          </label>
          <input
            onChange={this.handleVoters3.bind(this)}
            type='number'
            id='voter3'
            name='voter3'
            required
            minLength='1'
          ></input>
          <br />
          <label htmlFor='regVoters'>
            Please enter Total Registered Voters for the Current Year:
          </label>
          <input
            onChange={this.handleCurrentVoters.bind(this)}
            type='number'
            id='currentVoters'
            name='currentVoters'
            required
            minLength='1'
          ></input>

          <h2>
            Your average turnout
            <br />
            For 2010 is{' '}
            {Math.round(this.calculatePercentage(
              this.state.midtermTurnout1,
              this.state.totalVoters1
            ))}
            %. <br />
            For 2014 is{' '}
            {Math.round(this.calculatePercentage(
              this.state.midtermTurnout2,
              this.state.totalVoters2
            ))}
            %. <br />
            For 2018 is{' '}
            {Math.round(this.calculatePercentage(
              this.state.midtermTurnout3,
              this.state.totalVoters3
           ))}
            %.
            <br /> Your average turnout is{' '}
            {Math.round(this.calculatePercentage(
              this.state.midtermTurnout1 +
                this.state.midtermTurnout2 +
                this.state.midtermTurnout3,

              this.state.totalVoters1 +
                this.state.totalVoters2 +
                this.state.totalVoters3
            ))}
            %.
            <br />
            Your Projected Voter Turnout is{' '}
            {Math.round(this.calculateTurnout(
              this.state.currentRegVoters,
              this.calculatePercentage(
                this.state.midtermTurnout1 +
                  this.state.midtermTurnout2 +
                  this.state.midtermTurnout3,
                this.state.totalVoters1 +
                  this.state.totalVoters2 +
                  this.state.totalVoters3
              ))
            ).toLocaleString('en-US')}
            <br />
            Your Vote Goal is{' '}
            {Math.round(this.calculateVoteGoal(this.state.currentRegVoters)).toLocaleString('en-US')}
          </h2>
        </form>
      </div>
    );
  }
}

export default TurnoutCalc;
