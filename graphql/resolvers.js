import { getMovies } from "./db";

const resolvers = {
    movies: (_, { rating, limit }) => getMovies(limit, rating)
};

export default resolvers;