class App extends React.Component {

  state = {
    isOn: false
  }

  handleClick = () => {
    this.setState({
      isOn: !this.state.isOn
    })
  }

  render() {

    const styles = {
      button_off: {
        fontSize: '30px',
        padding: '20px 40px',
        transtion: 'all 4s'
      },

      button_on: {
        fontSize: '30px',
        padding: '20px 40px',
        backgroundColor: 'red',
        transtion: 'all 0.4s'
      }
    }

    return (
      <>
        <button style={(this.state.isOn ? styles.button_on : styles.button_off)} onClick={this.handleClick}>{this.state.isOn ? 'Wyłącz' : 'Włącz'}</button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));