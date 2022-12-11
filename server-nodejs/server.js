const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

//Routes
const charitiesRoutes = require('./routes/api/charities');
const sellersRoutes = require('./routes/api/sellers');
const donationsRoutes = require('./routes/api/donations');
const usersRoutes = require('./routes/api/users');
const categoryRoutes = require('./routes/api/categories');
const charityCategoriesRoutes = require('./routes/api/charityCategories');
const productRoutes = require('./routes/api/products');
const textRoutes = require('./routes/api/textUI');
const googleLoginRoutes = require('./routes/api/googleLogin');

const app = express();
app.use(cors())

//BodyParser Middleware
app.use(express.json());

//Connect to MongoDB
mongoose.connect( MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    // useFindAndModify: false
})
    .then(() => console.log('MongoDB is connected!'))
    .catch(err => console.log(err));

// User routes
app.use('/api/charities', charitiesRoutes);
app.use('/api/sellers', sellersRoutes);
app.use('/api/donations', donationsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/chcategories', charityCategoriesRoutes);
app.use('/api/text', textRoutes);
app.use('/api/login', googleLoginRoutes);

//middleware for acces/present an image (serving static files in Express)  
app.use('/charities/uploads' ,express.static('uploads/charities'));
app.use('/chcategories/uploads' ,express.static('uploads/charityCategories'));
app.use('/sellers/uploads' ,express.static('uploads/sellers'));
app.use('/products/uploads' ,express.static('uploads/products'));
    
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));