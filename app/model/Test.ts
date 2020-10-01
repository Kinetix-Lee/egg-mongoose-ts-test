// export default (app) => {
//   const { mongoose } = app;
//   const { Schema } = mongoose;
//   const TestSchema = new Schema({
//     id: {
//       type: Number,
//     },
//     greetings: {
//       type: String,
//     },
//   })

//   return mongoose.model('test', TestSchema)
// }

import { prop, getModelForClass } from '@typegoose/typegoose';

class Test {
  @prop()
  public id?: number;

  @prop()
  public count?: string;
}

export default () => getModelForClass(Test);
