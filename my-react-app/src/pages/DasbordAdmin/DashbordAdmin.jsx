import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  MessageSquare, 
  FileText, 
  FolderOpen, 
  Users,
  Menu,
  X,
  Bell,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  ExternalLink,
  Calendar,
  DollarSign,
  TrendingUp,
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  CheckCircle,
  Clock,
  AlertCircle,
  XCircle,
  Truck,
  LogOut
} from 'lucide-react';

const handleAuthError = (response) => {
  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem('adminToken');
    window.location.href = '/AdminLogin';
    return true;
  }
  return false;
};
const getAuthHeaders = () => {
  const token = localStorage.getItem('adminToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [deletingOrderId, setDeletingOrderId] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loadingOrderDetails, setLoadingOrderDetails] = useState(false);
  const [editingOrderId, setEditingOrderId] = useState(null);
const [updatingStatus, setUpdatingStatus] = useState(false);
const [showDeleteProjectModal, setShowDeleteProjectModal] = useState(false);
const [projectToDelete, setProjectToDelete] = useState(null);
const [deletingProjectId, setDeletingProjectId] = useState(null);
const [showDeleteQuoteModal, setShowDeleteQuoteModal] = useState(false);
const [quoteToDelete, setQuoteToDelete] = useState(null);
const [deletingQuoteId, setDeletingQuoteId] = useState(null);
const [showDeleteContactModal, setShowDeleteContactModal] = useState(false);
const [contactToDelete, setContactToDelete] = useState(null);
const [deletingContactId, setDeletingContactId] = useState(null);
const [showLogoutModal, setShowLogoutModal] = useState(false);
const [adminData, setAdminData] = useState(null);
const [loadingAdmin, setLoadingAdmin] = useState(false);
const [errorAdmin, setErrorAdmin] = useState(null);

const STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'processing', label: 'Processing', color: 'bg-blue-100 text-blue-800' },
  { value: 'shipped', label: 'Shipped', color: 'bg-purple-100 text-purple-800' },
  { value: 'delivered', label: 'Delivered', color: 'bg-green-100 text-green-800' },
  { value: 'cancelled', label: 'Cancelled', color: 'bg-red-100 text-red-800' }
];
  // API data states
  const [orders, setOrders] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [yes, setYES] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState({
    orders: false,
    contacts: false,
    projects: false,
    quotes: false
  });
  const [error, setError] = useState({
    orders: null,
    contacts: null,
    projects: null,
    quotes: null
  });

  // API endpoints
  const API_ENDPOINTS = {
    orders: 'http://localhost:5000/api/v6/Orders',
    contacts: 'http://localhost:5000/api/v2/AllContact',
    projects: 'http://localhost:5000/api/v4/projects',
    quotes: 'http://localhost:5000/api/v3/Allquotes',
    admin: 'http://localhost:5000/api/v5/admin'
  };
 const ViewOrderDetails = () => {
  return (
    <div className='z-50 bg-black bg-opacity-50 w-full h-full fixed top-0 left-0 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-gray-200'>
          <h2 className='text-2xl font-bold text-gray-900'>Order Details</h2>
          <button 
            onClick={() => {
              setYES(false);
              setSelectedOrder(null);
              setSelectedOrderId(null);
            }}
            className='p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100'
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className='p-6'>
          {loadingOrderDetails ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              <span className="ml-3 text-gray-600">Loading order details...</span>
            </div>
          ) : selectedOrder ? (
            <div className="space-y-6">
              {/* Order Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Customer Information</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium text-gray-600">Name:</span> {selectedOrder.firstname} {selectedOrder.lastname}</p>
                    <p><span className="font-medium text-gray-600">Email:</span> {selectedOrder.email}</p>
                    <p><span className="font-medium text-gray-600">Phone:</span> {selectedOrder.phone || 'N/A'}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Order Information</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium text-gray-600">Order ID:</span> #{selectedOrder.id}</p>
                    <p><span className="font-medium text-gray-600">Service:</span> {selectedOrder.service_name}</p>
                    <p><span className="font-medium text-gray-600">Price:</span> ${selectedOrder.price}</p>
                    <p><span className="font-medium text-gray-600">Date:</span> {new Date(selectedOrder.order_date).toLocaleDateString()}</p>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-600 mr-2">Status:</span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedOrder.status)}`}>
                        {getStatusIcon(selectedOrder.status)}
                        <span className="ml-1 capitalize">{selectedOrder.status}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              {selectedOrder.description && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700">{selectedOrder.description}</p>
                </div>
              )}

           
            </div>
          ) : (
            <div className="text-center py-8 text-red-500">
              <p>Failed to load order details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const StatusDropdown = ({ order }) => {
  const isEditing = editingOrderId === order.id;
  
  if (!isEditing) {
    return (
      <button
        onClick={() => setEditingOrderId(order.id)}
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)} hover:opacity-80 transition-opacity cursor-pointer`}
      >
        {getStatusIcon(order.status)}
        <span className="ml-1 capitalize">{order.status}</span>
        <Edit className="w-3 h-3 ml-1" />
      </button>
    );
  }

  return (
    <div className="relative">
      <select
        value={order.status}
        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
        disabled={updatingStatus}
        className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        onBlur={() => setEditingOrderId(null)}
        autoFocus
      >
        {STATUS_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {updatingStatus && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-purple-600"></div>
        </div>
      )}
    </div>
  );
};
const handleLogout = () => {
  // Clear any stored authentication data
  localStorage.removeItem('adminToken'); 
  // Redirect to login page
  window.location.href = '/AdminLogin'; 
};
const deleteOrder = async (orderId) => {
  setDeletingOrderId(orderId);
  
  try {
    const response = await fetch(`http://localhost:5000/api/v6/DeleteOrder/${orderId}`, {
      method: 'DELETE',
      headers:getAuthHeaders()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Remove the order from local state
    setOrders(prevOrders => 
      prevOrders.filter(order => order.id !== orderId)
    );

    console.log('Order deleted successfully');
    
  } catch (err) {
    console.error('Error deleting order:', err);
    alert('Failed to delete order. Please try again.');
  } finally {
    setDeletingOrderId(null);
  }
};
const deleteProject = async (projectId) => {
  setDeletingProjectId(projectId);
  
  try {
    const response = await fetch(`http://localhost:5000/api/v4/DeleteProject/${projectId}`, {
      method: 'DELETE',
      headers:getAuthHeaders()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Remove the project from local state
    setProjects(prevProjects => 
      prevProjects.filter(project => project.id !== projectId)
    );

    console.log('Project deleted successfully');
    
  } catch (err) {
    console.error('Error deleting project:', err);
    alert('Failed to delete project. Please try again.');
  } finally {
    setDeletingProjectId(null);
  }
};
const deleteQuote = async (quoteId) => {
  setDeletingQuoteId(quoteId);
  
  try {
    const response = await fetch(`http://localhost:5000/api/v3/quotes/${quoteId}`, {
      method: 'DELETE',
     headers:getAuthHeaders()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Remove the quote from local state
    setQuotes(prevQuotes => 
      prevQuotes.filter(quote => quote.id !== quoteId)
    );

    console.log('Quote deleted successfully');
    
  } catch (err) {
    console.error('Error deleting quote:', err);
    alert('Failed to delete quote. Please try again.');
  } finally {
    setDeletingQuoteId(null);
  }
};
const deleteContact = async (contactId) => {
  setDeletingContactId(contactId);
  
  try {
    const response = await fetch(`http://localhost:5000/api/v2/contact/${contactId}`, {
      method: 'DELETE',
     headers:getAuthHeaders()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Remove the contact from local state
    setContacts(prevContacts => 
      prevContacts.filter(contact => contact.id !== contactId)
    );

    console.log('Contact deleted successfully');
    
  } catch (err) {
    console.error('Error deleting contact:', err);
    alert('Failed to delete contact. Please try again.');
  } finally {
    setDeletingContactId(null);
  }
};
const updateOrderStatus = async (orderId, newStatus) => {
  setUpdatingStatus(true);
  try {
    const response = await fetch(`http://localhost:5000/api/v6/UpdateOrderStatus/${orderId}`, {
      method: 'PUT',
      headers:getAuthHeaders(),
      body: JSON.stringify({
        status: newStatus
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Update the local orders array
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus }
          : order
      )
    );

    // Close the dropdown
    setEditingOrderId(null);
    
    console.log('Order status updated successfully');
    
  } catch (err) {
    console.error('Error updating order status:', err);
    alert('Failed to update order status. Please try again.');
  } finally {
    setUpdatingStatus(false);
  }
};
  const fetchOrderById = async (orderId) => {
  setLoadingOrderDetails(true);
  try {
    const response = await fetch(`http://localhost:5000/api/v6/OrderById/${orderId}` , {
      headers:getAuthHeaders()
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setSelectedOrder(data.result || data);
  } catch (err) {
    console.error('Error fetching order details:', err);
    setSelectedOrder(null);
  } finally {
    setLoadingOrderDetails(false);
  }
};
  // Generic fetch function
const fetchData = async (endpoint, dataType) => {
    setLoading(prev => ({ ...prev, [dataType]: true }));
    setError(prev => ({ ...prev, [dataType]: null }));
    
    try {
      const response = await fetch(endpoint , {
        method: 'GET',
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        if (handleAuthError(response)) return [];
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`${dataType} data:`, data);
      
      // Handle different response structures
      let result = data;
      if (data.result) {
        result = data.result;
      } else if (data.data) {
        result = data.data;
      }
      
      // Ensure result is an array
      if (!Array.isArray(result)) {
        throw new Error(`Invalid data format received from ${dataType} API`);
      }
      
      return result;
    } catch (err) {
      console.error(`Error fetching ${dataType}:`, err);
      setError(prev => ({ ...prev, [dataType]: `Failed to load ${dataType}` }));
      return [];
    } finally {
      setLoading(prev => ({ ...prev, [dataType]: false }));
    }
};

  // Fetch functions for each data type

  const fetchAdminData = async () => {
  setLoadingAdmin(true);
  setErrorAdmin(null);
  
  try {
    const response = await fetch(API_ENDPOINTS.admin, {
      method: 'GET',
      headers: getAuthHeaders()
    });
    
    if (!response.ok) {
      if (handleAuthError(response)) return;
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Admin data:', data);
    
    // Handle different response structures
    let result = data;
    if (data.result) {
      result = data.result;
    } else if (data.data) {
      result = data.data;
    }
    
    setAdminData(result);
  } catch (err) {
    console.error('Error fetching admin data:', err);
    setErrorAdmin('Failed to load admin profile');
  } finally {
    setLoadingAdmin(false);
  }
};
  const fetchOrders = async () => {
    const data = await fetchData(API_ENDPOINTS.orders, 'orders');
    setOrders(data);
  };

  const fetchContacts = async () => {
    const data = await fetchData(API_ENDPOINTS.contacts, 'contacts');
    setContacts(data);
  };

  const fetchProjects = async () => {
    const data = await fetchData(API_ENDPOINTS.projects, 'projects');
    setProjects(data);
  };

  const fetchQuotes = async () => {
    const data = await fetchData(API_ENDPOINTS.quotes, 'quotes');
    setQuotes(data);
  };

  // Load all data on component mount
  useEffect(() => {
    fetchOrders();
    fetchContacts();
    fetchProjects();
    fetchQuotes();
    fetchAdminData();
  }, []);

  // Calculate stats from real data
  const stats = {
    totalOrders: orders.length,
    totalContacts: contacts.length,
    totalProjects: projects.length,
    totalQuotes: quotes.length
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, count: stats.totalOrders },
    { id: 'projects', label: 'Projects', icon: FolderOpen, count: stats.totalProjects },
    { id: 'contacts', label: 'Messages', icon: MessageSquare, count: stats.totalContacts },
    { id: 'quotes', label: 'Quotes', icon: FileText, count: stats.totalQuotes },
    { id: 'profile', label: 'Profile', icon: User },

  ];

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status) => {
    const icons = {
      pending: Clock,
      processing: AlertCircle,
      shipped: Truck,
      delivered: CheckCircle,
      cancelled: XCircle
    };
    const Icon = icons[status] || Clock;
    return <Icon className="w-4 h-4" />;
  };

  const StatCard = ({ title, value, icon: Icon, trend, color = 'purple', isLoading = false }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-16 mt-1"></div>
            </div>
          ) : (
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          )}
          {trend && !isLoading && (
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">{trend}</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Orders" 
          value={stats.totalOrders} 
          icon={ShoppingCart} 
          trend="+12%" 
          color="blue" 
          isLoading={loading.orders}
        />
        <StatCard 
          title="Projects" 
          value={stats.totalProjects} 
          icon={FolderOpen} 
          trend="+8%" 
          color="green"
          isLoading={loading.projects}
        />
        <StatCard 
          title="Messages" 
          value={stats.totalContacts} 
          icon={MessageSquare} 
          trend="+23%" 
          color="purple"
          isLoading={loading.contacts}
        />
        <StatCard 
          title="Quotes" 
          value={stats.totalQuotes} 
          icon={FileText} 
          trend="+15%" 
          color="orange"
          isLoading={loading.quotes}
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
            <button 
              onClick={() => setActiveSection('orders')}
              className="text-purple-600 hover:text-purple-800 text-sm font-medium"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {loading.orders ? (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                <span className="ml-2 text-gray-600">Loading orders...</span>
              </div>
            ) : error.orders ? (
              <div className="text-amber-600 text-center py-4 text-sm">
                <p>{error.orders}</p>
              </div>
            ) : orders.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                <p>No orders found</p>
              </div>
            ) : (
              orders.slice(0, 3).map(order => (
                <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{order.firstname} {order.lastname}</p>
                    <p className="text-sm text-gray-500">{order.service_name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${order.price}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1">{order.status}</span>
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Contacts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Messages</h3>
            <button 
              onClick={() => setActiveSection('contacts')}
              className="text-purple-600 hover:text-purple-800 text-sm font-medium"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {loading.contacts ? (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                <span className="ml-2 text-gray-600">Loading contacts...</span>
              </div>
            ) : error.contacts ? (
              <div className="text-amber-600 text-center py-4 text-sm">
                <p>{error.contacts}</p>
              </div>
            ) : contacts.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                <p>No messages found</p>
              </div>
            ) : (
              contacts.slice(0, 3).map(contact => (
                <div key={contact.id} className="p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900">{contact.name || contact.nom}</p>
                    <span className="text-xs text-gray-500">
                      {new Date(contact.created_at || contact.date_creation).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-purple-600 mb-1">{contact.sujet || contact.subject}</p>
                  <p className="text-sm text-gray-600 truncate">{contact.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );

const [showDeleteModal, setShowDeleteModal] = useState(false);
const [orderToDelete, setOrderToDelete] = useState(null);

const DeleteConfirmationModal = () => {
  if (!showDeleteModal || !orderToDelete) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
            <Trash2 className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Delete Order</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete the order for <strong>{orderToDelete.firstname} {orderToDelete.lastname}</strong>? 
          This action cannot be undone.
        </p>
        
        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={() => {
              setShowDeleteModal(false);
              setOrderToDelete(null);
            }}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              await deleteOrder(orderToDelete.id);
              setShowDeleteModal(false);
              setOrderToDelete(null);
            }}
            disabled={deletingOrderId === orderToDelete.id}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center"
          >
            {deletingOrderId === orderToDelete.id ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Deleting...
              </>
            ) : (
              'Delete Order'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
const DeleteProjectConfirmationModal = () => {
  if (!showDeleteProjectModal || !projectToDelete) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
            <Trash2 className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Delete Project</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete the project <strong>"{projectToDelete.tittle || projectToDelete.title}"</strong>? 
          This action cannot be undone.
        </p>
        
        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={() => {
              setShowDeleteProjectModal(false);
              setProjectToDelete(null);
            }}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              await deleteProject(projectToDelete.id);
              setShowDeleteProjectModal(false);
              setProjectToDelete(null);
            }}
            disabled={deletingProjectId === projectToDelete.id}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center"
          >
            {deletingProjectId === projectToDelete.id ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Deleting...
              </>
            ) : (
              'Delete Project'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
const DeleteQuoteConfirmationModal = () => {
  if (!showDeleteQuoteModal || !quoteToDelete) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
            <Trash2 className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Delete Quote</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete the quote request from <strong>{quoteToDelete.name || quoteToDelete.nom}</strong>? 
          This action cannot be undone.
        </p>
        
        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={() => {
              setShowDeleteQuoteModal(false);
              setQuoteToDelete(null);
            }}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              await deleteQuote(quoteToDelete.id);
              setShowDeleteQuoteModal(false);
              setQuoteToDelete(null);
            }}
            disabled={deletingQuoteId === quoteToDelete.id}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center"
          >
            {deletingQuoteId === quoteToDelete.id ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Deleting...
              </>
            ) : (
              'Delete Quote'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
const DeleteContactConfirmationModal = () => {
  if (!showDeleteContactModal || !contactToDelete) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
            <Trash2 className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Delete Contact</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete the message from <strong>{contactToDelete.name || contactToDelete.nom}</strong>? 
          This action cannot be undone.
        </p>
        
        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={() => {
              setShowDeleteContactModal(false);
              setContactToDelete(null);
            }}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              await deleteContact(contactToDelete.id);
              setShowDeleteContactModal(false);
              setContactToDelete(null);
            }}
            disabled={deletingContactId === contactToDelete.id}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center"
          >
            {deletingContactId === contactToDelete.id ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Deleting...
              </>
            ) : (
              'Delete Contact'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
const LogoutConfirmationModal = () => {
  if (!showLogoutModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
            <LogOut className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Logout</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          Are you sure you want to logout? You will need to login again to access the admin panel.
        </p>
        
        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={() => setShowLogoutModal(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
  const renderOrders = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Orders Management</h2>
        
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={fetchOrders}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
            >
              Refresh
            </button>
          </div>
        </div>

        {loading.orders ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <span className="ml-3 text-gray-600">Loading orders...</span>
          </div>
        ) : error.orders ? (
          <div className="text-center py-8 text-red-500">
            <p>{error.orders}</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No orders found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">Customer</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">Service</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">Price</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">Status</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">Date</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders
                  .filter(order => 
                    !searchTerm || 
                    `${order.firstname} ${order.lastname}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    order.service_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    order.email.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map(order => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium text-gray-900">{order.firstname} {order.lastname}</p>
                          <p className="text-sm text-gray-500">{order.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-gray-900">{order.service_name}</p>
                      </td>
                      <td className="py-4 px-6">
                        <p className="font-semibold text-gray-900">${order.price}</p>
                      </td>
                     <td className="py-4 px-6">
                            <StatusDropdown order={order} />
                     </td>
                      <td className="py-4 px-6">
                        <p className="text-gray-500">{new Date(order.order_date).toLocaleDateString()}</p>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <button  onClick={() => {setSelectedOrderId(order.id);  setYES(true); fetchOrderById(order.id);}}  className="p-1 text-gray-400 hover:text-purple-600 transition-colors">
                               <Eye className="w-4 h-4" />
                          </button>
                     <button 
  onClick={() => {
    setOrderToDelete(order);
    setShowDeleteModal(true);
  }}
  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
>
  <Trash2 className="w-4 h-4" />
</button>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )}
      </div>
      {showDeleteModal && <DeleteConfirmationModal />}
    </div>
  );
const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Projects Management</h2>
        <a href="/NewProject">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </button>
        </a>
      </div>

      {loading.projects ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          <span className="ml-3 text-gray-600">Loading projects...</span>
        </div>
      ) : error.projects ? (
        <div className="text-center py-8 text-red-500">
          <p>{error.projects}</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <FolderOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>No projects found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src={`http://localhost:5000/images/portfolio/${project.image_url}`} 
                  alt={project.tittle || project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.tittle || project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Created: {new Date(project.created_at || project.date_creation).toLocaleDateString()}
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href={project.website_url || project.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Live
                  </a>
                  <div className="flex items-center space-x-2">
                    
                  <button 
  onClick={() => {
    setProjectToDelete(project);
    setShowDeleteProjectModal(true);
  }}
  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
>
  <Trash2 className="w-4 h-4" />
</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {showDeleteProjectModal && <DeleteProjectConfirmationModal />}
    </div>
  );
const renderProfile = () => (
  <div className="max-w-6xl mx-auto space-y-8">
    <div className="border-b border-gray-200 pb-6">
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Profile Settings</h2>
      <p className="mt-2 text-gray-600">Manage your account information and preferences</p>
    </div>
    
    {loading.profile ? (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="relative">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-purple-600"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-400 animate-pulse"></div>
        </div>
        <span className="mt-4 text-lg font-medium text-gray-700">Loading profile...</span>
        <span className="mt-1 text-sm text-gray-500">Please wait while we fetch your information</span>
      </div>
    ) : error.profile ? (
      <div className="rounded-lg bg-red-50 border border-red-200 p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error Loading Profile</h3>
            <p className="mt-1 text-sm text-red-700">{error.profile}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {adminData?.admin?.name ? adminData.admin.name.charAt(0).toUpperCase() : 'U'}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                {adminData?.admin?.name || 'Unknown User'}
              </h3>
              <p className="text-purple-100">Administrator Account</p>
            </div>
          </div>
        </div>
        
        <div className="px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Full Name
                </label>
                <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 group-hover:border-purple-300 transition-colors">
                  <p className="text-gray-900 font-medium">{adminData?.admin?.name || 'Not specified'}</p>
                </div>
              </div>
              
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Email Address
                </label>
                <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 group-hover:border-purple-300 transition-colors">
                  <p className="text-gray-900 font-medium">{adminData?.admin?.email || 'Not specified'}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2z"></path>
                  </svg>
                  Member Since
                </label>
                <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 group-hover:border-purple-300 transition-colors">
                  <p className="text-gray-900 font-medium">
                    {adminData?.admin?.created_at
                      ? new Date(adminData.admin.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })
                      : 'Not available'
                    }
                  </p>
                  {adminData?.admin?.created_at && (
                    <p className="text-sm text-gray-500 mt-1">
                      {Math.floor((new Date() - new Date(adminData.admin.created_at)) / (1000 * 60 * 60 * 24))} days ago
                    </p>
                  )}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-900">Account Status</p>
                    <p className="text-sm text-purple-700">Active Administrator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);


  const renderContacts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Contact Messages</h2>
        <div className="flex items-center space-x-2">
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
            {stats.totalContacts} Total
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {loading.contacts ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <span className="ml-3 text-gray-600">Loading contacts...</span>
          </div>
        ) : error.contacts ? (
          <div className="text-center py-8 text-red-500">
            <p>{error.contacts}</p>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No messages found</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {contacts.map(contact => (
              <div key={contact.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{contact.name || contact.nom}</p>
                        <p className="text-sm text-gray-500">{contact.email}</p>
                      </div>
                    </div>
                    <h4 className="font-medium text-purple-600 mb-2">{contact.sujet || contact.subject}</h4>
                    <p className="text-gray-600">{contact.message}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <span className="text-sm text-gray-500">
                      {new Date(contact.created_at || contact.date_creation).toLocaleDateString()}
                    </span>
                    
                   <button 
  onClick={() => { setContactToDelete(contact); setShowDeleteContactModal(true);}}className="p-1 text-gray-400 hover:text-red-600 transition-colors">
  <Trash2 className="w-4 h-4" />
</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showDeleteContactModal && <DeleteContactConfirmationModal />}
    </div>
  );

  const renderQuotes = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Quote Requests</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {loading.quotes ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <span className="ml-3 text-gray-600">Loading quotes...</span>
          </div>
        ) : error.quotes ? (
          <div className="text-center py-8 text-red-500">
            <p>{error.quotes}</p>
          </div>
        ) : quotes.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No quotes found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">Name</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">Email</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">Date</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {quotes.map(quote => (
                  <tr key={quote.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <p className="font-medium text-gray-900">{quote.name || quote.nom}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-gray-600">{quote.email}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-gray-500">
                        {new Date(quote.created_at || quote.date_creation).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        
                       <button onClick={() => {setQuoteToDelete(quote); setShowDeleteQuoteModal(true);}} className="p-1 text-gray-400 hover:text-red-600 transition-colors" disabled={deletingQuoteId === quote.id}>
                         {deletingQuoteId === quote.id ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                              ) : (
                           <Trash2 className="w-4 h-4" />
                            )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {showDeleteQuoteModal && <DeleteQuoteConfirmationModal />}
    </div>
  );


  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return renderDashboard();
      case 'orders': return renderOrders();
      case 'projects': return renderProjects();
      case 'contacts': return renderContacts();
      case 'quotes': return renderQuotes();
       case 'profile': return renderProfile();
      default: return renderDashboard();
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
     <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
       <nav className="p-4 flex flex-col h-full">
  <ul className="space-y-2 flex-1">
    {sidebarItems.map(item => {
      const Icon = item.icon;
      return (
        <li key={item.id}>
          <button
            onClick={() => {
              setActiveSection(item.id);
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
              activeSection === item.id 
                ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center">
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </div>
            {item.count !== undefined && (
              <span className={`px-2 py-1 text-xs rounded-full ${
                activeSection === item.id 
                  ? 'bg-purple-200 text-purple-800' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {item.count}
              </span>
            )}
          </button>
        </li>
      );
    })}
  </ul>
  
  {/* Logout Button */}
  <div className="mt-auto pt-4 border-t border-gray-200">
    <button
      onClick={() => setShowLogoutModal(true)}
      className="w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors text-red-600 hover:bg-red-50"
    >
      <LogOut className="w-5 h-5 mr-3" />
      <span className="font-medium">Logout</span>
    </button>
  </div>
</nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-400 hover:text-gray-600 mr-2"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-semibold text-gray-900 capitalize">
                {activeSection === 'dashboard' ? 'Dashboard Overview' : `${activeSection} Management`}
              </h2>
            </div>
            {/* Add Profile Icon */}
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setActiveSection('profile')}
        className={`p-2 rounded-lg transition-colors ${
          activeSection === 'profile' 
            ? 'bg-purple-100 text-purple-600' 
            : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
        }`}
        title="Admin Profile"
      >
        <User className="w-6 h-6" />
      </button>
    </div>
            
           
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="transition-opacity duration-300">
            {renderContent()}
          </div>
          {
            yes && <ViewOrderDetails />
          }
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        />
      )}
      {showLogoutModal && <LogoutConfirmationModal />}
    </div>
  );
};

export default AdminDashboard;