import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebase';

const db = getFirestore(app);

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'orders'));
                const ordersList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                // Sort orders by date, newest first
                ordersList.sort((a, b) => b.createdAt?.toDate() - a.createdAt?.toDate());
                setOrders(ordersList);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching orders: ", error);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <div style={styles.loading}>Loading orders...</div>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Order Management</h1>
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>#</th>
                            <th style={styles.th}>Order ID</th>
                            <th style={styles.th}>Customer Info</th>
                            <th style={styles.th}>Contact</th>
                            <th style={styles.th}>Shipping Address</th>
                            <th style={styles.th}>Order Details</th>
                            <th style={styles.th}>Payment</th>
                            <th style={styles.th}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id} style={styles.tr}>
                                <td style={styles.td}>{index + 1}</td>
                                <td style={styles.td}>{order.id}</td>
                                <td style={styles.td}>
                                    <div style={styles.customerInfo}>
                                        <strong>{order.customerInfo?.firstName} {order.customerInfo?.lastName}</strong>
                                        <div style={styles.subText}>Customer ID: {order.customerInfo?.id || 'N/A'}</div>
                                    </div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.contactInfo}>
                                        <div>📧 {order.customerInfo?.email}</div>
                                        <div>📱 {order.customerInfo?.phone}</div>
                                    </div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.addressInfo}>
                                        <div>{order.shippingAddress?.street}</div>
                                        <div>{order.shippingAddress?.city}, {order.shippingAddress?.postalCode}</div>
                                        <div>{order.shippingAddress?.country}</div>
                                    </div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.orderDetails}>
                                        <div style={styles.itemsList}>
                                            {order.items?.map((item, idx) => (
                                                <div key={idx} style={styles.itemRow}>
                                                    <span style={styles.itemTitle}>{item.title}</span>
                                                    <span style={styles.itemQuantity}>x{item.quantity}</span>
                                                    <span style={styles.itemPrice}>{item.price} лв.</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div style={styles.totalRow}>
                                            <strong>Total: {order.totalAmount} лв.</strong>
                                        </div>
                                    </div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.paymentInfo}>
                                        <div>Method: {order.paymentMethod || 'N/A'}</div>
                                        <div>Status: {order.paymentStatus || 'Pending'}</div>
                                    </div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.dateInfo}>
                                        <div>{order.createdAt?.toDate().toLocaleDateString()}</div>
                                        <div style={styles.timeText}>{order.createdAt?.toDate().toLocaleTimeString()}</div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '40px 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop: '40px'
    },
    title: {
        color: '#333',
        marginBottom: '30px',
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: '600'
    },
    tableContainer: {
        overflowX: 'auto',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        marginTop: '20px'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#fff'
    },
    th: {
        padding: '15px',
        textAlign: 'left',
        borderBottom: '2px solid #ddd',
        backgroundColor: '#f8f9fa',
        fontWeight: 'bold',
        color: '#333',
        fontSize: '14px',
        whiteSpace: 'nowrap'
    },
    td: {
        padding: '15px',
        borderBottom: '1px solid #eee',
        fontSize: '14px',
        color: '#444',
        verticalAlign: 'top'
    },
    tr: {
        '&:hover': {
            backgroundColor: '#f8f9fa'
        }
    },
    customerInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    subText: {
        fontSize: '12px',
        color: '#666'
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    addressInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    orderDetails: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    itemsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    itemRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 0',
        borderBottom: '1px solid #f0f0f0'
    },
    itemTitle: {
        flex: 1
    },
    itemQuantity: {
        margin: '0 8px',
        color: '#666'
    },
    itemPrice: {
        color: '#666'
    },
    totalRow: {
        marginTop: '8px',
        paddingTop: '8px',
        borderTop: '1px solid #ddd'
    },
    paymentInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    dateInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    timeText: {
        fontSize: '12px',
        color: '#666'
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#666'
    }
};

export default AdminOrders; 