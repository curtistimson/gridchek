import serverless from 'serverless-http'
import expressApp from './app'

const functionName = 'serverless-http'

console.log('ddff');

// Initialize express app
const app = expressApp(functionName)

// Export lambda handler
exports.handler = serverless(app);