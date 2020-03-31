import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AddAccount extends Component {
  state = {
    newAccount: {
      id: '',
      name: '',
      lastname: '',
      phone: '',
      email: ''
    }
  };

  changeHandler = e => {
    let id = e.target.id;
    let newAccountCopy = { ...this.state.newAccount };
    newAccountCopy[id] = e.target.value;
    this.setState({
      newAccount: newAccountCopy
    });
  };

  addNewAccount = () => {
    this.props.addNewAccountToSate(this.state.newAccount);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 offset-1'>
            <h2 className='display-4 m-4'>Add Account</h2>
            <div className='row'>
              <div className='col-10 offset-1'>
                <input
                  onChange={this.changeHandler}
                  type='text'
                  name='id'
                  id='id'
                  placeholder='id'
                  className='form-control'
                />
                <br />
                <input
                  onChange={this.changeHandler}
                  type='text'
                  name='name'
                  id='name'
                  placeholder='name'
                  className='form-control'
                />
                <br />
                <input
                  onChange={this.changeHandler}
                  type='text'
                  name='lastname'
                  id='lastname'
                  placeholder='lastname'
                  className='form-control'
                />
                <br />
                <input
                  onChange={this.changeHandler}
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder='phone'
                  className='form-control'
                />
                <br />
                <input
                  onChange={this.changeHandler}
                  type='email'
                  name='email'
                  id='email'
                  placeholder='email'
                  className='form-control'
                />
                <br />
                <button
                  onClick={this.addNewAccount}
                  className='btn btn-primary form-control'
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddAccount);
