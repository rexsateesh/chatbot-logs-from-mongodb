# ORI ChatBot :: API Details
**NOTE: After import CSV file into MongoDB collection run this query to convert timestamp string to date format**
```
db.chat_logs.find().forEach(function(el){
    el.timestamp = ISODate(el.timestamp);
    db.chat_logs.save(el);
});
```

#### Get Data by sender
##### Request
Api URL: GET https://localhost:3000/chatbot
```
{
    "resultType": "date",
    "from": "2019-04-15T15:30:06.638Z",
    "to": "2019-04-18T18:30:06.638Z"
}
```

##### Response
```
{
    "status": true,
    "data": [
        {
            "_id": {
                "sender": "customer"
            },
            "count": 14150
        },
        {
            "_id": {
                "sender": "chatbot"
            },
            "count": 19816
        },
        .......
    ]
}
```

#### Get Data by hours
##### Request
Api URL: GET https://localhost:3000/chatbot
```
{
    "resultType": "hours",
    "from": "2019-04-15T15:30:06.638Z",
    "to": "2019-04-18T18:30:06.638Z"
}
```

##### Response
```
{
    "status": true,
    "data": [
        {
            "_id": {
                "sender": "chatbot",
                "hour": 6
            },
            "count": 3353,
            "month": 4,
            "year": 2019
        },
        .......
    ]
}
```

#### Get Data by days
##### Request
Api URL: GET https://localhost:3000/chatbot
```
{
    "resultType": "days",
    "from": "2019-04-15T15:30:06.638Z",
    "to": "2019-04-18T18:30:06.638Z"
}
```

##### Response
```
{
    "status": true,
    "data": [
        {
            "_id": {
                "sender": "chatbot",
                "day": 16
            },
            "count": 17796,
            "month": 4,
            "year": 2019
        },
        .......
    ]
}
```
