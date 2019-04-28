import mongoClient from "../lib/mongoClient";

export default class ChatBotService {
    getData(req, res) {
        let query = [{
            "$match": {
                "timestamp": {
                    "$gte": new Date(`${req.body.from}`), 
                    "$lte": new Date(`${req.body.to}`)
                }
            }
        },
        {"$project": {}},
        {"$group": {
                "_id": {sender: "$sender"},
                "count": {"$sum": 1}
            }
        }];

        if (req.body.resultType == "hours" || req.body.resultType == "days") {
            query[1]['$project'] = {
                day: {"$dayOfMonth": "$timestamp"},
                month: {"$month": "$timestamp"},
                year: {"$year": "$timestamp"},
                sender: "$sender"
            };
            
            query[2]['$group']['_id'] = req.body.resultType == "hours" ? {sender: "$sender", hour: "$hour"} : {sender: "$sender", day: "$day"}; // Key Type
            query[2]['$group']['month'] = {"$first": "$month"};
            query[2]['$group']['year'] = {"$first": "$year"};

            if (req.body.resultType == "hours") { // If hours
                query[1]['$project']['hour'] = {"$hour": "$timestamp"};
            }
        } else {
            query[1]['$project'] = {sender: "$sender"}
        }

        mongoClient.then(db => {
            db.collection("chat_logs").aggregate(query).toArray()
            .then(result => res.status(200).json(this.response(true, result)))
            .catch(error => res.status(422).json(this.response(false, [], error)));
        });
    }

    response(status, data, error) {
        return {status: status, data: data || null, error: error || null};
    }
}