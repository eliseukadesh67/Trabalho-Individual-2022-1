FROM python:3.10.6-alpine3.16

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install psycopg2-binary
RUN apk update
RUN apk add gcc libpq-dev python3-dev musl-dev
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8001

ENTRYPOINT [ "./run.sh" ]