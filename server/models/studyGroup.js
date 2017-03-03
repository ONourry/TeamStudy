import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studyGroupSchema = new Schema({
  guid: { type: 'String', required: true }, // cuid?
  groupName: { type: 'String', required: true },
  course: { type: 'String', required: true },
  teacher: { type: 'String', required: true },
  description: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },

  users: [{ type: 'String' }],
  chatMessages: [{ type: 'String' }],
});

export default mongoose.model('studyGroup', studyGroupSchema);
