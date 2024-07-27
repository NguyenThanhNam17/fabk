

export const mutipleMongooseToObject = function (mongooses) {
    return mongooses.map(mongoose => mongoose.toObject());
};

export const mongooseToObject = function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
};
