/*import React from 'react';
import './quickActions.css';

const QuickActions = () => {
  return (
    <section className="quick-actions">
      <button className="action-button">Add New Item</button>
      <button className="action-button">Generate Report</button>
      <button className="action-button">Create Order</button>
    </section>
  );
};

export default QuickActions;*/
/*import React from 'react';
import './quickActions.css';

const QuickActions = () => {
  return (
    <section className="quick-actions">
      <h2>Quick Actions</h2>
      <div className="actions-container">
        <button className="action-button">Add New Item</button>
        <button className="action-button">Generate Report</button>
        <button className="action-button">Create Order</button>
      </div>
    </section>
  );
};

export default QuickActions;
*/
import React, { useState } from 'react';
import './quickActions.css';

const QuickActions = () => {
  // State to manage which modal to display
  const [activeModal, setActiveModal] = useState(null);
  const [product, setProduct] = useState('');
  const [explanation, setExplanation] = useState('');

  const closeModal = () => {
    setActiveModal(null);
    setProduct('');
    setExplanation('');
  };

  const handleAddItem = () => {
    // Logic to handle item addition (e.g., API calls or local state updates)
    alert("Item Added Successfully!");
    closeModal();
  };

  const handleGenerateReport = () => {
    // Logic to handle report generation
    alert(`Report Generated for ${product}!\nExplanation: ${explanation}`);
    closeModal();
  };

  const handleCreateOrder = () => {
    // Logic to handle order creation
    alert("Order Created Successfully!");
    closeModal();
  };

  return (
    <section className="quick-actions">
      <h2 className="quick-actions-title">Quick Actions</h2>
      <div className="action-buttons">
        <button className="action-button" onClick={() => setActiveModal('addItem')}>
          Add New Item
        </button>
        <button className="action-button" onClick={() => setActiveModal('generateReport')}>
          Generate Report
        </button>
        <button className="action-button" onClick={() => setActiveModal('createOrder')}>
          Create Order
        </button>
      </div>

      {/* Add New Item Modal */}
      {activeModal === 'addItem' && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Item</h3>
            <input type="text" placeholder="Item Name" />
            <input type="number" placeholder="Quantity" />
            <button className="submit-button" onClick={handleAddItem}>Add Item</button>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Generate Report Modal */}
      {activeModal === 'generateReport' && (
        <div className="modal">
          <div className="modal-content">
            <h3>Generate Report</h3>
            <input 
              type="text" 
              placeholder="Product Name" 
              value={product} 
              onChange={(e) => setProduct(e.target.value)} 
            />
            <textarea 
              placeholder="Explanation for the report..." 
              value={explanation} 
              onChange={(e) => setExplanation(e.target.value)} 
              rows="4"
            ></textarea>
            <button className="submit-button" onClick={handleGenerateReport}>Generate Report</button>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Create Order Modal */}
      {activeModal === 'createOrder' && (
        <div className="modal">
          <div className="modal-content">
            <h3>Create Order</h3>
            <input type="text" placeholder="Customer Name" />
            <input type="text" placeholder="Item to Order" />
            <input type="number" placeholder="Quantity" />
            <button className="submit-button" onClick={handleCreateOrder}>Create Order</button>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuickActions;
