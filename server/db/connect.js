const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://Shah1117:Shah1117@mailchimp.8qw7x.mongodb.net/MailChimp?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})