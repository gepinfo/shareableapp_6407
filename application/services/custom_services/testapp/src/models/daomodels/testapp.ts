
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const testappSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   field: String
})

const testappModel = mongoose.model('testapp', testappSchema, 'testapp');
export default testappModel;
