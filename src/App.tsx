import './App.css'
import { ShopItemClass } from './components/ShopItemClass'
import { items } from './data/items'

function App() {
  const item = items[0];

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={ item } />
      </div>
    </div>
  )
}

export default App
