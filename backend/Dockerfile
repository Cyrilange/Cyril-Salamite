FROM node:18-alpine

# Install build tools and readline library
RUN apk add --no-cache \
    gcc \
    g++ \
    make \
    musl-dev \
    readline-dev \
    ncurses-dev

WORKDIR /app

# Install Node.js dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Compile C programs
RUN cd c_programs/minishell && make && cd ../.. || echo "Minishell compilation failed"
RUN cd c_programs/philosophers && make && cd ../.. || echo "Philosophers compilation failed"
RUN cd c_programs/push_swap && make && cd ../.. || echo "Push_swap compilation failed"

EXPOSE 5000

CMD ["npm", "start"]