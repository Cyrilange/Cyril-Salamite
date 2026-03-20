FROM node:18

RUN apt-get update && apt-get install -y \
    build-essential \
    libreadline-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .


ENV TERM=xterm

WORKDIR /app/c_programs/minishell
RUN make

WORKDIR /app/c_programs/philosophers
RUN make

WORKDIR /app/c_programs/push_swap
RUN make

WORKDIR /app

EXPOSE 5000

CMD ["npm", "start"]