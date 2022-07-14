import {model,Schema,Document} from 'mongoose';


// Interface
interface User{
    sub: String;
    title: String;
}

// Export interface
export interface UserDocument extends Document{
    sub: String;
    title: String;
}
  
// schema definitions

const userSchema = new Schema<User>({
  sub: { type: String, required: true },

  title: {
    type: String, required: true, 
  }
 
});

// Model
const UserModel = model<User>('User', userSchema);

export default UserModel;
