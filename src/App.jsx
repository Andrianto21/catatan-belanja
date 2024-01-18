import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/groceryList";
import Footer from "./components/Footer";

const groceryItems = [];

function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems([...items.filter((item) => item.id !== id)]);
  }

  function handleToggleItem(id) {
    setItems([
      ...items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    ]);
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
