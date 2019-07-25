import serverless from 'serverless-http'
import expressApp from './app'
import dotenv from 'dotenv';

const functionName = 'serverless-http'

dotenv.config();

// Initialize express app
const app = expressApp(functionName)

// Export lambda handler
exports.handler = serverless(app);