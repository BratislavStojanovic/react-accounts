import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import AccountsTable from './components/AccountsTable/AccountsTable';
import AddAccount from './components/AddAccount/AddAccount';
import EditTable from './components/EditTable/EditTable';
import EditAccount from './components/EditAccount/EditAccount';

class App extends Component {
  state = {
    accounts: [
      {
        id: 1,
        name: 'Milos',
        lastname: 'Stojanovic',
        phone: '11-11-11',
        email: 'stojanovic@gmail.com'
      },
      {
        id: 2,
        name: 'Ivan',
        lastname: 'Mitic',
        phone: '22-22-22',
        email: 'iva@gmail.com'
      },
      {
        id: 3,
        name: 'Sanja',
        lastname: 'Stojanovic',
        phone: '33-33-33',
        email: 'sanja@gmail.com'
      }
    ]
  };

  deleteAccount = id => {
    const accountsCopy = [...this.state.accounts];
    const newCopyAccount = accountsCopy.filter(account => account.id !== id);
    this.setState({
      accounts: newCopyAccount
    });
  };

  addNewAccountToSate = account => {
    this.setState({
      accounts: [...this.state.accounts, account]
    });
  };

  editAccount = acc => {
    const accountsCopy = [...this.state.accounts];
    let accountPossition = accountsCopy
      .map(account => account.id)
      .indexOf(acc.id);
    accountsCopy[accountPossition] = acc;
    this.setState({
      accounts: accountsCopy
    });
  };
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/'>
          <AccountsTable accounts={this.state.accounts} />
        </Route>
        <Route path='/add'>
          <AddAccount addNewAccountToSate={this.addNewAccountToSate} />
        </Route>
        <Switch>
          <Route path='/edit/:id'>
            <EditAccount
              accounts={this.state.accounts}
              editAccount={this.editAccount}
            />
          </Route>
          <Route path='/edit'>
            <EditTable
              accounts={this.state.accounts}
              deleteAccount={this.deleteAccount}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
