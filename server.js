const express = require('express');
const app = express();
const cors = require('cors');


const { graphqlHTTP } = require('express-graphql');

const http = require('http');
// port
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const schema = require('./Schema');

app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5173'
  }));
  

const root = {
    dbconfig: 'globa value'
}
const context = async (req) => {

};

app.use('/graphql',
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true,
        context: () => context(req)
    })
)

// listen to server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// https://www.youtube.com/watch?v=PTPcrcKb-no&list=PLolI8AY2AS9YmT5mBp8eM59fOCOS6i6u0&index=4