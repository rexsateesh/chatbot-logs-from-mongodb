export default class HomeService {
    sayHello(req, res) {
        res.send({status: true, data: 'Hello, Ori ChatBot', error: null});
    }
}