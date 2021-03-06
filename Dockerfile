FROM ubuntu:18.04

MAINTAINER Ruman Dangol "rumancha12@gmail.com"

RUN apt-get update -y && \
    apt-get install python3.6 -y &&\
    apt-get install -y python3-pip python3-dev &&\
    apt purge python2.7-minimal -y

# We copy just the requirements.txt first to leverage Docker cache
COPY requirements.txt /app/colz_project_backend/requirements.txt

WORKDIR /app/colz_project_backend

RUN pip3 install -r requirements.txt



COPY colz_project_backend /app/colz_project_backend



ENTRYPOINT [ "python3" ]

CMD [ "app.py" ]