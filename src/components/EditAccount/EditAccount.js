import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class EditAccount extends Component {
  state = {
    account: {
      id: '',
      name: '',
      lastname: '',
      phone: '',
      email: ''
    }
  };

  componentDidMount() {
    // account ??
    const accountForEdit = this.props.accounts.filter(
      acc => acc.id == this.props.match.params.id
    )[0];
    this.setState({
      account: accountForEdit
    });
  }

  changeAccount = e => {
    const accountCopy = { ...this.state.account };
    accountCopy[e.target.id] = e.target.value;
    this.setState({
      account: accountCopy
    });
  };

  editAccount = () => {
    this.props.editAccount(this.state.account);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 offset-1'>
            <h2 className='display-4 m-4'>Edit Account</h2>
            <div className='row'>
              <div className='col-10 offset-1'>
                <input
                  onChange={this.changeAccount}
                  value={this.state.account.name}
                  type='text'
                  name='name'
                  id='name'
                  placeholder='name'
                  className='form-control'
                />
                <br />
                <input
                  onChange={this.changeAccount}
                  value={this.state.account.lastname}
                  type='text'
                  name='lastname'
                  id='lastname'
                  placeholder='lastname'
                  className='form-control'
                />
                <br />
                <input
                  onChange={this.changeAccount}
                  value={this.state.account.phone}
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder='phone'
                  className='form-control'
                />
                <br />
                <input
                  onChange={this.changeAccount}
                  value={this.state.account.email}
                  type='email'
                  name='email'
                  id='email'
                  placeholder='email'
                  className='form-control'
                />
                <br />
                <button
                  onClick={this.editAccount}
                  className='btn btn-info form-control'
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditAccount);
