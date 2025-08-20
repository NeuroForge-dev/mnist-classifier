# Use an official Ubuntu base image
FROM ubuntu:20.04

# Avoid interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Install build tools and dependencies

RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    git \
    curl \
    wget\
    libasio-dev\
    libssl-dev \
    pkg-config

RUN wget https://github.com/CrowCpp/Crow/releases/download/v1.2.1.2/Crow-1.2.1-Linux.deb &&\
    dpkg -i Crow-1.2.1-Linux.deb

# Create app directory
WORKDIR /app

# Copy the entire project (including nnet and backend folders)
COPY . .

# Create and enter build directory
RUN mkdir build && cd build && \
    cmake .. && \
    cmake --build . --target backend

# Expose the backend port
EXPOSE 8080

# Run the backend executable
CMD ["./build/backend"]
