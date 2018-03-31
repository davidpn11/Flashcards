import React, { Component } from 'react'
import {
  colorPrimary,
  colorPrimaryDark,
  white,
  colorAccent,
  whitesmoke,
} from './utils/colors'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import {
  Provider as PaperProvider,
  DefaultTheme,
  FAB,
} from 'react-native-paper'
import DeckView from './containers/DeckView'
import NewDeckView from './containers/NewDeckView'
import DeckDetailView from './containers/DeckDetailView'
import NewCardView from './containers/NewCardView'
import { StackNavigator } from 'react-navigation'
import MainToolbar from './components/MainToolbar'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const MainNav = StackNavigator(
  {
    Home: {
      screen: DeckView,
    },
    NewDeck: {
      screen: NewDeckView,
    },
    NewCard: {
      screen: NewCardView,
    },
    DeckDetail: {
      screen: DeckDetailView,
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
      <Provider
        store={createStore(reducer, composeEnhancers(applyMiddleware(thunk)))}
      >
        <PaperProvider theme={theme}>
          <MainNav />
        </PaperProvider>
      </Provider>
    )
  }
}

export default App
