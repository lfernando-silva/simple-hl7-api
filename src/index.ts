const hl7 = require('simple-hl7');

const { messageDecoder } = require('./utils');

const app = hl7.tcp();

app.use((req: any, res: any, next: any) => {
    messageDecoder(req.msg)
    return next();
})

app.use((req: any, res: any, next: any) => {
    //res.ack is the ACK
    //acks are created automatically

    //send the res.ack back
    console.log('******sending ack*****')
    res.end()
})

app.use((err: Error, req: any, res: any, next: any) => {
    //error handler
    //standard error middleware would be
    console.log('******ERROR*****')
    console.log(err);
    var msa = res.ack.getSegment('MSA');
    msa.setField(1, 'AR');
    res.ack.addSegment('ERR', err.message);
    res.end();
});

//Listen on port 7777
app.start(7777);
console.log('Server running at port 7777');