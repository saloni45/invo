const express=require('express');
const bodyParser = require('body-parser');
const pdf =require ('html-pdf');
const cors = require('cors')
const mongoose = require('mongoose')
const url ="mongodb+srv://invoice:invoice@cluster0.g4moy.mongodb.net/form?retryWrites=true&w=majority"
mongoose.connect(url ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const formSchema =new mongoose.Schema(
    {
        data:Object,
    },
    {collection: "invoice_form" }
);
const Form = mongoose.model("Form",formSchema);
const formData = (pdfTemplate) =>{
    Form({data: pdfTemplate}).save((err) =>{
        if(err){
            throw err;
        }
    });
};
const pdfTemplate = require('./documents');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Post-PDF generation and fetching of the data 

app.post('/create-pdf',(req,res)=>{
pdf.create(pdfTemplate(req.body),{}).toFile('result.pdf',(err) =>{
    if (err) {
        res,send(Promise.reject());

    }
    res.send(Promise.resolve());
});
});
//Get-send the generated PDF To the Client
app.get('/fetch-pdf',(req,res) => {
res.sendFile(`${__dirname}/result.pdf`)
})
app.listen(port,() => console.log(`Listening on port ${port}`));

