import React, { Component } from 'react'
import {
  colorPrimary,
  colorPrimaryDark,
  white,
  colorAccent,
  whitesmoke,
} from './utils/colors'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import {
  Provider as PaperProvider,
  DefaultTheme,
  FAB,
} from 'react-native-paper'
import DeckView from './containers/DeckView'
import NewDeckView from './containers/NewDeckView'
import { StackNavigator } from 'react-navigation'
import MainToolbar from './components/MainToolbar'

const MainNav = StackNavigator(
  {
    Home: {
      screen: DeckView,
    },
    NewDeck: {
      screen: NewDeckView,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
)

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colorPrimary,
    accent: colorAccent,
    background: white,
    paper: whitesmoke,
  },
}

class App extends Component {
  addDeck(event) {
    console.log('teste')
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <PaperProvider theme={theme}>
          <MainNav />
        </PaperProvider>
      </Provider>
    )
  }
}

export default App
