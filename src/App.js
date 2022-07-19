import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул Серый',
          img: 'chair.webp',
          desc: 'Серый стул',
          category: 'chairs',
          price: '349.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Стол',
          category: 'table',
          price: '1099.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.webp',
          desc: 'Диван',
          category: 'sofa',
          price: '3350.00'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lamp.jpeg',
          desc: 'Лампа комнатная',
          category: 'light',
          price: '549.99'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair-2.webp',
          desc: 'Стул белый',
          category: 'chairs',
          price: '349.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
    <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
    <Categories chooseCategory={this.chooseCategory}/>
    <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
    {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>}
    <Footer/>
    </div>
  )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
