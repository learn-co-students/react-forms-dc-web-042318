export default class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  };

  handleLastNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handleFirstNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          name="firstName"
          onChange={event => this.handleFirstNameChange(event)}
          value={this.state.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={event => this.handleLastNameChange(event)}
          value={this.state.lastName}
        />
      </form>
    );
  }
}
