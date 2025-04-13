import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup, Badge } from 'react-bootstrap';
import "../App.css";
const Dashboard = () => {
  const [item, setItem] = useState({ name: '', price: '' });
  const [menu, setMenu] = useState([
    { id: 1, name: 'Cappuccino', price: 150 },
    { id: 2, name: 'Cheese Sandwich', price: 120 },
    { id: 3, name: 'Cold Coffee', price: 100 }
  ]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: menu.length + 1,
      name: item.name,
      price: parseFloat(item.price)
    };
    setMenu([...menu, newItem]);
    setItem({ name: '', price: '' });
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">☕ Ideal Cafe Admin Dashboard</h1>

      {/* Add Menu Item Form */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Add New Menu Item</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Item Name"
                  value={item.name}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Price (₹)"
                  value={item.price}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col md={2}>
                <Button type="submit" className="w-100" variant="success">
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Menu List */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Current Menu</Card.Title>
          <ListGroup>
            {menu.map((m) => (
              <ListGroup.Item key={m.id} className="d-flex justify-content-between align-items-center">
                {m.name}
                <Badge bg="primary">₹{m.price}</Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Sales Overview */}
      <Card>
        <Card.Body>
          <Card.Title>Daily Sales Overview</Card.Title>
          <p>Total Orders: <strong>45</strong></p>
          <p>Total Revenue: <strong>₹6,750</strong></p>
          <p>Best Seller: <strong>Cold Coffee</strong></p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
