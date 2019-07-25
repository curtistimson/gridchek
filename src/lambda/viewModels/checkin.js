export default function (dbModel) {
  return {
    userId: dbModel.userId,
    plusCode: dbModel.plusCode,
    id: dbModel._id,
  }
};