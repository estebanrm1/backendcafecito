import 'dotenv/config'
//127.0.0.1 equivale a la palabra localhost
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cafecito_db_42i';
